import { TerraformConfig } from './config';

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
        readonly name?: string,
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
     */
    private formatAttributes(key: string, value: any, level: number): string {
        if (typeof value === 'object' && !Array.isArray(value)) {
            const nestedBlock = Object.entries(value)
                .map(([nestedKey, nestedValue]) => {
                    return this.formatAttributes(nestedKey, nestedValue, level + 1);
                })
                .join('\n');
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
                return `${this.blockType} "${this.resourceType}" "${this.name}" {\n${attributes}\n}`;
            case 'module':
                return `${this.blockType} "${this.name}" {\n${attributes}\n}`;
            case 'terraform':
            case 'import':
            case 'check':
            case 'moved':
                return `${this.blockType} {\n${attributes}\n}`;
        }
    }
}
