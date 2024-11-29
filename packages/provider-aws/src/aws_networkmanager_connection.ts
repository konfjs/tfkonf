import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsNetworkmanagerConnectionArgs {
  connected_device_id: string;
  connected_link_id?: string;
  description?: string;
  device_id: string;
  global_network_id: string;
  link_id?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: Timeouts;
}
export class aws_networkmanager_connection extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerConnectionArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_connection");
  }
}