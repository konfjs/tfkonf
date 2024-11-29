import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleSecureSourceManagerInstanceIamMemberArgs {
  instance_id: string;
  member: string;
  role: string;
  condition: Condition;
}
export class google_secure_source_manager_instance_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecureSourceManagerInstanceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_secure_source_manager_instance_iam_member");
  }
}