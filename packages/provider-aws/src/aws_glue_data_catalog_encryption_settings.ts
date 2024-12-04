import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueDataCatalogEncryptionSettingsArgsDataCatalogEncryptionSettingsConnectionPasswordEncryption {
  aws_kms_key_id?: string;
  return_connection_password_encrypted: boolean;
}

export interface AwsGlueDataCatalogEncryptionSettingsArgsDataCatalogEncryptionSettingsEncryptionAtRest {
  catalog_encryption_mode: string;
  catalog_encryption_service_role?: string;
  sse_aws_kms_key_id?: string;
}

export interface AwsGlueDataCatalogEncryptionSettingsArgsDataCatalogEncryptionSettings {
  connection_password_encryption: AwsGlueDataCatalogEncryptionSettingsArgsDataCatalogEncryptionSettingsConnectionPasswordEncryption;
  encryption_at_rest: AwsGlueDataCatalogEncryptionSettingsArgsDataCatalogEncryptionSettingsEncryptionAtRest;
}

export interface AwsGlueDataCatalogEncryptionSettingsArgs {
  data_catalog_encryption_settings: AwsGlueDataCatalogEncryptionSettingsArgsDataCatalogEncryptionSettings;
}

export class aws_glue_data_catalog_encryption_settings extends TerraformResource {
  readonly catalog_id?: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueDataCatalogEncryptionSettingsArgs) {
    super(config, "resource", args, resourceName, "aws_glue_data_catalog_encryption_settings");
  }
}
