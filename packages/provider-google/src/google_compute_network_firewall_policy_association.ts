import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeNetworkFirewallPolicyAssociationArgs {
  attachment_target: string;
  firewall_policy: string;
  name: string;
  timeouts: Timeouts;
}
export class google_compute_network_firewall_policy_association extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly short_name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeNetworkFirewallPolicyAssociationArgs) {
    super(config, "resource", args, resourceName, "google_compute_network_firewall_policy_association");
  }
}