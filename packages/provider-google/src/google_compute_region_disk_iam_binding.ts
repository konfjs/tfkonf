import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeRegionDiskIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleComputeRegionDiskIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: GoogleComputeRegionDiskIamBindingArgsCondition;
}
export class google_compute_region_disk_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionDiskIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_disk_iam_binding");
  }
}