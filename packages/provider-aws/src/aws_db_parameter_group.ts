import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDbParameterGroupArgsparameter {
  apply_method?: string;
  name: string;
  value: string;
}
export interface AwsDbParameterGroupArgs {
  description?: string;
  family: string;
  skip_destroy?: boolean;
  tags?: {
    [key: string]: string;
  };
  parameter: AwsDbParameterGroupArgsparameter;
}
export class aws_db_parameter_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDbParameterGroupArgs) {
    super(config, "resource", args, resourceName, "aws_db_parameter_group");
  }
}