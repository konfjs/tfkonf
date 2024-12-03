import { TerraformConfig } from './config.js';
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
        protected readonly args: RemovedArgs,
    ) {
        super(config, 'removed', args);
    }
}
