import { TerraformConfig } from './config.js';
import { TerraformResource } from './resource.js';

interface EphemeralArgs {
    [attribute: string]: any;
}

export class Ephemeral extends TerraformResource {
    constructor(
        protected readonly config: TerraformConfig,
        readonly resourceType: string,
        readonly resourceName: string,
        readonly args: EphemeralArgs,
    ) {
        super(config, 'ephemeral', args, resourceName, resourceType);
    }
}
