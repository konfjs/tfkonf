import * as t from '@babel/types';
import chalk from 'chalk';
import type { Attribute, Block } from './schema.js';
import { toPascalCase } from './utils.js';

// TODO: Handle all attribute types
function getTSType(attribute: Attribute): t.TSType {
    if (Array.isArray(attribute.type)) {
        if (attribute.type.length === 2) {
            if (attribute.type[0] === 'list' || attribute.type[0] === 'set') {
                if (attribute.type[1] === 'string') {
                    return t.tsArrayType(t.tsStringKeyword());
                }
                if (attribute.type[1] === 'number') {
                    return t.tsArrayType(t.tsNumberKeyword());
                }
            }
            if (attribute.type[0] === 'map') {
                if (attribute.type[1] === 'string') {
                    return t.tsTypeLiteral([
                        t.tsIndexSignature(
                            [t.identifier('key: string')],
                            t.tsTypeAnnotation(t.tsStringKeyword()),
                        ),
                    ]);
                }
                if (attribute.type[1] === 'number') {
                    return t.tsTypeLiteral([
                        t.tsIndexSignature(
                            [t.identifier('key: string')],
                            t.tsTypeAnnotation(t.tsNumberKeyword()),
                        ),
                    ]);
                }
            }
        }
    }

    switch (attribute.type) {
        case 'string':
            return t.tsStringKeyword();
        case 'number':
            return t.tsNumberKeyword();
        case 'bool':
            return t.tsBooleanKeyword();
        case 'list':
        case 'tuple':
        case 'set':
            return t.tsArrayType(t.tsAnyKeyword());
        case 'map':
        case 'object':
            return t.tsTypeLiteral([
                t.tsIndexSignature(
                    [t.identifier('key: string')],
                    t.tsTypeAnnotation(t.tsAnyKeyword()),
                ),
            ]);
        case 'null':
            return t.tsNullKeyword();
        default:
            console.log(chalk.dim(JSON.stringify(attribute, null, 2)));
            throw new Error(`Unknown attribute type: ${chalk.red(attribute.type)}`);
    }
}

export function generateInterfaceDeclaration(
    ast: t.Program,
    resourceName: string,
    block: Block,
    topLevel: boolean,
) {
    /**
     * Each block is a separate interface.
     * Each block.attribute is a property in the interface.
     * Each block_types.X is a nested interface reference.
     * Each block_types.X.block is a new interface.
     * and so on...
     */
    const properties: t.TSPropertySignature[] = [];

    if (block.attributes) {
        for (const [attributeName, attributeBody] of Object.entries(block.attributes)) {
            const i = t.tsPropertySignature(
                t.identifier(attributeName),
                t.tsTypeAnnotation(getTSType(attributeBody)),
            );
            properties.push(i);
        }
    }

    if (block.block_types) {
        for (const [blockName, blockType] of Object.entries(block.block_types)) {
            const i = t.tsPropertySignature(
                t.identifier(blockName),
                t.tsTypeAnnotation(t.tsTypeReference(t.identifier(toPascalCase(blockName)))),
            );
            properties.push(i);
            generateInterfaceDeclaration(ast, blockName, blockType.block, false);
        }
    }

    const interfaceName = topLevel
        ? `${toPascalCase(resourceName)}Args`
        : toPascalCase(resourceName);

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
