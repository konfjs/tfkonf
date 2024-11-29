import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleSecretManagerSecretIamMemberArgs {
  member: string;
  role: string;
  secret_id: string;
  condition: Condition;
}
export class google_secret_manager_secret_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecretManagerSecretIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_secret_manager_secret_iam_member");
  }
}