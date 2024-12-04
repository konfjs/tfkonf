import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingOrganizationBucketConfigArgsCmekSettings {
  kms_key_name: string;
}

export interface GoogleLoggingOrganizationBucketConfigArgsIndexConfigs {
  field_path: string;
  type: string;
}

export interface GoogleLoggingOrganizationBucketConfigArgs {
  bucket_id: string;
  location: string;
  organization: string;
  retention_days?: number;
  cmek_settings: GoogleLoggingOrganizationBucketConfigArgsCmekSettings;
  index_configs: GoogleLoggingOrganizationBucketConfigArgsIndexConfigs;
}

export class google_logging_organization_bucket_config extends TerraformResource {
  readonly description?: string;
  readonly id?: string;
  readonly lifecycle_state!: string;
  readonly name!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingOrganizationBucketConfigArgs) {
    super(config, "resource", args, resourceName, "google_logging_organization_bucket_config");
  }
}
