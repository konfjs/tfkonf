import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleArtifactRegistryRepositoryIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleArtifactRegistryRepositoryIamBindingArgs {
  members: string[];
  repository: string;
  role: string;
  condition: GoogleArtifactRegistryRepositoryIamBindingArgsCondition;
}
export class google_artifact_registry_repository_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleArtifactRegistryRepositoryIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_artifact_registry_repository_iam_binding");
  }
}