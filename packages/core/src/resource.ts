import { TerraformConfig } from './config.js';
import { HCLNode } from './hcl.js';

/**
 * Represents a Terraform resource.
 * Each TerraformResource will belong to a TerraformConfig.
 */
export abstract class TerraformResource implements HCLNode {
    constructor(config: TerraformConfig) {
        config.addResource(this);
    }
    abstract toHCL(level: number): string;
}
