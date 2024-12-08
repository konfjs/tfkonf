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

    toHCL(): string {
        let result = `variable "${this.resourceName}" {\n`;
        for (const [key, value] of Object.entries(this.args)) {
            /**
             * Terraform variable's "type" attribute should be raw string without quotes.
             * Validation is a block.
             */
            if (key === 'type') {
                result += `type = ${value}\n`;
            } else if (key === 'validation') {
                result += 'validation {\n';
                for (const [k, v] of Object.entries(value)) {
                    result += `  ${k} = ${JSON.stringify(v)}\n`;
                }
                result += '}\n';
            } else {
                result += `${key} = ${JSON.stringify(value)}\n`;
            }
        }
        return `${result}}`;
    }
}
