import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIamDenyPolicyArgsRulesDenyRuleDenialCondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleIamDenyPolicyArgsRulesDenyRule {
  denied_permissions?: string[];
  denied_principals?: string[];
  exception_permissions?: string[];
  exception_principals?: string[];
  denial_condition: GoogleIamDenyPolicyArgsRulesDenyRuleDenialCondition;
}
export interface GoogleIamDenyPolicyArgsRules {
  description?: string;
  deny_rule: GoogleIamDenyPolicyArgsRulesDenyRule;
}
export interface GoogleIamDenyPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIamDenyPolicyArgs {
  display_name?: string;
  name: string;
  parent: string;
  rules: GoogleIamDenyPolicyArgsRules;
  timeouts: GoogleIamDenyPolicyArgsTimeouts;
}
export class google_iam_deny_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIamDenyPolicyArgs) {
    super(config, "resource", args, resourceName, "google_iam_deny_policy");
  }
}