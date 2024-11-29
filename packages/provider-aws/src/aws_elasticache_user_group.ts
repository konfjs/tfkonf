import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsElasticacheUserGroupArgs {
  engine: string;
  tags?: {
    [key: string]: string;
  };
  user_group_id: string;
  user_ids?: string[];
}
export class aws_elasticache_user_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticacheUserGroupArgs) {
    super(config, "resource", args, resourceName, "aws_elasticache_user_group");
  }
}