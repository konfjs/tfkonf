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
        protected readonly config: TerraformConfig,
        readonly args: CheckArgs,
    ) {
        super(config, 'check', args);
    }
}
