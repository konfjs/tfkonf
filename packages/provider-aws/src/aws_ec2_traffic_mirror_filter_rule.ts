import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEc2TrafficMirrorFilterRuleArgsDestinationPortRange {
  from_port?: number;
  to_port?: number;
}
export interface AwsEc2TrafficMirrorFilterRuleArgsSourcePortRange {
  from_port?: number;
  to_port?: number;
}
export interface AwsEc2TrafficMirrorFilterRuleArgs {
  description?: string;
  destination_cidr_block: string;
  protocol?: number;
  rule_action: string;
  rule_number: number;
  source_cidr_block: string;
  traffic_direction: string;
  traffic_mirror_filter_id: string;
  destination_port_range: AwsEc2TrafficMirrorFilterRuleArgsDestinationPortRange;
  source_port_range: AwsEc2TrafficMirrorFilterRuleArgsSourcePortRange;
}
export class aws_ec2_traffic_mirror_filter_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TrafficMirrorFilterRuleArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_traffic_mirror_filter_rule");
  }
}