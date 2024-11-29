import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDaxParameterGroupArgsparameters {
  name: string;
  value: string;
}
export interface AwsDaxParameterGroupArgs {
  description?: string;
  name: string;
  parameters: AwsDaxParameterGroupArgsparameters;
}
export class aws_dax_parameter_group extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDaxParameterGroupArgs) {
    super(config, "resource", args, resourceName, "aws_dax_parameter_group");
  }
}