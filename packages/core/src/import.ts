import { TerraformConfig } from './config.js';
import { BlockNode } from './hcl.js';
import { TerraformResource } from './resource.js';

interface ImportArgs {
    to: string;
    id: string;
}

export class Import extends TerraformResource {
    constructor(
        protected readonly config: TerraformConfig,
        readonly args: ImportArgs,
    ) {
        super(config);
    }

    toHCL(): string {
        return new BlockNode('import', this.args).toHCL(0);
    }
}
