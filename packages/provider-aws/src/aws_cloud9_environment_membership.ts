import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloud9EnvironmentMembershipArgs {
  environment_id: string;
  permissions: string;
  user_arn: string;
}

export class aws_cloud9_environment_membership extends TerraformResource {
  readonly id?: string;
  readonly user_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsCloud9EnvironmentMembershipArgs) {
    super(config, "resource", args, resourceName, "aws_cloud9_environment_membership");
  }
}
