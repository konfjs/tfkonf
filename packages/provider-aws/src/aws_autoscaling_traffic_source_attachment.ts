import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAutoscalingTrafficSourceAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsAutoscalingTrafficSourceAttachmentArgsTrafficSource {
  identifier: string;
  type: string;
}

export interface AwsAutoscalingTrafficSourceAttachmentArgs {
  autoscaling_group_name: string;
  timeouts?: AwsAutoscalingTrafficSourceAttachmentArgsTimeouts;
  traffic_source: AwsAutoscalingTrafficSourceAttachmentArgsTrafficSource;
}

export class aws_autoscaling_traffic_source_attachment extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsAutoscalingTrafficSourceAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_autoscaling_traffic_source_attachment");
  }
}
