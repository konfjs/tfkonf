import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsNetworkmanagerSiteArgslocation {
  address?: string;
  latitude?: string;
  longitude?: string;
}
export interface AwsNetworkmanagerSiteArgstimeouts {
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
  location: AwsNetworkmanagerSiteArgslocation;
  timeouts: AwsNetworkmanagerSiteArgstimeouts;
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