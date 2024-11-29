import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleIapWebTypeComputeIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapWebTypeComputeIamBindingArgs {
  members: string[];
  role: string;
  condition: GoogleIapWebTypeComputeIamBindingArgsCondition;
}
export class google_iap_web_type_compute_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapWebTypeComputeIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_iap_web_type_compute_iam_binding");
  }
}