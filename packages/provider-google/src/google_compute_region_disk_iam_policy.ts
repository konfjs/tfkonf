import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeRegionDiskIamPolicyArgs {
  name: string;
  policy_data: string;
}
export class google_compute_region_disk_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionDiskIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_disk_iam_policy");
  }
}