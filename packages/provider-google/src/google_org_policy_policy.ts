import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression?: string;
  location?: string;
  title?: string;
}
export interface Values {
  allowed_values?: string[];
  denied_values?: string[];
}
export interface Rules {
  allow_all?: string;
  deny_all?: string;
  enforce?: string;
  condition: Condition;
  values: Values;
}
export interface DryRunSpec {
  inherit_from_parent?: boolean;
  reset?: boolean;
  rules: Rules;
}
export interface Condition {
  description?: string;
  expression?: string;
  location?: string;
  title?: string;
}
export interface Values {
  allowed_values?: string[];
  denied_values?: string[];
}
export interface Rules {
  allow_all?: string;
  deny_all?: string;
  enforce?: string;
  condition: Condition;
  values: Values;
}
export interface Spec {
  inherit_from_parent?: boolean;
  reset?: boolean;
  rules: Rules;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleOrgPolicyPolicyArgs {
  name: string;
  parent: string;
  dry_run_spec: DryRunSpec;
  spec: Spec;
  timeouts: Timeouts;
}
export class google_org_policy_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleOrgPolicyPolicyArgs) {
    super(config, "resource", args, resourceName, "google_org_policy_policy");
  }
}