import { TerraformConfig } from './config.js';
import { TerraformResource } from './resource.js';

interface ImportArgs {
    to: string;
    id: string;
}

export class Import extends TerraformResource {
    constructor(
        protected readonly terraformConfig: TerraformConfig,
        readonly args: ImportArgs,
    ) {
        super(terraformConfig, 'import', args);
    }
}
