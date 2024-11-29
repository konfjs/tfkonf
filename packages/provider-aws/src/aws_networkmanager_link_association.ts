import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsNetworkmanagerLinkAssociationArgs {
  device_id: string;
  global_network_id: string;
  link_id: string;
  timeouts: Timeouts;
}
export class aws_networkmanager_link_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerLinkAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_link_association");
  }
}