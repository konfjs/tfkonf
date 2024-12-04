import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeHubFeatureIamPolicyArgs {
  name: string;
  policy_data: string;
}

export class google_gke_hub_feature_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubFeatureIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_feature_iam_policy");
  }
}
