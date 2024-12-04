import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerAccessPolicyIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleAccessContextManagerAccessPolicyIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: GoogleAccessContextManagerAccessPolicyIamMemberArgsCondition;
}

export class google_access_context_manager_access_policy_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerAccessPolicyIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_access_policy_iam_member");
  }
}
