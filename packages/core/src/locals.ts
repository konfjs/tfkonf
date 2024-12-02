import { TerraformConfig } from './config.js';
import { BlockNode } from './hcl.js';
import { TerraformResource } from './resource.js';

interface LocalsArgs {
    [name: string]: any;
}

export class Locals extends TerraformResource {
    constructor(
        protected readonly config: TerraformConfig,
        readonly args: LocalsArgs,
    ) {
        super(config);
    }

    toHCL(): string {
        return new BlockNode('locals', this.args).toHCL(0);
    }
}
