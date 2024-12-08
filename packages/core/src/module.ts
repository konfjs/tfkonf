import { TerraformConfig } from './config.js';
import { TerraformResource } from './resource.js';

interface ModuleArgs {
    source: string;
    [key: string]: any;
}

export class Module extends TerraformResource {
    constructor(
        protected readonly terraformConfig: TerraformConfig,
        protected readonly resourceName: string,
        readonly args: ModuleArgs,
    ) {
        super(terraformConfig, 'module', args, undefined, undefined, resourceName);
    }
}
