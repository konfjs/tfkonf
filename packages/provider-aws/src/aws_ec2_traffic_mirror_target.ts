import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TrafficMirrorTargetArgs {
  description?: string;
  gateway_load_balancer_endpoint_id?: string;
  network_interface_id?: string;
  network_load_balancer_arn?: string;
  tags?: { [key: string]: string };
}

export class aws_ec2_traffic_mirror_target extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TrafficMirrorTargetArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_traffic_mirror_target");
  }
}
