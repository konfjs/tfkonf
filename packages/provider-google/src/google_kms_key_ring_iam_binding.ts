import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleKmsKeyRingIamBindingArgs {
  key_ring_id: string;
  members: string[];
  role: string;
  condition: Condition;
}
export class google_kms_key_ring_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleKmsKeyRingIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_kms_key_ring_iam_binding");
  }
}