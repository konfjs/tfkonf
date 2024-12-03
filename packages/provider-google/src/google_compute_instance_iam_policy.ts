import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeInstanceIamPolicyArgs {
  instance_name: string;
  policy_data: string;
}
export class google_compute_instance_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeInstanceIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_compute_instance_iam_policy");
  }
}