import { TerraformConfig } from './config.js';
import { TerraformResource } from './resource.js';

interface TerraformArgs {
    [key: string]: any;
    backend: any;
}

export class Terraform extends TerraformResource {
    constructor(
        private readonly config: TerraformConfig,
        readonly args: TerraformArgs,
    ) {
        super(config);
    }

    // TODO
    toHCL(level: number): string {
        return '';
    }
}
