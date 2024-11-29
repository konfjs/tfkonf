import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRedshiftClusterIamRolesArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRedshiftClusterIamRolesArgs {
  cluster_identifier: string;
  timeouts: AwsRedshiftClusterIamRolesArgsTimeouts;
}
export class aws_redshift_cluster_iam_roles extends TerraformResource {
  readonly default_iam_role_arn?: string;
  readonly iam_role_arns?: string[];
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftClusterIamRolesArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_cluster_iam_roles");
  }
}