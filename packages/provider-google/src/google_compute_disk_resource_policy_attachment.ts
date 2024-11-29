import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeDiskResourcePolicyAttachmentArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeDiskResourcePolicyAttachmentArgs {
  disk: string;
  name: string;
  timeouts: GoogleComputeDiskResourcePolicyAttachmentArgstimeouts;
}
export class google_compute_disk_resource_policy_attachment extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeDiskResourcePolicyAttachmentArgs) {
    super(config, "resource", args, resourceName, "google_compute_disk_resource_policy_attachment");
  }
}