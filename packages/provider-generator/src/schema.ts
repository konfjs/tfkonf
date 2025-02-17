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

/**
 * https://developer.hashicorp.com/terraform/cli/commands/providers/schema#block-representation
 */
export interface Block {
    /**
     * "attributes" describes any attributes that appear directly inside the
     * block. Keys in this map are the attribute names.
     */
    attributes?: {
        [attribute_name: string]: {
            /**
             * https://developer.hashicorp.com/terraform/language/expressions/types
             *
             * "type" is a representation of a type specification
             * that the attribute's value must conform to.
             */
            type: AttributeType;
            /**
             * "description" is an English-language description of
             * the purpose and usage of the attribute.
             */
            description?: string;
            description_kind?: 'markdown' | 'plain';
            /**
             * "required", if set to true, specifies that an
             * omitted or null value is not permitted.
             */
            required?: boolean;
            /**
             * "optional", if set to true, specifies that an
             * omitted or null value is permitted.
             */
            optional?: boolean;
            /**
             * "computed", if set to true, indicates that the
             * value comes from the provider rather than the configuration.
             */
            computed?: boolean;
            /**
             * "sensitive", if set to true, indicates that the
             * attribute may contain sensitive information.
             */
            sensitive?: boolean;
            deprecated?: boolean;
        };
    };
    /**
     * "block_types" describes any nested blocks that appear directly inside the block.
     * Keys in this map are the names of the block_type.
     */
    block_types?: {
        [block_name: string]: {
            /**
             * "nesting_mode" describes the nesting mode for the
             * child block, and can be one of the following:
             */
            nesting_mode: 'single' | 'list' | 'set' | 'map';
            block: Block;
            /**
             * "min_items" and "max_items" set lower and upper
             * limits on the number of child blocks allowed for
             * the list and set modes. These are omitted for other modes.
             */
            min_items?: number;
            max_items?: number;
        };
    };
    description?: string;
    description_kind?: 'markdown' | 'plain';
    deprecated?: boolean;
}

/**
 * https://developer.hashicorp.com/terraform/cli/commands/providers/schema#providers-schema-representation
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
            /**
             * "summary" is a shortened English-language description of
             * the purpose of the function in Markdown.
             */
            summary?: string;
            /**
             * "description" is a longer English-language description of
             * the purpose and usage of the function in Markdown.
             */
            description?: string;
            /**
             * "deprecation_message" when present signals that the function is deprecated
             * and the message contains practitioner-facing actions for the deprecation.
             */
            deprecation_message?: string;
            /**
             * "return_type" is a representation of a type specification
             * that the function returns.
             */
            return_type?: string;
            /**
             * "parameters" is an optional list of the positional parameters
             * that the function accepts.
             */
            parameters?: {
                /**
                 * "name" is the internal name of the parameter
                 */
                name: string;
                /**
                 * "description" is an optional English-language description of
                 * the purpose and usage of the parameter in Markdown.
                 */
                description?: string;
                /**
                 * "is_nullable" is true if null is acceptable value for the argument
                 */
                is_nullable: boolean;
                /**
                 * "type" is a representation of a type specification
                 * that the parameter's value must conform to.
                 */
                type: string;
            }[];
            /**
             * "variadic_parameter" is an optional representation of the
             * additional arguments that the function accepts after those
             * matching with the fixed parameters.
             */
            variadic_parameter?: {
                /**
                 * "name" is the internal name of the parameter
                 */
                name: string;
                /**
                 * "description" is an optional English-language description of
                 * the purpose and usage of the parameter in Markdown.
                 */
                description?: string;
                /**
                 * "is_nullable" is true if null is acceptable value for the argument
                 */
                is_nullable: boolean;
                /**
                 * "type" is a representation of a type specification
                 * that the parameter's value must conform to.
                 */
                type: string;
            };
        };
    };
}
