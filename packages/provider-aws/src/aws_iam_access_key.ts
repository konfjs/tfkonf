import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsIamAccessKeyArgs {
  pgp_key?: string;
  status?: string;
  user: string;
}
export class aws_iam_access_key extends TerraformResource {
  readonly create_date!: string;
  readonly encrypted_secret!: string;
  readonly encrypted_ses_smtp_password_v4!: string;
  readonly id?: string;
  readonly key_fingerprint!: string;
  readonly secret!: string;
  readonly ses_smtp_password_v4!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamAccessKeyArgs) {
    super(config, "resource", args, resourceName, "aws_iam_access_key");
  }
}