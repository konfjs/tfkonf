import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIamUserSshKeyArgs {
  encoding: string;
  public_key: string;
  username: string;
}
export class aws_iam_user_ssh_key extends TerraformResource {
  readonly fingerprint!: string;
  readonly id?: string;
  readonly ssh_public_key_id!: string;
  readonly status?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamUserSshKeyArgs) {
    super(config, "resource", args, resourceName, "aws_iam_user_ssh_key");
  }
}