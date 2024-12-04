import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeDiskIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleComputeDiskIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: GoogleComputeDiskIamMemberArgsCondition;
}

export class google_compute_disk_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeDiskIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_compute_disk_iam_member");
  }
}
