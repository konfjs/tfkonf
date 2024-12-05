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
    const argumentInterfaces: InterfaceDeclarationStructure[] = [];
    const computedInterfaces: InterfaceDeclarationStructure[] = [];
    const classProperties: PropertyDeclarationStructure[] = [];
    const meta = {};
    traverseBlocks(
        resourceName,
        block,
        argumentInterfaces,
        computedInterfaces,
        classProperties,
        meta,
        parentName,
    );
    sourceFile.addInterfaces(argumentInterfaces);
    sourceFile.addInterfaces(computedInterfaces);
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
    argumentInterfaces: InterfaceDeclarationStructure[],
    computedInterfaces: InterfaceDeclarationStructure[],
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
    let argumentInterfaceName = '';
    let attributeInterfaceName = '';
    if (!parentName) {
        argumentInterfaceName = `${toPascalCase(resourceName)}Args`;
    } else {
        argumentInterfaceName = `${toPascalCase(parentName)}${toPascalCase(resourceName)}`;
    }
    attributeInterfaceName = `${argumentInterfaceName}Attributes`;

    const argumentInterfaceProperties: PropertySignatureStructure[] = [];
    const computedInterfaceProperties: PropertySignatureStructure[] = [];

    if (block.attributes) {
        for (const [attributeName, attributeBody] of Object.entries(block.attributes)) {
            if (!attributeBody.computed) {
                argumentInterfaceProperties.push({
                    kind: StructureKind.PropertySignature,
                    name: attributeName,
                    type: getTSType(attributeBody),
                    hasQuestionToken: attributeBody.optional,
                });
            } else {
                computedInterfaceProperties.push({
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
                    type: attributeBody.computed
                        ? attributeInterfaceName
                        : getTSType(attributeBody),
                    isReadonly: true,
                    hasQuestionToken: attributeBody.optional,
                    hasExclamationToken: !attributeBody.optional,
                });
            }
        }
    }

    if (block.block_types) {
        for (const [blockName, blockType] of Object.entries(block.block_types)) {
            const childInterfaceName = `${argumentInterfaceName}${toPascalCase(blockName)}`;
            const childComputedInterfaceName = `${childInterfaceName}Attributes`;
            let nestedBlockType = '';
            if (
                (blockType.nesting_mode === 'list' || blockType.nesting_mode === 'set') &&
                blockType.max_items !== 1
            ) {
                nestedBlockType = '[]';
            }
            const isOptional = blockName === 'timeouts' || !blockType.min_items;
            argumentInterfaceProperties.push({
                kind: StructureKind.PropertySignature,
                name: blockName,
                type: `${toPascalCase(childInterfaceName)}${nestedBlockType}`,
                hasQuestionToken: isOptional,
            });
            computedInterfaceProperties.push({
                kind: StructureKind.PropertySignature,
                name: blockName,
                type: `${toPascalCase(childComputedInterfaceName)}${nestedBlockType}`,
                hasQuestionToken: isOptional,
            });
            if (!meta[blockName]) {
                meta[blockName] = { isBlock: true };
            }
            if (!parentName) {
                classProperties.push({
                    kind: StructureKind.Property,
                    name: blockName,
                    type: `${toPascalCase(childComputedInterfaceName)}${nestedBlockType}`,
                    isReadonly: true,
                    hasQuestionToken: isOptional,
                    hasExclamationToken: !isOptional,
                });
            }
            traverseBlocks(
                blockName,
                blockType.block,
                argumentInterfaces,
                computedInterfaces,
                classProperties,
                meta[blockName],
                argumentInterfaceName,
            );
        }
    }

    argumentInterfaces.push({
        kind: StructureKind.Interface,
        name: argumentInterfaceName,
        properties: argumentInterfaceProperties,
        isExported: true,
    });

    computedInterfaces.push({
        kind: StructureKind.Interface,
        name: attributeInterfaceName,
        properties: computedInterfaceProperties,
        isExported: true,
        extends: [argumentInterfaceName],
    });
}
