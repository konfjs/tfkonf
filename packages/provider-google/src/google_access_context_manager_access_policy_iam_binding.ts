import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleAccessContextManagerAccessPolicyIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleAccessContextManagerAccessPolicyIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: GoogleAccessContextManagerAccessPolicyIamBindingArgsCondition;
}
export class google_access_context_manager_access_policy_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerAccessPolicyIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_access_policy_iam_binding");
  }
}