import { TerraformConfig } from './config.js';
import { TerraformResource } from './resource.js';

interface EphemeralArgs {
    [attribute: string]: any;
}

export class Ephemeral extends TerraformResource {
    constructor(
        protected readonly terraformConfig: TerraformConfig,
        protected readonly resourceType: string,
        protected readonly resourceName: string,
        readonly args: EphemeralArgs,
    ) {
        super(terraformConfig, 'ephemeral', args, undefined, resourceType, resourceName);
    }
}
