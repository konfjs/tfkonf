import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleLoggingProjectBucketConfigArgsCmekSettings {
  kms_key_name: string;
}
export interface GoogleLoggingProjectBucketConfigArgsIndexConfigs {
  field_path: string;
  type: string;
}
export interface GoogleLoggingProjectBucketConfigArgs {
  bucket_id: string;
  enable_analytics?: boolean;
  location: string;
  locked?: boolean;
  project: string;
  retention_days?: number;
  cmek_settings: GoogleLoggingProjectBucketConfigArgsCmekSettings;
  index_configs: GoogleLoggingProjectBucketConfigArgsIndexConfigs;
}
export class google_logging_project_bucket_config extends TerraformResource {
  readonly description?: string;
  readonly id?: string;
  readonly lifecycle_state!: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingProjectBucketConfigArgs) {
    super(config, "resource", args, resourceName, "google_logging_project_bucket_config");
  }
}