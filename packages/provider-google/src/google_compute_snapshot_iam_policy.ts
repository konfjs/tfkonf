import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeSnapshotIamPolicyArgs {
  name: string;
  policy_data: string;
}
export class google_compute_snapshot_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeSnapshotIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_compute_snapshot_iam_policy");
  }
}