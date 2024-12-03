import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleIamAccessBoundaryPolicyArgsRulesAccessBoundaryRuleAvailabilityCondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleIamAccessBoundaryPolicyArgsRulesAccessBoundaryRule {
  available_permissions?: string[];
  available_resource?: string;
  availability_condition: GoogleIamAccessBoundaryPolicyArgsRulesAccessBoundaryRuleAvailabilityCondition;
}
export interface GoogleIamAccessBoundaryPolicyArgsRules {
  description?: string;
  access_boundary_rule: GoogleIamAccessBoundaryPolicyArgsRulesAccessBoundaryRule;
}
export interface GoogleIamAccessBoundaryPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIamAccessBoundaryPolicyArgs {
  display_name?: string;
  name: string;
  parent: string;
  rules: GoogleIamAccessBoundaryPolicyArgsRules;
  timeouts?: GoogleIamAccessBoundaryPolicyArgsTimeouts;
}
export class google_iam_access_boundary_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIamAccessBoundaryPolicyArgs) {
    super(config, "resource", args, resourceName, "google_iam_access_boundary_policy");
  }
}