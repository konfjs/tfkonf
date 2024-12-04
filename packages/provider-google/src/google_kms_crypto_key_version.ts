import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleKmsCryptoKeyVersionArgsExternalProtectionLevelOptions {
  ekm_connection_key_path?: string;
  external_key_uri?: string;
}

export interface GoogleKmsCryptoKeyVersionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleKmsCryptoKeyVersionArgs {
  crypto_key: string;
  external_protection_level_options: GoogleKmsCryptoKeyVersionArgsExternalProtectionLevelOptions;
  timeouts?: GoogleKmsCryptoKeyVersionArgsTimeouts;
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
