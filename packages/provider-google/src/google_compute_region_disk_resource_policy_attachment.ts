import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeRegionDiskResourcePolicyAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeRegionDiskResourcePolicyAttachmentArgs {
  disk: string;
  name: string;
  timeouts: GoogleComputeRegionDiskResourcePolicyAttachmentArgsTimeouts;
}
export class google_compute_region_disk_resource_policy_attachment extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionDiskResourcePolicyAttachmentArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_disk_resource_policy_attachment");
  }
}