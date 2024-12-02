import { BackendConfig } from './backend.js';
import { TerraformConfig } from './config.js';
import { BlockNode } from './hcl.js';
import { TerraformResource } from './resource.js';
import { Exclusive } from './utils.js';

interface TerraformArgs {
    backend: Exclusive<BackendConfig>;
}

export class Terraform extends TerraformResource {
    constructor(
        protected readonly config: TerraformConfig,
        readonly args: TerraformArgs,
    ) {
        super(config);
    }

    // TODO
    toHCL(): string {
        const base = new BlockNode('terraform', this.args);
        const backend = new BlockNode('backend', this.args.backend);
        return new BlockNode('terraform', this.args).toHCL(0);
    }
}
