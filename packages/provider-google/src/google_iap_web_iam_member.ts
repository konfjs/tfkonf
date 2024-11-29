import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIapWebIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapWebIamMemberArgs {
  member: string;
  role: string;
  condition: GoogleIapWebIamMemberArgscondition;
}
export class google_iap_web_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapWebIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_iap_web_iam_member");
  }
}