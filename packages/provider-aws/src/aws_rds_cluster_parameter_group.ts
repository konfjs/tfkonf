import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRdsClusterParameterGroupArgsparameter {
  apply_method?: string;
  name: string;
  value: string;
}
export interface AwsRdsClusterParameterGroupArgs {
  description?: string;
  family: string;
  tags?: {
    [key: string]: string;
  };
  parameter: AwsRdsClusterParameterGroupArgsparameter;
}
export class aws_rds_cluster_parameter_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRdsClusterParameterGroupArgs) {
    super(config, "resource", args, resourceName, "aws_rds_cluster_parameter_group");
  }
}