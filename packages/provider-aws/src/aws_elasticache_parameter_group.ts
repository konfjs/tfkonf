import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsElasticacheParameterGroupArgsparameter {
  name: string;
  value: string;
}
export interface AwsElasticacheParameterGroupArgs {
  description?: string;
  family: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  parameter: AwsElasticacheParameterGroupArgsparameter;
}
export class aws_elasticache_parameter_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticacheParameterGroupArgs) {
    super(config, "resource", args, resourceName, "aws_elasticache_parameter_group");
  }
}