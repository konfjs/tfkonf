import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsIamUserLoginProfileArgs {
  password_length?: number;
  pgp_key?: string;
  user: string;
}
export class aws_iam_user_login_profile extends TerraformResource {
  readonly encrypted_password!: string;
  readonly id?: string;
  readonly key_fingerprint!: string;
  readonly password!: string;
  readonly password_reset_required?: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamUserLoginProfileArgs) {
    super(config, "resource", args, resourceName, "aws_iam_user_login_profile");
  }
}