import { TerraformConfig } from './config.js';
import { TerraformResource } from './resource.js';

interface OutputArgs {
    [name: string]: any;
}

export class Output extends TerraformResource {
    constructor(
        protected readonly terraformConfig: TerraformConfig,
        protected readonly resourceName: string,
        readonly args: OutputArgs,
    ) {
        super(terraformConfig, 'output', args, undefined, undefined, resourceName);
    }
}
