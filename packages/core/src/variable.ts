import { TerraformConfig } from './config.js';
import { BlockNode } from './hcl.js';
import { TerraformResource } from './resource.js';

interface VariableArgs {
    default?: any;
    description?: string;
    ephemeral?: boolean;
    nullable?: boolean;
    sensitive?: boolean;
    type?: any;
    validation?: {
        condition: boolean;
        error_message: string;
    };
}

export class Variable extends TerraformResource {
    private readonly meta: any;
    constructor(
        protected readonly config: TerraformConfig,
        readonly name: string,
        readonly args: VariableArgs,
    ) {
        super(config);
        this.meta = {
            validation: {
                isBlock: true,
            },
        };
    }

    toHCL(): string {
        return new BlockNode(`variable ${this.name}`, this.args, this.meta).toHCL(0);
    }
}
