import { TerraformConfig } from './config.js';
import { BlockNode } from './hcl.js';
import { TerraformResource } from './resource.js';

interface ModuleArgs {
    source: string;
    [key: string]: any;
}

export class Module extends TerraformResource {
    constructor(
        protected readonly config: TerraformConfig,
        readonly name: string,
        readonly args: ModuleArgs,
    ) {
        super(config);
    }

    toHCL(): string {
        return new BlockNode(`module "${this.name}"`, this.args).toHCL(0);
    }
}
