import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TrafficMirrorFilterArgs {
  description?: string;
  network_services?: string[];
  tags?: { [key: string]: string };
}

export class aws_ec2_traffic_mirror_filter extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TrafficMirrorFilterArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_traffic_mirror_filter");
  }
}
