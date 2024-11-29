import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAppEngineFirewallRuleArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAppEngineFirewallRuleArgs {
  action: string;
  description?: string;
  priority?: number;
  source_range: string;
  timeouts: GoogleAppEngineFirewallRuleArgstimeouts;
}
export class google_app_engine_firewall_rule extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAppEngineFirewallRuleArgs) {
    super(config, "resource", args, resourceName, "google_app_engine_firewall_rule");
  }
}