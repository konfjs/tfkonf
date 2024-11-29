import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeFirewallPolicyAssociationArgs {
  attachment_target: string;
  firewall_policy: string;
  name: string;
  timeouts: Timeouts;
}
export class google_compute_firewall_policy_association extends TerraformResource {
  readonly id?: string;
  readonly short_name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeFirewallPolicyAssociationArgs) {
    super(config, "resource", args, resourceName, "google_compute_firewall_policy_association");
  }
}