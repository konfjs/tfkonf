import { TerraformConfig } from './config.js';
import { BlockNode } from './hcl.js';
import { TerraformResource } from './resource.js';

interface ProviderArgs {
    [key: string]: any;
}

// TODO: Each provider resource must be generated in the provider specific package
export abstract class Provider extends TerraformResource {
    constructor(
        protected readonly config: TerraformConfig,
        readonly name: string,
        readonly args: ProviderArgs,
    ) {
        super(config);
    }

    toHCL(): string {
        return new BlockNode(`provider "${this.name}"`, this.args).toHCL(0);
    }
}
