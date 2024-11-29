import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsRdsClusterRoleAssociationArgs {
  db_cluster_identifier: string;
  feature_name: string;
  role_arn: string;
  timeouts: Timeouts;
}
export class aws_rds_cluster_role_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRdsClusterRoleAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_rds_cluster_role_association");
  }
}