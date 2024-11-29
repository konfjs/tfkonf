import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleServiceAccountIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleServiceAccountIamMemberArgs {
  member: string;
  role: string;
  service_account_id: string;
  condition: GoogleServiceAccountIamMemberArgscondition;
}
export class google_service_account_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleServiceAccountIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_service_account_iam_member");
  }
}