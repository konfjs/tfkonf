import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleLoggingBillingAccountSinkArgsBigqueryOptions {
  use_partitioned_tables: boolean;
}
export interface GoogleLoggingBillingAccountSinkArgsExclusions {
  description?: string;
  disabled?: boolean;
  filter: string;
  name: string;
}
export interface GoogleLoggingBillingAccountSinkArgs {
  billing_account: string;
  description?: string;
  destination: string;
  disabled?: boolean;
  filter?: string;
  name: string;
  bigquery_options: GoogleLoggingBillingAccountSinkArgsBigqueryOptions;
  exclusions: GoogleLoggingBillingAccountSinkArgsExclusions;
}
export class google_logging_billing_account_sink extends TerraformResource {
  readonly id?: string;
  readonly writer_identity!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingBillingAccountSinkArgs) {
    super(config, "resource", args, resourceName, "google_logging_billing_account_sink");
  }
}