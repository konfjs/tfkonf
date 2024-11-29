import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeSnapshotArgsSnapshotEncryptionKey {
  kms_key_self_link?: string;
  kms_key_service_account?: string;
  raw_key?: string;
}
export interface GoogleComputeSnapshotArgsSourceDiskEncryptionKey {
  kms_key_service_account?: string;
  raw_key?: string;
}
export interface GoogleComputeSnapshotArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeSnapshotArgs {
  chain_name?: string;
  description?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  source_disk: string;
  snapshot_encryption_key: GoogleComputeSnapshotArgsSnapshotEncryptionKey;
  source_disk_encryption_key: GoogleComputeSnapshotArgsSourceDiskEncryptionKey;
  timeouts?: GoogleComputeSnapshotArgsTimeouts;
}
export class google_compute_snapshot extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly disk_size_gb!: number;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly label_fingerprint!: string;
  readonly licenses!: string[];
  readonly project?: string;
  readonly self_link!: string;
  readonly snapshot_id!: number;
  readonly storage_bytes!: number;
  readonly storage_locations?: string[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeSnapshotArgs) {
    super(config, "resource", args, resourceName, "google_compute_snapshot");
  }
}