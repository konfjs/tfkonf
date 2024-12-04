export type AttributeType = 'bool' | 'number' | 'string' | unknown[];

export interface Attribute {
    /**
     * https://developer.hashicorp.com/terraform/language/expressions/types
     *
     * Type of the attribute must be one of the following:
     */
    type: AttributeType;
    description?: string;
    /**
     * If attribute is marked as optional, then it should be optional in the interface.
     */
    optional?: boolean;
    /**
     * If the attribute is computed, then it should not be included in the interface body.
     */
    computed?: boolean;
}

export interface BlockType {
    nesting_mode: 'single' | 'list' | 'set' | 'map';
    block: Block;
    min_items?: number;
    max_items?: number;
}

export interface Block {
    description?: string;
    attributes?: {
        [key: string]: Attribute;
    };
    block_types?: {
        [key: string]: BlockType;
    };
}

/**
 * https://developer.hashicorp.com/terraform/cli/commands/providers/schema
 */
export interface ProviderSchema {
    provider: {
        block: Block;
    };
    resource_schemas: {
        [resource: string]: {
            block: Block;
        };
    };
    data_source_schemas?: {
        [resource: string]: {
            block: Block;
        };
    };
    functions?: Record<string, any>;
}
