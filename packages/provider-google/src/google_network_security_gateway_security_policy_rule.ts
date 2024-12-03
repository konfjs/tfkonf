import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleNetworkSecurityGatewaySecurityPolicyRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkSecurityGatewaySecurityPolicyRuleArgs {
  application_matcher?: string;
  basic_profile: string;
  description?: string;
  enabled: boolean;
  gateway_security_policy: string;
  location: string;
  name: string;
  priority: number;
  session_matcher: string;
  tls_inspection_enabled?: boolean;
  timeouts?: GoogleNetworkSecurityGatewaySecurityPolicyRuleArgsTimeouts;
}
export class google_network_security_gateway_security_policy_rule extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkSecurityGatewaySecurityPolicyRuleArgs) {
    super(config, "resource", args, resourceName, "google_network_security_gateway_security_policy_rule");
  }
}