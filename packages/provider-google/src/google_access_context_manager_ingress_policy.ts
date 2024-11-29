import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleAccessContextManagerIngressPolicyArgs {
  ingress_policy_name: string;
  resource: string;
  timeouts: Timeouts;
}
export class google_access_context_manager_ingress_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerIngressPolicyArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_ingress_policy");
  }
}