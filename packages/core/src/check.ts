import { TerraformConfig } from './config.js';
import { TerraformResource } from './resource.js';

interface CheckArgs {
    assert: {
        condition: boolean;
        message: string;
    };
    data: TerraformResource;
}

export class Check extends TerraformResource {
    constructor(
        protected readonly terraformConfig: TerraformConfig,
        readonly args: CheckArgs,
    ) {
        super(terraformConfig, 'check', args);
    }
}
