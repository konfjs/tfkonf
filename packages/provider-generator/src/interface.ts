import * as t from '@babel/types';
import pc from 'picocolors';
import type { Attribute, AttributeType, Block } from './schema.js';
import { toPascalCase } from './utils.js';

/**
 * Array's first element is always "list", "set" or "map".
 * jq '[.[] | select(type == "array")[0]] | unique' types.json
 */
function getListType(type: AttributeType): t.TSType {
    if (type[0] === 'list' || type[0] === 'set') {
        if (type[1] === 'string') {
            return t.tsArrayType(t.tsStringKeyword());
        }
        if (type[1] === 'number') {
            return t.tsArrayType(t.tsNumberKeyword());
        }
        if (Array.isArray(type[1])) {
            // TODO: Recursively handle nested types.
        }
    }
    if (type[0] === 'map') {
        let mapType: t.TSType = t.tsAnyKeyword();
        if (type[1] === 'string') {
            mapType = t.tsStringKeyword();
        }
        if (type[1] === 'number') {
            mapType = t.tsNumberKeyword();
        }
        return t.tsTypeLiteral([
            t.tsIndexSignature([t.identifier('key: string')], t.tsTypeAnnotation(mapType)),
        ]);
    }
    return t.tsArrayType(t.tsAnyKeyword());
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
export function getTSType(attr: Attribute): t.TSType {
    if (Array.isArray(attr.type) && attr.type.length === 2) {
        return getListType(attr.type);
    }

    switch (attr.type) {
        case 'string':
            return t.tsStringKeyword();
        case 'number':
            return t.tsNumberKeyword();
        case 'bool':
            return t.tsBooleanKeyword();
        default:
            console.log(pc.dim(JSON.stringify(attr, null, 2)));
            throw new Error('Unknown attribute type');
    }
}

export function generateInterfaceDeclaration(
    ast: t.Program,
    resourceName: string,
    block: Block,
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

    const properties: t.TSPropertySignature[] = [];

    if (block.attributes) {
        for (const [attributeName, attributeBody] of Object.entries(block.attributes)) {
            if (!attributeBody.computed) {
                const i = t.tsPropertySignature(
                    t.identifier(attributeName),
                    t.tsTypeAnnotation(getTSType(attributeBody)),
                );
                i.optional = attributeBody.optional;
                properties.push(i);
            }
        }
    }

    if (block.block_types) {
        for (const [blockName, blockType] of Object.entries(block.block_types)) {
            const childInterfaceName = `${interfaceName}${toPascalCase(blockName)}`;
            const i = t.tsPropertySignature(
                t.identifier(blockName),
                t.tsTypeAnnotation(
                    t.tsTypeReference(t.identifier(toPascalCase(childInterfaceName))),
                ),
            );
            properties.push(i);
            generateInterfaceDeclaration(ast, blockName, blockType.block, interfaceName);
        }
    }

    const newInterface = t.exportNamedDeclaration(
        t.tsInterfaceDeclaration(
            t.identifier(interfaceName),
            null,
            null,
            t.tsInterfaceBody(properties),
        ),
    );

    ast.body.push(newInterface);
}
