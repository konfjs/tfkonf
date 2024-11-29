import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDbInstanceRoleAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsDbInstanceRoleAssociationArgs {
  db_instance_identifier: string;
  feature_name: string;
  role_arn: string;
  timeouts: AwsDbInstanceRoleAssociationArgsTimeouts;
}
export class aws_db_instance_role_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDbInstanceRoleAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_db_instance_role_association");
  }
}