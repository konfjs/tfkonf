import { TerraformConfig } from './config.js';
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
    constructor(
        protected readonly config: TerraformConfig,
        protected readonly resourceName: string,
        protected readonly args: VariableArgs,
    ) {
        super(config, 'variable', args, resourceName, undefined, {
            validation: {
                isBlock: true,
            },
        });
    }
}
