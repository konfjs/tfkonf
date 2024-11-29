import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsNetworkmonitorProbeArgs {
  destination: string;
  destination_port?: number;
  monitor_name: string;
  protocol: string;
  source_arn: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_networkmonitor_probe extends TerraformResource {
  readonly address_family!: string;
  readonly arn!: string;
  readonly id!: string;
  readonly packet_size?: number;
  readonly probe_id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  readonly vpc_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmonitorProbeArgs) {
    super(config, "resource", args, resourceName, "aws_networkmonitor_probe");
  }
}