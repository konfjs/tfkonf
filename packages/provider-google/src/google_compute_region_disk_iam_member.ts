import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeRegionDiskIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleComputeRegionDiskIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: GoogleComputeRegionDiskIamMemberArgsCondition;
}
export class google_compute_region_disk_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionDiskIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_disk_iam_member");
  }
}