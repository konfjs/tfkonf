import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAutoscalingGroupTagArgsTag {
  key: string;
  propagate_at_launch: boolean;
  value: string;
}
export interface AwsAutoscalingGroupTagArgs {
  autoscaling_group_name: string;
  tag: AwsAutoscalingGroupTagArgsTag;
}
export class aws_autoscaling_group_tag extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAutoscalingGroupTagArgs) {
    super(config, "resource", args, resourceName, "aws_autoscaling_group_tag");
  }
}