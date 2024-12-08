import { TerraformConfig } from './config.js';
import { TerraformResource } from './resource.js';

interface MovedArgs {
    from: string;
    to: string;
}

export class Moved extends TerraformResource {
    constructor(
        protected readonly terraformConfig: TerraformConfig,
        readonly args: MovedArgs,
    ) {
        super(terraformConfig, 'moved', args);
    }
}
