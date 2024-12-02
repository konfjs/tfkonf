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

    toHCL(): string {
        const terraformBlock = new BlockNode('terraform', {});
        const backendType = Object.keys(this.args.backend)[0];
        if (backendType) {
            const backendConfig = this.args.backend[backendType as keyof Exclusive<BackendConfig>];
            if (backendConfig) {
                const backendBlock = new BlockNode(`backend ${backendType}`, backendConfig);
                terraformBlock.children.push(backendBlock);
            }
        }
        return terraformBlock.toHCL(0);
    }
}
