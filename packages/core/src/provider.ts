import { TerraformConfig } from './config.js';
import { BlockNode } from './hcl.js';
import { TerraformResource } from './resource.js';

interface ProviderArgs {
    [key: string]: any;
}

export class Provider extends TerraformResource {
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
