import { TerraformConfig, TerraformResource } from "tfs";
export interface Filters {
  message_types?: string[];
  severities?: string[];
}
export interface Sns {
  topic_arn: string;
}
export interface AwsDevopsguruNotificationChannelArgs {
  filters: Filters;
  sns: Sns;
}
export class aws_devopsguru_notification_channel extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDevopsguruNotificationChannelArgs) {
    super(config, "resource", args, resourceName, "aws_devopsguru_notification_channel");
  }
}