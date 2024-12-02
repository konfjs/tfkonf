import { TerraformConfig } from './config.js';
import { BlockNode, HCLNode } from './hcl.js';

/**
 * Represents a Terraform resource.
 * Each TerraformResource will belong to a TerraformConfig.
 */
export abstract class TerraformResource implements HCLNode {
    constructor(protected readonly config: TerraformConfig) {
        config.addResource(this);
    }

    abstract toHCL(): string;
}
