import { TerraformConfig } from './config.js';
import { BlockNode, HCLNode } from './hcl.js';

/**
 * Represents a Terraform resource.
 * Each TerraformResource will belong to a TerraformConfig.
 */
export abstract class TerraformResource implements HCLNode {
    constructor(
        protected readonly config: TerraformConfig,
        protected readonly blockType: string,
        protected readonly args: { [key: string]: any },
        protected readonly resourceName?: string,
        protected readonly resourceType?: string,
        protected readonly meta?: any,
    ) {
        config.addResource(this);
    }

    toHCL(): string {
        return new BlockNode(
            `${this.blockType} ${this.resourceType} ${this.resourceName}`,
            this.args,
            this.meta,
        ).toHCL(0);
    }
}
