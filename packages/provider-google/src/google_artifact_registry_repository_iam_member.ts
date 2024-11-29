import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleArtifactRegistryRepositoryIamMemberArgs {
  member: string;
  repository: string;
  role: string;
  condition: Condition;
}
export class google_artifact_registry_repository_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleArtifactRegistryRepositoryIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_artifact_registry_repository_iam_member");
  }
}