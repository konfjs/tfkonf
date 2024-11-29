import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsDbInstanceRoleAssociationArgs {
  db_instance_identifier: string;
  feature_name: string;
  role_arn: string;
  timeouts: Timeouts;
}
export class aws_db_instance_role_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDbInstanceRoleAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_db_instance_role_association");
  }
}