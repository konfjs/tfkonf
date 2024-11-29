import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIamAccessBoundaryPolicyArgsrulesAccessBoundaryRuleAvailabilityCondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleIamAccessBoundaryPolicyArgsrulesAccessBoundaryRule {
  available_permissions?: string[];
  available_resource?: string;
  availability_condition: GoogleIamAccessBoundaryPolicyArgsrulesAccessBoundaryRuleAvailabilityCondition;
}
export interface GoogleIamAccessBoundaryPolicyArgsrules {
  description?: string;
  access_boundary_rule: GoogleIamAccessBoundaryPolicyArgsrulesAccessBoundaryRule;
}
export interface GoogleIamAccessBoundaryPolicyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIamAccessBoundaryPolicyArgs {
  display_name?: string;
  name: string;
  parent: string;
  rules: GoogleIamAccessBoundaryPolicyArgsrules;
  timeouts: GoogleIamAccessBoundaryPolicyArgstimeouts;
}
export class google_iam_access_boundary_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIamAccessBoundaryPolicyArgs) {
    super(config, "resource", args, resourceName, "google_iam_access_boundary_policy");
  }
}