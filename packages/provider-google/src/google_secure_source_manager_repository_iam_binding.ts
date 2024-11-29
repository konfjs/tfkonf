import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleSecureSourceManagerRepositoryIamBindingArgs {
  members: string[];
  repository_id: string;
  role: string;
  condition: Condition;
}
export class google_secure_source_manager_repository_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecureSourceManagerRepositoryIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_secure_source_manager_repository_iam_binding");
  }
}