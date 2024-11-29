import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleLoggingFolderSettingsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleLoggingFolderSettingsArgs {
  folder: string;
  timeouts: GoogleLoggingFolderSettingsArgsTimeouts;
}
export class google_logging_folder_settings extends TerraformResource {
  readonly disable_default_sink?: boolean;
  readonly id?: string;
  readonly kms_key_name?: string;
  readonly kms_service_account_id!: string;
  readonly logging_service_account_id!: string;
  readonly name!: string;
  readonly storage_location?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingFolderSettingsArgs) {
    super(config, "resource", args, resourceName, "google_logging_folder_settings");
  }
}