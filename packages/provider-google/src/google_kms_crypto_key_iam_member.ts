import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleKmsCryptoKeyIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleKmsCryptoKeyIamMemberArgs {
  crypto_key_id: string;
  member: string;
  role: string;
  condition: GoogleKmsCryptoKeyIamMemberArgscondition;
}
export class google_kms_crypto_key_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleKmsCryptoKeyIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_kms_crypto_key_iam_member");
  }
}