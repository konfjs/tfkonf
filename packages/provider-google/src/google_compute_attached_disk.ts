import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeAttachedDiskArgs {
  disk: string;
  instance: string;
  interface?: string;
  mode?: string;
  timeouts: Timeouts;
}
export class google_compute_attached_disk extends TerraformResource {
  readonly device_name?: string;
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeAttachedDiskArgs) {
    super(config, "resource", args, resourceName, "google_compute_attached_disk");
  }
}