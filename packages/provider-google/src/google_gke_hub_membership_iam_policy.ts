import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleGkeHubMembershipIamPolicyArgs {
  membership_id: string;
  policy_data: string;
}
export class google_gke_hub_membership_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubMembershipIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_membership_iam_policy");
  }
}