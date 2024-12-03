import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsNeptuneClusterParameterGroupArgsParameter {
  apply_method?: string;
  name: string;
  value: string;
}
export interface AwsNeptuneClusterParameterGroupArgs {
  description?: string;
  family: string;
  tags?: {
    [key: string]: string;
  };
  parameter: AwsNeptuneClusterParameterGroupArgsParameter;
}
export class aws_neptune_cluster_parameter_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsNeptuneClusterParameterGroupArgs) {
    super(config, "resource", args, resourceName, "aws_neptune_cluster_parameter_group");
  }
}