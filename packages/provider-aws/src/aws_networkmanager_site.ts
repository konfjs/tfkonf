import { TerraformConfig, TerraformResource } from "tfs";
export interface Location {
  address?: string;
  latitude?: string;
  longitude?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsNetworkmanagerSiteArgs {
  description?: string;
  global_network_id: string;
  tags?: {
    [key: string]: string;
  };
  location: Location;
  timeouts: Timeouts;
}
export class aws_networkmanager_site extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerSiteArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_site");
  }
}