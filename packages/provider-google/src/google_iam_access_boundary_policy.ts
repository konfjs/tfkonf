import { TerraformConfig, TerraformResource } from "tfs";
export interface AvailabilityCondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface AccessBoundaryRule {
  available_permissions?: string[];
  available_resource?: string;
  availability_condition: AvailabilityCondition;
}
export interface Rules {
  description?: string;
  access_boundary_rule: AccessBoundaryRule;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIamAccessBoundaryPolicyArgs {
  display_name?: string;
  name: string;
  parent: string;
  rules: Rules;
  timeouts: Timeouts;
}
export class google_iam_access_boundary_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIamAccessBoundaryPolicyArgs) {
    super(config, "resource", args, resourceName, "google_iam_access_boundary_policy");
  }
}