import { TerraformConfig } from './config.js';

/**
 * Represents a Terraform resource.
 * Each TerraformResource will belong to a TerraformConfig.
 */
export abstract class TerraformResource {
    constructor(
        private readonly config: TerraformConfig,
        /**
         * Each resource will belong to one of the following block types.
         */
        private readonly blockType:
            | 'terraform'
            | 'provider'
            | 'check'
            | 'import'
            | 'resource'
            | 'data'
            | 'module'
            | 'moved',
        /**
         * The arguments for the resource.
         */
        private readonly args: Record<string, any>,
        /**
         * The name of the resource. It can be omitted for some block types.
         * @example "my_service_account"
         */
        readonly resourceName?: string,
        /**
         * The type of the resource. It can be omitted for some block types.
         * @example "google_service_account"
         */
        private readonly resourceType?: string,
    ) {
        this.config.addResource(this);
    }

    /**
     * Format resource attributes to HCL.
     * TODO: Refactor this monstrosity.
     */
    private formatAttributes(key: string, value: any, level: number): string {
        if (typeof value === 'object' && !Array.isArray(value)) {
            const nestedBlock = Object.entries(value)
                .map(([nestedKey, nestedValue]) => {
                    return this.formatAttributes(nestedKey, nestedValue, level + 1);
                })
                .join('\n');
            if (key === 'backend') {
                const backendType = Object.keys(value)[0];
                const backendAttributes = Object.entries(value[backendType])
                    .map(([nestedKey, nestedValue]) => {
                        return this.formatAttributes(nestedKey, nestedValue, level + 1);
                    })
                    .join('\n');
                return `${'  '.repeat(level)}${key} "${backendType}" {\n${backendAttributes}\n${'  '.repeat(level)}}`;
            }
            if (key === 'required_providers') {
                const providerAttributes = Object.entries(value)
                    .map(([providerKey, providerValue]) => {
                        return `${'  '.repeat(level + 1)}${providerKey} = {\n${Object.entries(
                            // @ts-expect-error
                            providerValue,
                        )
                            .map(([nestedKey, nestedValue]) => {
                                return this.formatAttributes(nestedKey, nestedValue, level + 2);
                            })
                            .join('\n')}\n${'  '.repeat(level + 1)}}`;
                    })
                    .join('\n');
                return `${'  '.repeat(level)}${key} {\n${providerAttributes}\n${'  '.repeat(level)}}`;
            }
            return `${'  '.repeat(level)}${key} {\n${nestedBlock}\n${'  '.repeat(level)}}`;
        }
        return `${'  '.repeat(level)}${key} = ${JSON.stringify(value)}`;
    }

    /**
     * Converts the Terraform resource to HCL.
     */
    toHCL(): string {
        const attributes = Object.entries(this.args)
            .map(([key, value]) => this.formatAttributes(key, value, 1))
            .join('\n');

        switch (this.blockType) {
            case 'resource':
            case 'data':
                return `${this.blockType} "${this.resourceType}" "${this.resourceName}" {\n${attributes}\n}`;
            case 'module':
                return `${this.blockType} "${this.resourceName}" {\n${attributes}\n}`;
            case 'terraform':
                return `${this.blockType} {\n${attributes}\n}`;
            case 'provider':
                return `${this.blockType} "${this.resourceName}" {\n${attributes}\n}`;
            case 'import':
            case 'check':
            case 'moved':
                return `${this.blockType} {\n${attributes}\n}`;
            default:
                throw new Error(`Unsupported block type: ${this.blockType}`);
        }
    }
}
