import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCloudwatchLogSubscriptionFilterArgs {
  destination_arn: string;
  distribution?: string;
  filter_pattern: string;
  log_group_name: string;
  name: string;
}
export class aws_cloudwatch_log_subscription_filter extends TerraformResource {
  readonly id?: string;
  readonly role_arn?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchLogSubscriptionFilterArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_log_subscription_filter");
  }
}