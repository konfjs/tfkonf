import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsShieldSubscriptionArgs {
  skip_destroy?: boolean;
}

export class aws_shield_subscription extends TerraformResource {
  readonly auto_renew?: string;
  readonly id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsShieldSubscriptionArgs) {
    super(config, "resource", args, resourceName, "aws_shield_subscription");
  }
}
