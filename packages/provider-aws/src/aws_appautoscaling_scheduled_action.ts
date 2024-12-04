import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppautoscalingScheduledActionArgsScalableTargetAction {
  max_capacity?: string;
  min_capacity?: string;
}

export interface AwsAppautoscalingScheduledActionArgs {
  end_time?: string;
  name: string;
  resource_id: string;
  scalable_dimension: string;
  schedule: string;
  service_namespace: string;
  start_time?: string;
  timezone?: string;
  scalable_target_action: AwsAppautoscalingScheduledActionArgsScalableTargetAction;
}

export class aws_appautoscaling_scheduled_action extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsAppautoscalingScheduledActionArgs) {
    super(config, "resource", args, resourceName, "aws_appautoscaling_scheduled_action");
  }
}
