import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleComputeSnapshotIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: Condition;
}
export class google_compute_snapshot_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeSnapshotIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_compute_snapshot_iam_binding");
  }
}