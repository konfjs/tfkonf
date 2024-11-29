import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleOrgPolicyCustomConstraintArgs {
  action_type: string;
  condition: string;
  description?: string;
  display_name?: string;
  method_types: string[];
  name: string;
  parent: string;
  resource_types: string[];
  timeouts: Timeouts;
}
export class google_org_policy_custom_constraint extends TerraformResource {
  readonly id?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleOrgPolicyCustomConstraintArgs) {
    super(config, "resource", args, resourceName, "google_org_policy_custom_constraint");
  }
}