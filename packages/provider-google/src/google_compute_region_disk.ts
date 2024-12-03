import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeRegionDiskArgsAsyncPrimaryDisk {
  disk: string;
}
export interface GoogleComputeRegionDiskArgsDiskEncryptionKey {
  kms_key_name?: string;
  raw_key?: string;
}
export interface GoogleComputeRegionDiskArgsGuestOsFeatures {
  type: string;
}
export interface GoogleComputeRegionDiskArgsSourceSnapshotEncryptionKey {
  raw_key?: string;
}
export interface GoogleComputeRegionDiskArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeRegionDiskArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  replica_zones: string[];
  snapshot?: string;
  source_disk?: string;
  type?: string;
  async_primary_disk: GoogleComputeRegionDiskArgsAsyncPrimaryDisk;
  disk_encryption_key: GoogleComputeRegionDiskArgsDiskEncryptionKey;
  guest_os_features: GoogleComputeRegionDiskArgsGuestOsFeatures;
  source_snapshot_encryption_key: GoogleComputeRegionDiskArgsSourceSnapshotEncryptionKey;
  timeouts?: GoogleComputeRegionDiskArgsTimeouts;
}
export class google_compute_region_disk extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly label_fingerprint!: string;
  readonly last_attach_timestamp!: string;
  readonly last_detach_timestamp!: string;
  readonly licenses?: string[];
  readonly physical_block_size_bytes?: number;
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;
  readonly size?: number;
  readonly source_disk_id!: string;
  readonly source_snapshot_id!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly users!: string[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionDiskArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_disk");
  }
}