import { TerraformConfig, TerraformResource } from "tfs";
export interface AsyncPrimaryDisk {
  disk: string;
}
export interface DiskEncryptionKey {
  kms_key_self_link?: string;
  kms_key_service_account?: string;
  raw_key?: string;
  rsa_encrypted_key?: string;
}
export interface GuestOsFeatures {
  type: string;
}
export interface SourceImageEncryptionKey {
  kms_key_self_link?: string;
  kms_key_service_account?: string;
  raw_key?: string;
}
export interface SourceSnapshotEncryptionKey {
  kms_key_self_link?: string;
  kms_key_service_account?: string;
  raw_key?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeDiskArgs {
  description?: string;
  image?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  snapshot?: string;
  source_disk?: string;
  storage_pool?: string;
  type?: string;
  async_primary_disk: AsyncPrimaryDisk;
  disk_encryption_key: DiskEncryptionKey;
  guest_os_features: GuestOsFeatures;
  source_image_encryption_key: SourceImageEncryptionKey;
  source_snapshot_encryption_key: SourceSnapshotEncryptionKey;
  timeouts: Timeouts;
}
export class google_compute_disk extends TerraformResource {
  readonly access_mode?: string;
  readonly creation_timestamp!: string;
  readonly disk_id!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly enable_confidential_compute?: boolean;
  readonly id?: string;
  readonly label_fingerprint!: string;
  readonly last_attach_timestamp!: string;
  readonly last_detach_timestamp!: string;
  readonly licenses?: string[];
  readonly physical_block_size_bytes?: number;
  readonly project?: string;
  readonly provisioned_iops?: number;
  readonly provisioned_throughput?: number;
  readonly self_link!: string;
  readonly size?: number;
  readonly source_disk_id!: string;
  readonly source_image_id!: string;
  readonly source_snapshot_id!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly users!: string[];
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeDiskArgs) {
    super(config, "resource", args, resourceName, "google_compute_disk");
  }
}