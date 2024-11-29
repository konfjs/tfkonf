import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleAccessContextManagerEgressPolicyArgs {
  egress_policy_name: string;
  resource: string;
  timeouts: Timeouts;
}
export class google_access_context_manager_egress_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerEgressPolicyArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_egress_policy");
  }
}