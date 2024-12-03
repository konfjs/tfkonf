import { TerraformConfig } from './config.js';
import { TerraformResource } from './resource.js';

interface ProviderArgs {
    [key: string]: any;
}

// TODO: Each provider resource must be generated in the provider specific package
export abstract class Provider extends TerraformResource {
    constructor(
        protected readonly config: TerraformConfig,
        readonly resourceName: string,
        readonly args: ProviderArgs,
    ) {
        super(config, 'provider', args, resourceName);
    }
}
