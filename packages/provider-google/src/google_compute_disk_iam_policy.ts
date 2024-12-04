import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeDiskIamPolicyArgs {
  name: string;
  policy_data: string;
}

export class google_compute_disk_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeDiskIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_compute_disk_iam_policy");
  }
}
