import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleLoggingOrganizationSettingsArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleLoggingOrganizationSettingsArgs {
  organization: string;
  timeouts: GoogleLoggingOrganizationSettingsArgstimeouts;
}
export class google_logging_organization_settings extends TerraformResource {
  readonly disable_default_sink?: boolean;
  readonly id?: string;
  readonly kms_key_name?: string;
  readonly kms_service_account_id!: string;
  readonly logging_service_account_id!: string;
  readonly name!: string;
  readonly storage_location?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingOrganizationSettingsArgs) {
    super(config, "resource", args, resourceName, "google_logging_organization_settings");
  }
}