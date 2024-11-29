import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleAccessContextManagerAccessPolicyIamPolicyArgs {
  name: string;
  policy_data: string;
}
export class google_access_context_manager_access_policy_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerAccessPolicyIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_access_policy_iam_policy");
  }
}