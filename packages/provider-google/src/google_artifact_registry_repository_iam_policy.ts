import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleArtifactRegistryRepositoryIamPolicyArgs {
  policy_data: string;
  repository: string;
}
export class google_artifact_registry_repository_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleArtifactRegistryRepositoryIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_artifact_registry_repository_iam_policy");
  }
}