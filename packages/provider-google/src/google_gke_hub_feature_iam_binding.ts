import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleGkeHubFeatureIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleGkeHubFeatureIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: GoogleGkeHubFeatureIamBindingArgsCondition;
}
export class google_gke_hub_feature_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubFeatureIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_feature_iam_binding");
  }
}