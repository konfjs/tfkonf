import pc from 'picocolors';
import { Attribute, AttributeType } from './schema.js';

export function toPascalCase(str: string): string {
    if (str.includes('_')) {
        return str
            .split('_')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join('');
    }
    return str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

/**
 * Array's first element is always "list", "set" or "map".
 * jq '[.[] | select(type == "array")[0]] | unique' types.json
 */
export function getListType(type: AttributeType) {
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
 * Simple terraform to typescript mapping.
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
