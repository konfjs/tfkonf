import { TerraformConfig, TerraformResource } from "tfs";
export interface DenialCondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface DenyRule {
  denied_permissions?: string[];
  denied_principals?: string[];
  exception_permissions?: string[];
  exception_principals?: string[];
  denial_condition: DenialCondition;
}
export interface Rules {
  description?: string;
  deny_rule: DenyRule;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIamDenyPolicyArgs {
  display_name?: string;
  name: string;
  parent: string;
  rules: Rules;
  timeouts: Timeouts;
}
export class google_iam_deny_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIamDenyPolicyArgs) {
    super(config, "resource", args, resourceName, "google_iam_deny_policy");
  }
}