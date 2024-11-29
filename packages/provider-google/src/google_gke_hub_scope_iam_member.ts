import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleGkeHubScopeIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleGkeHubScopeIamMemberArgs {
  member: string;
  role: string;
  scope_id: string;
  condition: GoogleGkeHubScopeIamMemberArgscondition;
}
export class google_gke_hub_scope_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubScopeIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_scope_iam_member");
  }
}