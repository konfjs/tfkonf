import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDevopsguruNotificationChannelArgsfilters {
  message_types?: string[];
  severities?: string[];
}
export interface AwsDevopsguruNotificationChannelArgssns {
  topic_arn: string;
}
export interface AwsDevopsguruNotificationChannelArgs {
  filters: AwsDevopsguruNotificationChannelArgsfilters;
  sns: AwsDevopsguruNotificationChannelArgssns;
}
export class aws_devopsguru_notification_channel extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDevopsguruNotificationChannelArgs) {
    super(config, "resource", args, resourceName, "aws_devopsguru_notification_channel");
  }
}