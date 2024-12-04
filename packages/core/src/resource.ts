import { TerraformConfig } from './config.js';
import { BlockNode, HCLNode } from './hcl.js';

/**
 * Represents a Terraform resource.
 * Each TerraformResource will belong to a TerraformConfig.
 */
export abstract class TerraformResource implements HCLNode {
    constructor(
        protected readonly terraformConfig: TerraformConfig,
        protected readonly blockType:
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
            | 'ephemeral',
        /**
         * The arguments for the resource.
         * Some resources don't require names.
         */
        protected readonly args: { [key: string]: any },
        protected readonly resourceName?: string,
        /**
         * The type of the resource.
         * If the resource has a type, then it requires a name.
         */
        protected readonly resourceType?: string,
        /**
         * Additional metadata for the resource.
         * E.g. block types etc.
         */
        protected readonly meta?: any,
    ) {
        terraformConfig.addResource(this);
    }

    toHCL(): string {
        let blockType: string = this.blockType;
        if (this.resourceType) {
            blockType = `${blockType} ${this.resourceType}`;
        }
        if (this.resourceName) {
            blockType = `${blockType} ${this.resourceName}`;
        }
        return new BlockNode(blockType, this.args, this.meta).toHCL(0);
    }
}
