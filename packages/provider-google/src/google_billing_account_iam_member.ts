import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBillingAccountIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBillingAccountIamMemberArgs {
  billing_account_id: string;
  member: string;
  role: string;
  condition: GoogleBillingAccountIamMemberArgscondition;
}
export class google_billing_account_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBillingAccountIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_billing_account_iam_member");
  }
}