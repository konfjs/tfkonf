import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeSnapshotIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleComputeSnapshotIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: GoogleComputeSnapshotIamMemberArgsCondition;
}

export class google_compute_snapshot_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeSnapshotIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_compute_snapshot_iam_member");
  }
}
