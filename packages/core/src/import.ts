import { TerraformConfig } from './config.js';
import { TerraformResource } from './resource.js';

interface ImportArgs {
    to: string;
    id: string;
}

export class Import extends TerraformResource {
    constructor(
        private readonly config: TerraformConfig,
        readonly args: ImportArgs,
    ) {
        super(config);
    }

    // TODO
    toHCL(level: number): string {
        return '';
    }
}
