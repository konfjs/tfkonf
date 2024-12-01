import { TerraformConfig } from './config.js';
import { BlockNode } from './hcl.js';
import { TerraformResource } from './resource.js';

interface ModuleArgs {
    source: string;
    [key: string]: any;
}

export class Module extends TerraformResource {
    private block: BlockNode;

    constructor(
        private readonly config: TerraformConfig,
        readonly resourceName: string,
        readonly args: ModuleArgs,
    ) {
        super(config, resourceName);
        this.block = new BlockNode(`module "${resourceName}"`, args);
    }

    toHCL(level: number): string {
        return this.block.toHCL(level);
    }
}
