import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleGkeHubScopeIamPolicyArgs {
  policy_data: string;
  scope_id: string;
}
export class google_gke_hub_scope_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubScopeIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_scope_iam_policy");
  }
}