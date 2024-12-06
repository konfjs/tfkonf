import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeFirewallPolicyRuleArgsMatchLayer4Configs {
  ip_protocol: string;
  ports?: string[];
}

export interface GoogleComputeFirewallPolicyRuleArgsMatch {
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
  layer4_configs: GoogleComputeFirewallPolicyRuleArgsMatchLayer4Configs;
}

export interface GoogleComputeFirewallPolicyRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeFirewallPolicyRuleArgs {
  action: string;
  description?: string;
  direction: string;
  disabled?: boolean;
  enable_logging?: boolean;
  firewall_policy: string;
  priority: number;
  security_profile_group?: string;
  target_resources?: string[];
  target_service_accounts?: string[];
  tls_inspect?: boolean;
  match: GoogleComputeFirewallPolicyRuleArgsMatch;
  timeouts?: GoogleComputeFirewallPolicyRuleArgsTimeouts;
}

export class google_compute_firewall_policy_rule extends TerraformResource {
  readonly id?: string;
  readonly kind!: string;
  readonly rule_tuple_count!: number;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeFirewallPolicyRuleArgs) {
    super(config, "resource", args, resourceName, "google_compute_firewall_policy_rule");
  }
}
