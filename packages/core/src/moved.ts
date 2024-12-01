import { TerraformConfig } from './config.js';
import { TerraformResource } from './resource.js';

interface MovedArgs {
    from: string;
    to: string;
}

export class Moved extends TerraformResource {
    constructor(
        private readonly config: TerraformConfig,
        readonly args: MovedArgs,
    ) {
        super(config);
    }

    // TODO
    toHCL(level: number): string {
        return '';
    }
}
