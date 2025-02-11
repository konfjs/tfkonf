/**
 * https://developer.hashicorp.com/terraform/language/expressions/type-constraints
 */
export type PrimitiveType = 'string' | 'number' | 'bool';
export type CollectionType = 'list' | 'map' | 'set';
export type StructuralType = 'object' | 'tuple';

export type AttributeType =
    | PrimitiveType
    | [CollectionType, PrimitiveType]
    | [CollectionType, [StructuralType, { [key: string]: AttributeType }]];

export interface Attribute {
    /**
     * https://developer.hashicorp.com/terraform/language/expressions/types
     *
     * Type of the attribute must be one of the following:
     */
    type: AttributeType;
    description?: string;
    description_kind?: 'markdown' | 'plain';
    /**
     * If attribute is marked as optional, then it should be optional in the interface.
     */
    optional?: boolean;
    /**
     * If the attribute is computed, then it should not be included in the interface body.
     */
    computed?: boolean;
    /**
     * If the attribute is required, then it should be required in the interface.
     */
    required?: boolean;
    sensitive?: boolean;
    deprecated?: boolean;
}

/**
 * nesting_mode can be one of the following:
 * jq '[.. | objects | select(has("nesting_mode")) | .nesting_mode] | unique' google/schema.json
 * jq '[.. | objects | select(has("nesting_mode")) | {nesting_mode, min_items, max_items}] | unique' google/schema.json
 */
export interface BlockType {
    nesting_mode: 'list' | 'set' | 'single';
    block: Block;
    min_items?: number;
    max_items?: number;
}

export interface Block {
    attributes?: {
        [key: string]: Attribute;
    };
    block_types?: {
        [key: string]: BlockType;
    };
    description?: string;
    description_kind?: 'markdown' | 'plain';
    deprecated?: boolean;
}

/**
 * https://developer.hashicorp.com/terraform/cli/commands/providers/schema
 */
export interface ProviderSchema {
    provider: {
        block: Block;
    };
    resource_schemas: {
        [resource_name: string]: {
            block: Block;
        };
    };
    data_source_schemas?: {
        [resource_name: string]: {
            block: Block;
        };
    };
    ephemeral_resource_schemas?: {
        [resource_name: string]: {
            block: Block;
        };
    };
    functions?: {
        [function_name: string]: {
            description?: string;
            summary?: string;
            return_type?: string;
            parameters?: {
                name: string;
                description?: string;
                type: string;
            }[];
        };
    };
}
