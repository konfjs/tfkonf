import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleGkeHubMembershipIamBindingArgs {
  members: string[];
  membership_id: string;
  role: string;
  condition: Condition;
}
export class google_gke_hub_membership_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubMembershipIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_membership_iam_binding");
  }
}