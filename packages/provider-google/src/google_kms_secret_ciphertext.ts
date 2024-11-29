import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleKmsSecretCiphertextArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleKmsSecretCiphertextArgs {
  additional_authenticated_data?: string;
  crypto_key: string;
  plaintext: string;
  timeouts: GoogleKmsSecretCiphertextArgsTimeouts;
}
export class google_kms_secret_ciphertext extends TerraformResource {
  readonly ciphertext!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleKmsSecretCiphertextArgs) {
    super(config, "resource", args, resourceName, "google_kms_secret_ciphertext");
  }
}