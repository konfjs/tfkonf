import { TerraformConfig, TerraformResource } from "tfs";
export interface Bandwidth {
  download_speed?: number;
  upload_speed?: number;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsNetworkmanagerLinkArgs {
  description?: string;
  global_network_id: string;
  provider_name?: string;
  site_id: string;
  tags?: {
    [key: string]: string;
  };
  type?: string;
  bandwidth: Bandwidth;
  timeouts: Timeouts;
}
export class aws_networkmanager_link extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerLinkArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_link");
  }
}