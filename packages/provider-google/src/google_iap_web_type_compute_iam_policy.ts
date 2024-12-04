import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapWebTypeComputeIamPolicyArgs {
  policy_data: string;
}

export class google_iap_web_type_compute_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapWebTypeComputeIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_iap_web_type_compute_iam_policy");
  }
}
