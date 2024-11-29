import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleOrgPolicyPolicyArgsDryRunSpecrulescondition {
  description?: string;
  expression?: string;
  location?: string;
  title?: string;
}
export interface GoogleOrgPolicyPolicyArgsDryRunSpecrulesvalues {
  allowed_values?: string[];
  denied_values?: string[];
}
export interface GoogleOrgPolicyPolicyArgsDryRunSpecrules {
  allow_all?: string;
  deny_all?: string;
  enforce?: string;
  condition: GoogleOrgPolicyPolicyArgsDryRunSpecrulescondition;
  values: GoogleOrgPolicyPolicyArgsDryRunSpecrulesvalues;
}
export interface GoogleOrgPolicyPolicyArgsDryRunSpec {
  inherit_from_parent?: boolean;
  reset?: boolean;
  rules: GoogleOrgPolicyPolicyArgsDryRunSpecrules;
}
export interface GoogleOrgPolicyPolicyArgsspecrulescondition {
  description?: string;
  expression?: string;
  location?: string;
  title?: string;
}
export interface GoogleOrgPolicyPolicyArgsspecrulesvalues {
  allowed_values?: string[];
  denied_values?: string[];
}
export interface GoogleOrgPolicyPolicyArgsspecrules {
  allow_all?: string;
  deny_all?: string;
  enforce?: string;
  condition: GoogleOrgPolicyPolicyArgsspecrulescondition;
  values: GoogleOrgPolicyPolicyArgsspecrulesvalues;
}
export interface GoogleOrgPolicyPolicyArgsspec {
  inherit_from_parent?: boolean;
  reset?: boolean;
  rules: GoogleOrgPolicyPolicyArgsspecrules;
}
export interface GoogleOrgPolicyPolicyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleOrgPolicyPolicyArgs {
  name: string;
  parent: string;
  dry_run_spec: GoogleOrgPolicyPolicyArgsDryRunSpec;
  spec: GoogleOrgPolicyPolicyArgsspec;
  timeouts: GoogleOrgPolicyPolicyArgstimeouts;
}
export class google_org_policy_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleOrgPolicyPolicyArgs) {
    super(config, "resource", args, resourceName, "google_org_policy_policy");
  }
}