import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleKmsCryptoKeyIamPolicyArgs {
  crypto_key_id: string;
  policy_data: string;
}
export class google_kms_crypto_key_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleKmsCryptoKeyIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_kms_crypto_key_iam_policy");
  }
}