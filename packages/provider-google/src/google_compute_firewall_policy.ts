import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeFirewallPolicyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeFirewallPolicyArgs {
  description?: string;
  parent: string;
  short_name: string;
  timeouts: GoogleComputeFirewallPolicyArgstimeouts;
}
export class google_compute_firewall_policy extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly fingerprint!: string;
  readonly firewall_policy_id!: string;
  readonly id?: string;
  readonly name!: string;
  readonly rule_tuple_count!: number;
  readonly self_link!: string;
  readonly self_link_with_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeFirewallPolicyArgs) {
    super(config, "resource", args, resourceName, "google_compute_firewall_policy");
  }
}