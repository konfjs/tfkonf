import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface TrafficSource {
  identifier: string;
  type: string;
}
export interface AwsAutoscalingTrafficSourceAttachmentArgs {
  autoscaling_group_name: string;
  timeouts: Timeouts;
  traffic_source: TrafficSource;
}
export class aws_autoscaling_traffic_source_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAutoscalingTrafficSourceAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_autoscaling_traffic_source_attachment");
  }
}