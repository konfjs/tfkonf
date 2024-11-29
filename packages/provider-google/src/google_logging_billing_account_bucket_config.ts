import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleLoggingBillingAccountBucketConfigArgsCmekSettings {
  kms_key_name: string;
}
export interface GoogleLoggingBillingAccountBucketConfigArgsIndexConfigs {
  field_path: string;
  type: string;
}
export interface GoogleLoggingBillingAccountBucketConfigArgs {
  billing_account: string;
  bucket_id: string;
  location: string;
  retention_days?: number;
  cmek_settings: GoogleLoggingBillingAccountBucketConfigArgsCmekSettings;
  index_configs: GoogleLoggingBillingAccountBucketConfigArgsIndexConfigs;
}
export class google_logging_billing_account_bucket_config extends TerraformResource {
  readonly description?: string;
  readonly id?: string;
  readonly lifecycle_state!: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingBillingAccountBucketConfigArgs) {
    super(config, "resource", args, resourceName, "google_logging_billing_account_bucket_config");
  }
}