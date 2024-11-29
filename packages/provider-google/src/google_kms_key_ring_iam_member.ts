import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleKmsKeyRingIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleKmsKeyRingIamMemberArgs {
  key_ring_id: string;
  member: string;
  role: string;
  condition: GoogleKmsKeyRingIamMemberArgscondition;
}
export class google_kms_key_ring_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleKmsKeyRingIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_kms_key_ring_iam_member");
  }
}