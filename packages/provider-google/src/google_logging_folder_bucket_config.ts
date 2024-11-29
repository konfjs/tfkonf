import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleLoggingFolderBucketConfigArgsCmekSettings {
  kms_key_name: string;
}
export interface GoogleLoggingFolderBucketConfigArgsIndexConfigs {
  field_path: string;
  type: string;
}
export interface GoogleLoggingFolderBucketConfigArgs {
  bucket_id: string;
  folder: string;
  location: string;
  retention_days?: number;
  cmek_settings: GoogleLoggingFolderBucketConfigArgsCmekSettings;
  index_configs: GoogleLoggingFolderBucketConfigArgsIndexConfigs;
}
export class google_logging_folder_bucket_config extends TerraformResource {
  readonly description?: string;
  readonly id?: string;
  readonly lifecycle_state!: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingFolderBucketConfigArgs) {
    super(config, "resource", args, resourceName, "google_logging_folder_bucket_config");
  }
}