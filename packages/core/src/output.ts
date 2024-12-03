import { TerraformConfig } from './config.js';
import { TerraformResource } from './resource.js';

interface OutputArgs {
    [name: string]: any;
}

export class Output extends TerraformResource {
    constructor(
        protected readonly config: TerraformConfig,
        readonly resourceName: string,
        readonly args: OutputArgs,
    ) {
        super(config, 'output', args, resourceName);
    }
}
