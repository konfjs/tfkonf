import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeFirewallPolicyAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeFirewallPolicyAssociationArgs {
  attachment_target: string;
  firewall_policy: string;
  name: string;
  timeouts?: GoogleComputeFirewallPolicyAssociationArgsTimeouts;
}
export class google_compute_firewall_policy_association extends TerraformResource {
  readonly id?: string;
  readonly short_name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeFirewallPolicyAssociationArgs) {
    super(config, "resource", args, resourceName, "google_compute_firewall_policy_association");
  }
}