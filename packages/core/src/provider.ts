import { TerraformConfig } from './config.js';
import { TerraformResource } from './resource.js';

interface ProviderArgs {
    [key: string]: string;
}

export class Provider extends TerraformResource {
    constructor(
        private readonly config: TerraformConfig,
        readonly name: string,
        readonly args: ProviderArgs,
    ) {
        super(config, name);
    }

    // TODO
    toHCL(level: number): string {
        return '';
    }
}
