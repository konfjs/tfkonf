import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAppautoscalingTargetArgsSuspendedState {
  dynamic_scaling_in_suspended?: boolean;
  dynamic_scaling_out_suspended?: boolean;
  scheduled_scaling_suspended?: boolean;
}
export interface AwsAppautoscalingTargetArgs {
  max_capacity: number;
  min_capacity: number;
  resource_id: string;
  scalable_dimension: string;
  service_namespace: string;
  tags?: {
    [key: string]: string;
  };
  suspended_state: AwsAppautoscalingTargetArgsSuspendedState;
}
export class aws_appautoscaling_target extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly role_arn?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppautoscalingTargetArgs) {
    super(config, "resource", args, resourceName, "aws_appautoscaling_target");
  }
}