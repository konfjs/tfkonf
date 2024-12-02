import { TerraformConfig } from './config.js';
import { BlockNode } from './hcl.js';
import { TerraformResource } from './resource.js';

interface OutputArgs {
    [name: string]: any;
}

export class Output extends TerraformResource {
    constructor(
        protected readonly config: TerraformConfig,
        readonly name: string,
        readonly args: OutputArgs,
    ) {
        super(config);
    }

    toHCL(): string {
        return new BlockNode(`output ${this.name}`, this.args).toHCL(0);
    }
}
