import pc from 'picocolors';
import {
    InterfaceDeclarationStructure,
    PropertySignatureStructure,
    SourceFile,
    StructureKind,
} from 'ts-morph';
import type { Attribute, AttributeType, Block } from './schema.js';
import { toPascalCase } from './utils.js';

/**
 * Array's first element is always "list", "set" or "map".
 * jq '[.[] | select(type == "array")[0]] | unique' types.json
 */
function getListType(type: AttributeType) {
    if (type[0] === 'list' || type[0] === 'set') {
        if (type[1] === 'string') {
            return 'string[]';
        }
        if (type[1] === 'number') {
            return 'number[]';
        }
        if (Array.isArray(type[1])) {
            // TODO: Recursively handle nested types.
        }
    }
    if (type[0] === 'map') {
        let mapType = 'any';
        if (type[1] === 'string') {
            mapType = 'string';
        }
        if (type[1] === 'number') {
            mapType = 'number';
        }

        return `{ [key: string]: ${mapType} }`;
    }
    return 'any[]';
}

/**
 * Extract all the types from the providers.json file.
 * jq '[.. | select(type == "object" and has("type") and (.type | type != "object" )) | .type] | unique' providers.json > types.json
 *
 * Type array has always the same length of 2. The second element can be N number of nested types.
 * jq '[.[] | select(type == "array") | length] | unique' types.json
 *
 * It seems attribute type is either "bool", "number", "string" or "array".
 * jq '.[] | select(type != "array")' types.json
 */
export function getTSType(attr: Attribute) {
    if (Array.isArray(attr.type) && attr.type.length === 2) {
        return getListType(attr.type);
    }

    switch (attr.type) {
        case 'string':
            return 'string';
        case 'number':
            return 'number';
        case 'bool':
            return 'boolean';
        default:
            console.log(pc.dim(JSON.stringify(attr, null, 2)));
            throw new Error('Unknown attribute type');
    }
}

export function generateInterfaces(
    sourceFile: SourceFile,
    resourceName: string,
    block: Block,
    parentName = '',
    topLevel = false,
) {
    const interfaces: InterfaceDeclarationStructure[] = [];
    generateInterfaceDeclaration(resourceName, block, interfaces, parentName, topLevel);
    sourceFile.addInterfaces(interfaces);
}

export function generateInterfaceDeclaration(
    resourceName: string,
    block: Block,
    interfaces: InterfaceDeclarationStructure[],
    parentName = '',
    topLevel = false,
) {
    /**
     * Each block is a separate interface.
     * Each block.attribute is a property in the interface.
     * Each block_types.X is a nested interface reference.
     * Each block_types.X.block is a new interface.
     * and so on...
     */
    let interfaceName = '';
    if (topLevel) {
        interfaceName = `${toPascalCase(resourceName)}Args`;
    } else {
        interfaceName = `${toPascalCase(parentName)}${toPascalCase(resourceName)}`;
    }

    const properties: PropertySignatureStructure[] = [];

    if (block.attributes) {
        for (const [attributeName, attributeBody] of Object.entries(block.attributes)) {
            if (!attributeBody.computed) {
                properties.push({
                    kind: StructureKind.PropertySignature,
                    name: attributeName,
                    type: getTSType(attributeBody),
                    hasQuestionToken: attributeBody.optional,
                });
            }
        }
    }

    if (block.block_types) {
        for (const [blockName, blockType] of Object.entries(block.block_types)) {
            const childInterfaceName = `${interfaceName}${toPascalCase(blockName)}`;
            properties.push({
                kind: StructureKind.PropertySignature,
                name: blockName,
                // TODO: Check if the block is a list, set or map. Generate correct block type.
                type: toPascalCase(childInterfaceName),
                hasQuestionToken:
                    blockName === 'timeouts' || !blockType.min_items || blockType.min_items === 0,
            });
            generateInterfaceDeclaration(blockName, blockType.block, interfaces, interfaceName);
        }
    }

    interfaces.push({
        kind: StructureKind.Interface,
        name: interfaceName,
        properties: properties,
        isExported: true,
    });
}
