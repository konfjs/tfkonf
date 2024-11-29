import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAutoscalingNotificationArgs {
  group_names: string[];
  notifications: string[];
  topic_arn: string;
}
export class aws_autoscaling_notification extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAutoscalingNotificationArgs) {
    super(config, "resource", args, resourceName, "aws_autoscaling_notification");
  }
}