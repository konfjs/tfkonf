import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDevopsguruNotificationChannelArgsFilters {
  message_types?: string[];
  severities?: string[];
}
export interface AwsDevopsguruNotificationChannelArgsSns {
  topic_arn: string;
}
export interface AwsDevopsguruNotificationChannelArgs {
  filters: AwsDevopsguruNotificationChannelArgsFilters;
  sns: AwsDevopsguruNotificationChannelArgsSns;
}
export class aws_devopsguru_notification_channel extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDevopsguruNotificationChannelArgs) {
    super(config, "resource", args, resourceName, "aws_devopsguru_notification_channel");
  }
}