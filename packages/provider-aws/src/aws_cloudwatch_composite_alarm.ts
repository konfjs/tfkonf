import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudwatchCompositeAlarmArgsActionsSuppressor {
  alarm: string;
  extension_period: number;
  wait_period: number;
}
export interface AwsCloudwatchCompositeAlarmArgs {
  actions_enabled?: boolean;
  alarm_actions?: string[];
  alarm_description?: string;
  alarm_name: string;
  alarm_rule: string;
  insufficient_data_actions?: string[];
  ok_actions?: string[];
  tags?: {
    [key: string]: string;
  };
  actions_suppressor: AwsCloudwatchCompositeAlarmArgsActionsSuppressor;
}
export class aws_cloudwatch_composite_alarm extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchCompositeAlarmArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_composite_alarm");
  }
}