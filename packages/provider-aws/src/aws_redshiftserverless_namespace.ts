import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRedshiftserverlessNamespaceArgs {
  admin_user_password?: string;
  default_iam_role_arn?: string;
  log_exports?: string[];
  manage_admin_password?: boolean;
  namespace_name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_redshiftserverless_namespace extends TerraformResource {
  readonly admin_password_secret_arn!: string;
  readonly admin_password_secret_kms_key_id?: string;
  readonly admin_username?: string;
  readonly arn!: string;
  readonly db_name?: string;
  readonly iam_roles?: string[];
  readonly id?: string;
  readonly kms_key_id?: string;
  readonly namespace_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftserverlessNamespaceArgs) {
    super(config, "resource", args, resourceName, "aws_redshiftserverless_namespace");
  }
}