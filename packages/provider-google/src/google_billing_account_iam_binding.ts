import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBillingAccountIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBillingAccountIamBindingArgs {
  billing_account_id: string;
  members: string[];
  role: string;
  condition: GoogleBillingAccountIamBindingArgscondition;
}
export class google_billing_account_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBillingAccountIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_billing_account_iam_binding");
  }
}