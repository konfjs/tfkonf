import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSecureSourceManagerRepositoryIamPolicyArgs {
  policy_data: string;
  repository_id: string;
}
export class google_secure_source_manager_repository_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecureSourceManagerRepositoryIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_secure_source_manager_repository_iam_policy");
  }
}