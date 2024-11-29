import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsOrganizationsAccountArgs {
  close_on_deletion?: boolean;
  create_govcloud?: boolean;
  email: string;
  iam_user_access_to_billing?: string;
  name: string;
  role_name?: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_organizations_account extends TerraformResource {
  readonly arn!: string;
  readonly govcloud_id!: string;
  readonly id?: string;
  readonly joined_method!: string;
  readonly joined_timestamp!: string;
  readonly parent_id?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsOrganizationsAccountArgs) {
    super(config, "resource", args, resourceName, "aws_organizations_account");
  }
}