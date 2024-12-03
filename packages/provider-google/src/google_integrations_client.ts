import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleIntegrationsClientArgsCloudKmsConfig {
  key: string;
  key_version?: string;
  kms_location: string;
  kms_project_id?: string;
  kms_ring: string;
}
export interface GoogleIntegrationsClientArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleIntegrationsClientArgs {
  create_sample_integrations?: boolean;
  location: string;
  run_as_service_account?: string;
  cloud_kms_config: GoogleIntegrationsClientArgsCloudKmsConfig;
  timeouts?: GoogleIntegrationsClientArgsTimeouts;
}
export class google_integrations_client extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIntegrationsClientArgs) {
    super(config, "resource", args, resourceName, "google_integrations_client");
  }
}