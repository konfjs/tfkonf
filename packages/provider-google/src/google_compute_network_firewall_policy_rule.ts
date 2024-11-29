import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeNetworkFirewallPolicyRuleArgsmatchLayer4Configs {
  ip_protocol: string;
  ports?: string[];
}
export interface GoogleComputeNetworkFirewallPolicyRuleArgsmatchSrcSecureTags {
  name?: string;
}
export interface GoogleComputeNetworkFirewallPolicyRuleArgsmatch {
  dest_address_groups?: string[];
  dest_fqdns?: string[];
  dest_ip_ranges?: string[];
  dest_region_codes?: string[];
  dest_threat_intelligences?: string[];
  src_address_groups?: string[];
  src_fqdns?: string[];
  src_ip_ranges?: string[];
  src_region_codes?: string[];
  src_threat_intelligences?: string[];
  layer4_configs: GoogleComputeNetworkFirewallPolicyRuleArgsmatchLayer4Configs;
  src_secure_tags: GoogleComputeNetworkFirewallPolicyRuleArgsmatchSrcSecureTags;
}
export interface GoogleComputeNetworkFirewallPolicyRuleArgsTargetSecureTags {
  name?: string;
}
export interface GoogleComputeNetworkFirewallPolicyRuleArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeNetworkFirewallPolicyRuleArgs {
  action: string;
  description?: string;
  direction: string;
  disabled?: boolean;
  enable_logging?: boolean;
  firewall_policy: string;
  priority: number;
  rule_name?: string;
  security_profile_group?: string;
  target_service_accounts?: string[];
  tls_inspect?: boolean;
  match: GoogleComputeNetworkFirewallPolicyRuleArgsmatch;
  target_secure_tags: GoogleComputeNetworkFirewallPolicyRuleArgsTargetSecureTags;
  timeouts: GoogleComputeNetworkFirewallPolicyRuleArgstimeouts;
}
export class google_compute_network_firewall_policy_rule extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly kind!: string;
  readonly project?: string;
  readonly rule_tuple_count!: number;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeNetworkFirewallPolicyRuleArgs) {
    super(config, "resource", args, resourceName, "google_compute_network_firewall_policy_rule");
  }
}