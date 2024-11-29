import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAutoscalingLifecycleHookArgs {
  autoscaling_group_name: string;
  heartbeat_timeout?: number;
  lifecycle_transition: string;
  name: string;
  notification_metadata?: string;
  notification_target_arn?: string;
  role_arn?: string;
}
export class aws_autoscaling_lifecycle_hook extends TerraformResource {
  readonly default_result?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAutoscalingLifecycleHookArgs) {
    super(config, "resource", args, resourceName, "aws_autoscaling_lifecycle_hook");
  }
}