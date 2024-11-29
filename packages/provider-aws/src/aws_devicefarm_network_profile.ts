import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDevicefarmNetworkProfileArgs {
  description?: string;
  downlink_bandwidth_bits?: number;
  downlink_delay_ms?: number;
  downlink_jitter_ms?: number;
  downlink_loss_percent?: number;
  name: string;
  project_arn: string;
  tags?: {
    [key: string]: string;
  };
  type?: string;
  uplink_bandwidth_bits?: number;
  uplink_delay_ms?: number;
  uplink_jitter_ms?: number;
  uplink_loss_percent?: number;
}
export class aws_devicefarm_network_profile extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDevicefarmNetworkProfileArgs) {
    super(config, "resource", args, resourceName, "aws_devicefarm_network_profile");
  }
}