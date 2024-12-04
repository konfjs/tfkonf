import {
    ClassDeclarationStructure,
    InterfaceDeclarationStructure,
    PropertyDeclarationStructure,
    PropertySignatureStructure,
    SourceFile,
    StructureKind,
} from 'ts-morph';
import type { Block } from './schema.js';
import { getTSType, toPascalCase } from './utils.js';

export function generateProperties(
    sourceFile: SourceFile,
    classDeclaration: ClassDeclarationStructure,
    resourceName: string,
    block: Block,
    parentName = '',
) {
    const interfaces: InterfaceDeclarationStructure[] = [];
    const classProperties: PropertyDeclarationStructure[] = [];
    const meta = {};
    traverseBlocks(resourceName, block, interfaces, classProperties, meta, parentName);
    sourceFile.addInterfaces(interfaces);
    classDeclaration.properties = classProperties;
    if (classDeclaration.ctors?.[0]) {
        classDeclaration.ctors[0].statements = [
            `const meta = ${JSON.stringify(meta)};`,
            `super(terraformConfig, "resource", args, resourceName, "${resourceName}", meta);`,
        ];
    }
    sourceFile.addClass(classDeclaration);
}

export function traverseBlocks(
    resourceName: string,
    block: Block,
    interfaces: InterfaceDeclarationStructure[],
    classProperties: PropertyDeclarationStructure[],
    meta: any,
    parentName = '',
) {
    /**
     * Each block is a separate interface.
     * Each block.attribute is a property in the interface.
     * Each block_types.X is a nested interface reference.
     * Each block_types.X.block is a new interface.
     * and so on...
     */
    let interfaceName = '';
    if (!parentName) {
        interfaceName = `${toPascalCase(resourceName)}Args`;
    } else {
        interfaceName = `${toPascalCase(parentName)}${toPascalCase(resourceName)}`;
    }

    const interfaceProperties: PropertySignatureStructure[] = [];

    if (block.attributes) {
        for (const [attributeName, attributeBody] of Object.entries(block.attributes)) {
            if (!attributeBody.computed) {
                interfaceProperties.push({
                    kind: StructureKind.PropertySignature,
                    name: attributeName,
                    type: getTSType(attributeBody),
                    hasQuestionToken: attributeBody.optional,
                });
            }
            if (!parentName) {
                classProperties.push({
                    kind: StructureKind.Property,
                    name: attributeName,
                    type: getTSType(attributeBody),
                    isReadonly: true,
                    hasQuestionToken: attributeBody.optional,
                    hasExclamationToken: !attributeBody.optional,
                });
            }
        }
    }

    if (block.block_types) {
        for (const [blockName, blockType] of Object.entries(block.block_types)) {
            const childInterfaceName = `${interfaceName}${toPascalCase(blockName)}`;
            let nestedBlockType = '';
            if (
                (blockType.nesting_mode === 'list' || blockType.nesting_mode === 'set') &&
                blockType.max_items !== 1
            ) {
                nestedBlockType = '[]';
            }
            const isOptional = blockName === 'timeouts' || !blockType.min_items;
            interfaceProperties.push({
                kind: StructureKind.PropertySignature,
                name: blockName,
                type: `${toPascalCase(childInterfaceName)}${nestedBlockType}`,
                hasQuestionToken: isOptional,
            });
            if (!meta[blockName]) {
                meta[blockName] = { isBlock: true };
            }
            if (!parentName) {
                classProperties.push({
                    kind: StructureKind.Property,
                    name: blockName,
                    type: `${toPascalCase(childInterfaceName)}${nestedBlockType}`,
                    isReadonly: true,
                    hasQuestionToken: isOptional,
                    hasExclamationToken: !isOptional,
                });
            }
            traverseBlocks(
                blockName,
                blockType.block,
                interfaces,
                classProperties,
                meta[blockName],
                interfaceName,
            );
        }
    }

    interfaces.push({
        kind: StructureKind.Interface,
        name: interfaceName,
        properties: interfaceProperties,
        isExported: true,
    });
}
