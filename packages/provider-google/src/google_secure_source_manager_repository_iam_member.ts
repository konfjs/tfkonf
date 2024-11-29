import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSecureSourceManagerRepositoryIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleSecureSourceManagerRepositoryIamMemberArgs {
  member: string;
  repository_id: string;
  role: string;
  condition: GoogleSecureSourceManagerRepositoryIamMemberArgscondition;
}
export class google_secure_source_manager_repository_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecureSourceManagerRepositoryIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_secure_source_manager_repository_iam_member");
  }
}