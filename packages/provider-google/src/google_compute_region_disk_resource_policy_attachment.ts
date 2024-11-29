import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeRegionDiskResourcePolicyAttachmentArgs {
  disk: string;
  name: string;
  timeouts: Timeouts;
}
export class google_compute_region_disk_resource_policy_attachment extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionDiskResourcePolicyAttachmentArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_disk_resource_policy_attachment");
  }
}