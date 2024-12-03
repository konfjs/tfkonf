import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAutoscalingAttachmentArgs {
  autoscaling_group_name: string;
  elb?: string;
  lb_target_group_arn?: string;
}
export class aws_autoscaling_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAutoscalingAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_autoscaling_attachment");
  }
}