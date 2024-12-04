import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpsworksUserProfileArgs {
  allow_self_management?: boolean;
  ssh_public_key?: string;
  ssh_username: string;
  user_arn: string;
}

export class aws_opsworks_user_profile extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsOpsworksUserProfileArgs) {
    super(config, "resource", args, resourceName, "aws_opsworks_user_profile");
  }
}
