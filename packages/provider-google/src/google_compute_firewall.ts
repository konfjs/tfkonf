import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeFirewallArgsAllow {
  ports?: string[];
  protocol: string;
}
export interface GoogleComputeFirewallArgsDeny {
  ports?: string[];
  protocol: string;
}
export interface GoogleComputeFirewallArgsLogConfig {
  metadata: string;
}
export interface GoogleComputeFirewallArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeFirewallArgs {
  description?: string;
  disabled?: boolean;
  name: string;
  network: string;
  priority?: number;
  source_ranges?: string[];
  source_service_accounts?: string[];
  source_tags?: string[];
  target_service_accounts?: string[];
  target_tags?: string[];
  allow: GoogleComputeFirewallArgsAllow;
  deny: GoogleComputeFirewallArgsDeny;
  log_config: GoogleComputeFirewallArgsLogConfig;
  timeouts?: GoogleComputeFirewallArgsTimeouts;
}
export class google_compute_firewall extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly destination_ranges?: string[];
  readonly direction?: string;
  readonly enable_logging?: boolean;
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeFirewallArgs) {
    super(config, "resource", args, resourceName, "google_compute_firewall");
  }
}