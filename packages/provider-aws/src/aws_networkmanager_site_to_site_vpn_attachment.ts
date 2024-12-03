import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsNetworkmanagerSiteToSiteVpnAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsNetworkmanagerSiteToSiteVpnAttachmentArgs {
  core_network_id: string;
  tags?: {
    [key: string]: string;
  };
  vpn_connection_arn: string;
  timeouts?: AwsNetworkmanagerSiteToSiteVpnAttachmentArgsTimeouts;
}
export class aws_networkmanager_site_to_site_vpn_attachment extends TerraformResource {
  readonly arn!: string;
  readonly attachment_policy_rule_number!: number;
  readonly attachment_type!: string;
  readonly core_network_arn!: string;
  readonly edge_location!: string;
  readonly id?: string;
  readonly owner_account_id!: string;
  readonly resource_arn!: string;
  readonly segment_name!: string;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerSiteToSiteVpnAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_site_to_site_vpn_attachment");
  }
}