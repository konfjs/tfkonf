import { TerraformConfig } from './config.js';
import { BlockNode } from './hcl.js';
import { TerraformResource } from './resource.js';

interface RemovedArgs {
    from: string;
    lifecycle: {
        destroy: boolean;
    };
}

export class Removed extends TerraformResource {
    constructor(
        protected readonly config: TerraformConfig,
        private readonly args: RemovedArgs,
    ) {
        super(config);
    }

    // TODO: args.from must be resource reference
    toHCL(): string {
        return new BlockNode('removed', this.args).toHCL(0);
    }
}
