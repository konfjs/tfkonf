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
    constructor(config: TerraformConfig, args: CheckArgs) {
        super(config);
    }

    // TODO
    toHCL(level: number): string {
        return '';
    }
}
