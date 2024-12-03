import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeNetworkFirewallPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeNetworkFirewallPolicyArgs {
  description?: string;
  name: string;
  timeouts?: GoogleComputeNetworkFirewallPolicyArgsTimeouts;
}
export class google_compute_network_firewall_policy extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly fingerprint!: string;
  readonly id?: string;
  readonly network_firewall_policy_id!: string;
  readonly project?: string;
  readonly rule_tuple_count!: number;
  readonly self_link!: string;
  readonly self_link_with_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeNetworkFirewallPolicyArgs) {
    super(config, "resource", args, resourceName, "google_compute_network_firewall_policy");
  }
}