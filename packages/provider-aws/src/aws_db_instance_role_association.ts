import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDbInstanceRoleAssociationArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsDbInstanceRoleAssociationArgs {
  db_instance_identifier: string;
  feature_name: string;
  role_arn: string;
  timeouts: AwsDbInstanceRoleAssociationArgstimeouts;
}
export class aws_db_instance_role_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDbInstanceRoleAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_db_instance_role_association");
  }
}