import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleIapWebTypeComputeIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapWebTypeComputeIamMemberArgs {
  member: string;
  role: string;
  condition: GoogleIapWebTypeComputeIamMemberArgsCondition;
}
export class google_iap_web_type_compute_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapWebTypeComputeIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_iap_web_type_compute_iam_member");
  }
}