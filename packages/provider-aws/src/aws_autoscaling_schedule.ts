import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAutoscalingScheduleArgs {
  autoscaling_group_name: string;
  scheduled_action_name: string;
}
export class aws_autoscaling_schedule extends TerraformResource {
  readonly arn!: string;
  readonly desired_capacity?: number;
  readonly end_time?: string;
  readonly id?: string;
  readonly max_size?: number;
  readonly min_size?: number;
  readonly recurrence?: string;
  readonly start_time?: string;
  readonly time_zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAutoscalingScheduleArgs) {
    super(config, "resource", args, resourceName, "aws_autoscaling_schedule");
  }
}