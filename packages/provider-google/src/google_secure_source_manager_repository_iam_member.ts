import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleSecureSourceManagerRepositoryIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleSecureSourceManagerRepositoryIamMemberArgs {
  member: string;
  repository_id: string;
  role: string;
  condition: GoogleSecureSourceManagerRepositoryIamMemberArgsCondition;
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