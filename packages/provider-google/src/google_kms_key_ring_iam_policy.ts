import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleKmsKeyRingIamPolicyArgs {
  key_ring_id: string;
  policy_data: string;
}
export class google_kms_key_ring_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleKmsKeyRingIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_kms_key_ring_iam_policy");
  }
}