import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAutoscalingGroupTagArgstag {
  key: string;
  propagate_at_launch: boolean;
  value: string;
}
export interface AwsAutoscalingGroupTagArgs {
  autoscaling_group_name: string;
  tag: AwsAutoscalingGroupTagArgstag;
}
export class aws_autoscaling_group_tag extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAutoscalingGroupTagArgs) {
    super(config, "resource", args, resourceName, "aws_autoscaling_group_tag");
  }
}