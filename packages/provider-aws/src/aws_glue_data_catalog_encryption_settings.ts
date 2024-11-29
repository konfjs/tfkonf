import { TerraformConfig, TerraformResource } from "tfs";
export interface ConnectionPasswordEncryption {
  aws_kms_key_id?: string;
  return_connection_password_encrypted: boolean;
}
export interface EncryptionAtRest {
  catalog_encryption_mode: string;
  catalog_encryption_service_role?: string;
  sse_aws_kms_key_id?: string;
}
export interface DataCatalogEncryptionSettings {
  connection_password_encryption: ConnectionPasswordEncryption;
  encryption_at_rest: EncryptionAtRest;
}
export interface AwsGlueDataCatalogEncryptionSettingsArgs {
  data_catalog_encryption_settings: DataCatalogEncryptionSettings;
}
export class aws_glue_data_catalog_encryption_settings extends TerraformResource {
  readonly catalog_id?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueDataCatalogEncryptionSettingsArgs) {
    super(config, "resource", args, resourceName, "aws_glue_data_catalog_encryption_settings");
  }
}