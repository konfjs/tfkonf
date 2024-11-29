import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsElasticacheUserGroupAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsElasticacheUserGroupAssociationArgs {
  user_group_id: string;
  user_id: string;
  timeouts: AwsElasticacheUserGroupAssociationArgsTimeouts;
}
export class aws_elasticache_user_group_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticacheUserGroupAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_elasticache_user_group_association");
  }
}