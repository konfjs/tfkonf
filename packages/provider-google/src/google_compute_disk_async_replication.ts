import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeDiskAsyncReplicationArgsSecondaryDisk {
  disk: string;
}
export interface GoogleComputeDiskAsyncReplicationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeDiskAsyncReplicationArgs {
  primary_disk: string;
  secondary_disk: GoogleComputeDiskAsyncReplicationArgsSecondaryDisk;
  timeouts: GoogleComputeDiskAsyncReplicationArgsTimeouts;
}
export class google_compute_disk_async_replication extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeDiskAsyncReplicationArgs) {
    super(config, "resource", args, resourceName, "google_compute_disk_async_replication");
  }
}