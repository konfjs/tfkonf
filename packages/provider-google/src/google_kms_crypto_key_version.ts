import { TerraformConfig, TerraformResource } from "tfs";
export interface ExternalProtectionLevelOptions {
  ekm_connection_key_path?: string;
  external_key_uri?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleKmsCryptoKeyVersionArgs {
  crypto_key: string;
  external_protection_level_options: ExternalProtectionLevelOptions;
  timeouts: Timeouts;
}
export class google_kms_crypto_key_version extends TerraformResource {
  readonly algorithm!: string;
  readonly attestation!: any[];
  readonly generate_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly protection_level!: string;
  readonly state?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleKmsCryptoKeyVersionArgs) {
    super(config, "resource", args, resourceName, "google_kms_crypto_key_version");
  }
}