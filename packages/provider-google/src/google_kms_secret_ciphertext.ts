import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleKmsSecretCiphertextArgs {
  additional_authenticated_data?: string;
  crypto_key: string;
  plaintext: string;
  timeouts: Timeouts;
}
export class google_kms_secret_ciphertext extends TerraformResource {
  readonly ciphertext!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleKmsSecretCiphertextArgs) {
    super(config, "resource", args, resourceName, "google_kms_secret_ciphertext");
  }
}