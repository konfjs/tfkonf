import { TerraformConfig } from './config.js';
import { BlockNode } from './hcl.js';
import { TerraformResource } from './resource.js';

interface EphemeralArgs {
    [attribute: string]: any;
}

export class Ephemeral extends TerraformResource {
    constructor(
        protected readonly config: TerraformConfig,
        readonly resource: string,
        readonly name: string,
        readonly args: EphemeralArgs,
    ) {
        super(config);
    }

    toHCL(): string {
        return new BlockNode(`ephemeral ${this.resource} ${this.name}`, this.args).toHCL(0);
    }
}
