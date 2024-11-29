import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEc2TrafficMirrorSessionArgs {
  description?: string;
  network_interface_id: string;
  session_number: number;
  tags?: {
    [key: string]: string;
  };
  traffic_mirror_filter_id: string;
  traffic_mirror_target_id: string;
}
export class aws_ec2_traffic_mirror_session extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly packet_length?: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly virtual_network_id?: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TrafficMirrorSessionArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_traffic_mirror_session");
  }
}