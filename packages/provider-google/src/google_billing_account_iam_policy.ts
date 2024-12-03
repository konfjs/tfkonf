import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleBillingAccountIamPolicyArgs {
  billing_account_id: string;
  policy_data: string;
}
export class google_billing_account_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBillingAccountIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_billing_account_iam_policy");
  }
}