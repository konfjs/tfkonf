import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsVpclatticeAccessLogSubscriptionArgs {
  destination_arn: string;
  resource_identifier: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_vpclattice_access_log_subscription extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly resource_arn!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpclatticeAccessLogSubscriptionArgs) {
    super(config, "resource", args, resourceName, "aws_vpclattice_access_log_subscription");
  }
}