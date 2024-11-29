import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleGkeHubScopeIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleGkeHubScopeIamBindingArgs {
  members: string[];
  role: string;
  scope_id: string;
  condition: GoogleGkeHubScopeIamBindingArgscondition;
}
export class google_gke_hub_scope_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubScopeIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_scope_iam_binding");
  }
}