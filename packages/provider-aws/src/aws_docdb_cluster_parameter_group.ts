import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDocdbClusterParameterGroupArgsparameter {
  apply_method?: string;
  name: string;
  value: string;
}
export interface AwsDocdbClusterParameterGroupArgs {
  description?: string;
  family: string;
  tags?: {
    [key: string]: string;
  };
  parameter: AwsDocdbClusterParameterGroupArgsparameter;
}
export class aws_docdb_cluster_parameter_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDocdbClusterParameterGroupArgs) {
    super(config, "resource", args, resourceName, "aws_docdb_cluster_parameter_group");
  }
}