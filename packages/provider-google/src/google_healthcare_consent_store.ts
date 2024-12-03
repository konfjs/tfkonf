import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleHealthcareConsentStoreArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleHealthcareConsentStoreArgs {
  dataset: string;
  default_consent_ttl?: string;
  enable_consent_create_on_update?: boolean;
  labels?: {
    [key: string]: string;
  };
  name: string;
  timeouts?: GoogleHealthcareConsentStoreArgsTimeouts;
}
export class google_healthcare_consent_store extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareConsentStoreArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_consent_store");
  }
}