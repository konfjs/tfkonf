import { TerraformConfig } from './config.js';
import { BlockNode } from './hcl.js';
import { TerraformResource } from './resource.js';

interface MovedArgs {
    from: string;
    to: string;
}

export class Moved extends TerraformResource {
    constructor(
        protected readonly config: TerraformConfig,
        readonly args: MovedArgs,
    ) {
        super(config);
    }

    toHCL(): string {
        return new BlockNode('moved', this.args).toHCL(0);
    }
}
