import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeRegionNetworkFirewallPolicyAssociationArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeRegionNetworkFirewallPolicyAssociationArgs {
  attachment_target: string;
  firewall_policy: string;
  name: string;
  timeouts: GoogleComputeRegionNetworkFirewallPolicyAssociationArgstimeouts;
}
export class google_compute_region_network_firewall_policy_association extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  readonly short_name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionNetworkFirewallPolicyAssociationArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_network_firewall_policy_association");
  }
}