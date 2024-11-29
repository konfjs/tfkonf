import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIamDenyPolicyArgsrulesDenyRuleDenialCondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleIamDenyPolicyArgsrulesDenyRule {
  denied_permissions?: string[];
  denied_principals?: string[];
  exception_permissions?: string[];
  exception_principals?: string[];
  denial_condition: GoogleIamDenyPolicyArgsrulesDenyRuleDenialCondition;
}
export interface GoogleIamDenyPolicyArgsrules {
  description?: string;
  deny_rule: GoogleIamDenyPolicyArgsrulesDenyRule;
}
export interface GoogleIamDenyPolicyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIamDenyPolicyArgs {
  display_name?: string;
  name: string;
  parent: string;
  rules: GoogleIamDenyPolicyArgsrules;
  timeouts: GoogleIamDenyPolicyArgstimeouts;
}
export class google_iam_deny_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIamDenyPolicyArgs) {
    super(config, "resource", args, resourceName, "google_iam_deny_policy");
  }
}