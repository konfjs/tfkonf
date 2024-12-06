import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeHubMembershipIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleGkeHubMembershipIamMemberArgs {
  member: string;
  membership_id: string;
  role: string;
  condition: GoogleGkeHubMembershipIamMemberArgsCondition;
}

export class google_gke_hub_membership_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubMembershipIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_membership_iam_member");
  }
}
