import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeRegionNetworkFirewallPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeRegionNetworkFirewallPolicyArgs {
  description?: string;
  name: string;
  timeouts: GoogleComputeRegionNetworkFirewallPolicyArgsTimeouts;
}
export class google_compute_region_network_firewall_policy extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly fingerprint!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  readonly region_network_firewall_policy_id!: string;
  readonly rule_tuple_count!: number;
  readonly self_link!: string;
  readonly self_link_with_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionNetworkFirewallPolicyArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_network_firewall_policy");
  }
}