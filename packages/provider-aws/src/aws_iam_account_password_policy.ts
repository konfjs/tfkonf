import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIamAccountPasswordPolicyArgs {
  allow_users_to_change_password?: boolean;
  minimum_password_length?: number;
}
export class aws_iam_account_password_policy extends TerraformResource {
  readonly expire_passwords!: boolean;
  readonly hard_expiry?: boolean;
  readonly id?: string;
  readonly max_password_age?: number;
  readonly password_reuse_prevention?: number;
  readonly require_lowercase_characters?: boolean;
  readonly require_numbers?: boolean;
  readonly require_symbols?: boolean;
  readonly require_uppercase_characters?: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamAccountPasswordPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_iam_account_password_policy");
  }
}