import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleLoggingBillingAccountExclusionArgs {
  billing_account: string;
  description?: string;
  disabled?: boolean;
  filter: string;
  name: string;
}
export class google_logging_billing_account_exclusion extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingBillingAccountExclusionArgs) {
    super(config, "resource", args, resourceName, "google_logging_billing_account_exclusion");
  }
}