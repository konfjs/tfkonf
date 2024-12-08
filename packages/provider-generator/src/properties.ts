import JSON5 from 'json5';
import {
    ClassDeclarationStructure,
    GetAccessorDeclarationStructure,
    InterfaceDeclarationStructure,
    PropertySignatureStructure,
    SourceFile,
    StructureKind,
} from 'ts-morph';
import type { Block } from './schema.js';
import { getTSType, toPascalCase } from './utils.js';

type BlockID =
    | 'resource'
    | 'data'
    | 'provider'
    | 'variable'
    | 'output'
    | 'locals'
    | 'module'
    | 'moved'
    | 'terraform'
    | 'check'
    | 'import'
    | 'removed'
    | 'ephemeral';

export function generateProperties(
    sourceFile: SourceFile,
    classDeclaration: ClassDeclarationStructure,
    blockID: BlockID,
    resourceType: string,
    block: Block,
    parentName = '',
) {
    const argumentInterfaces: InterfaceDeclarationStructure[] = [];
    const classAttributeGetters: GetAccessorDeclarationStructure[] = [];
    const meta = {};
    traverseBlocks(
        blockID,
        resourceType,
        block,
        argumentInterfaces,
        classAttributeGetters,
        meta,
        parentName,
    );
    const constructorStatements = [`const meta = ${JSON5.stringify(meta)};`];
    if (blockID === 'provider') {
        constructorStatements.push(
            `super(terraformConfig, "${blockID}", args, meta, "${resourceType.replace('_provider', '')}");`,
        );
    } else {
        constructorStatements.push(
            `super(terraformConfig, "${blockID}", args, meta, "${resourceType}", resourceName);`,
        );
    }
    sourceFile.addInterfaces(argumentInterfaces);
    classDeclaration.getAccessors = classAttributeGetters;
    if (classDeclaration.ctors?.[0]) {
        classDeclaration.ctors[0].statements = constructorStatements;
    }
    sourceFile.addClass(classDeclaration);
}

export function traverseBlocks(
    blockID: BlockID,
    resourceType: string,
    block: Block,
    argumentInterfaces: InterfaceDeclarationStructure[],
    classAttributeGetters: GetAccessorDeclarationStructure[],
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
    if (parentName) {
        argumentInterfaceName = `${toPascalCase(parentName)}${toPascalCase(resourceType)}`;
    } else {
        argumentInterfaceName = `${toPascalCase(resourceType)}Args`;
        if (blockID === 'data') {
            argumentInterfaceName = `Data${argumentInterfaceName}`;
        }
    }

    const argumentInterfaceProperties: PropertySignatureStructure[] = [];

    if (blockID === 'provider') {
        argumentInterfaceProperties.push({
            kind: StructureKind.PropertySignature,
            name: 'alias',
            type: 'string',
            hasQuestionToken: true,
        });
    }

    // TODO: All input arguments also should become output attributes?
    if (block.attributes) {
        for (const [attributeName, attributeBody] of Object.entries(block.attributes)) {
            /**
             * Top level computed or required attributes are exposed as terraform resource attributes.
             */
            if (!parentName && (attributeBody.computed || attributeBody.required)) {
                const getterValue = `\${this.resourceType}.\${this.resourceName}.${attributeName}\`;`;
                classAttributeGetters.push({
                    kind: StructureKind.GetAccessor,
                    name: attributeName,
                    returnType: 'string',
                    statements: [
                        blockID === 'data'
                            ? `return \`data.${getterValue}`
                            : `return \`${getterValue}`,
                    ],
                });
            }
            /**
             * Every other non-computed attributes become properties in the interface.
             */
            if (!attributeBody.computed) {
                argumentInterfaceProperties.push({
                    kind: StructureKind.PropertySignature,
                    name: attributeName,
                    type: getTSType(attributeBody),
                    hasQuestionToken: attributeBody.optional,
                });
            }
        }
    }

    /**
     * Recursively traverse the block_types.
     * Each block_types.X should become a new interface.
     */
    if (block.block_types) {
        for (const [blockName, blockType] of Object.entries(block.block_types)) {
            if (!meta[blockName]) {
                meta[blockName] = { isBlock: true };
            }

            let nestedBlockType = '';
            if (
                (blockType.nesting_mode === 'list' || blockType.nesting_mode === 'set') &&
                blockType.max_items !== 1
            ) {
                nestedBlockType = '[]';
            }

            const isOptional = blockName === 'timeouts' || !blockType.min_items;
            const childInterfaceName = `${argumentInterfaceName}${toPascalCase(blockName)}`;
            argumentInterfaceProperties.push({
                kind: StructureKind.PropertySignature,
                name: blockName,
                type: `${toPascalCase(childInterfaceName)}${nestedBlockType}`,
                hasQuestionToken: isOptional,
            });

            traverseBlocks(
                blockID,
                blockName,
                blockType.block,
                argumentInterfaces,
                classAttributeGetters,
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
}
