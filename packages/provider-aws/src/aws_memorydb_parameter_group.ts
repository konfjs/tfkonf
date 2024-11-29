import { TerraformConfig, TerraformResource } from "tfs";
export interface Parameter {
  name: string;
  value: string;
}
export interface AwsMemorydbParameterGroupArgs {
  description?: string;
  family: string;
  tags?: {
    [key: string]: string;
  };
  parameter: Parameter;
}
export class aws_memorydb_parameter_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMemorydbParameterGroupArgs) {
    super(config, "resource", args, resourceName, "aws_memorydb_parameter_group");
  }
}