import { TerraformConfig } from './config.js';
import { TerraformResource } from './resource.js';

interface LocalsArgs {
    [name: string]: any;
}

export class Locals extends TerraformResource {
    constructor(
        protected readonly config: TerraformConfig,
        readonly args: LocalsArgs,
    ) {
        super(config, 'locals', args);
    }
}
