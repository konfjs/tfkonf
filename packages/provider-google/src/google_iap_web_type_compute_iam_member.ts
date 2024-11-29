import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIapWebTypeComputeIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapWebTypeComputeIamMemberArgs {
  member: string;
  role: string;
  condition: GoogleIapWebTypeComputeIamMemberArgscondition;
}
export class google_iap_web_type_compute_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapWebTypeComputeIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_iap_web_type_compute_iam_member");
  }
}