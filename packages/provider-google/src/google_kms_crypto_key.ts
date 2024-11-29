import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleKmsCryptoKeyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleKmsCryptoKeyArgsVersionTemplate {
  algorithm: string;
  protection_level?: string;
}
export interface GoogleKmsCryptoKeyArgs {
  key_ring: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  purpose?: string;
  rotation_period?: string;
  skip_initial_version_creation?: boolean;
  timeouts: GoogleKmsCryptoKeyArgsTimeouts;
  version_template: GoogleKmsCryptoKeyArgsVersionTemplate;
}
export class google_kms_crypto_key extends TerraformResource {
  readonly crypto_key_backend?: string;
  readonly destroy_scheduled_duration?: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly import_only?: boolean;
  readonly primary!: any[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleKmsCryptoKeyArgs) {
    super(config, "resource", args, resourceName, "google_kms_crypto_key");
  }
}