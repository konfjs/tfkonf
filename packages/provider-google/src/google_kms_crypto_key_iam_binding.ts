import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleKmsCryptoKeyIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleKmsCryptoKeyIamBindingArgs {
  crypto_key_id: string;
  members: string[];
  role: string;
  condition: GoogleKmsCryptoKeyIamBindingArgsCondition;
}
export class google_kms_crypto_key_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleKmsCryptoKeyIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_kms_crypto_key_iam_binding");
  }
}