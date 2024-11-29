import { TerraformConfig, TerraformResource } from "tfs";
export interface GuestOsFeatures {
  type: string;
}
export interface ImageEncryptionKey {
  kms_key_self_link?: string;
  kms_key_service_account?: string;
}
export interface RawDisk {
  container_type?: string;
  sha1?: string;
  source: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeImageArgs {
  description?: string;
  family?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  source_disk?: string;
  source_image?: string;
  source_snapshot?: string;
  guest_os_features: GuestOsFeatures;
  image_encryption_key: ImageEncryptionKey;
  raw_disk: RawDisk;
  timeouts: Timeouts;
}
export class google_compute_image extends TerraformResource {
  readonly archive_size_bytes!: number;
  readonly creation_timestamp!: string;
  readonly disk_size_gb?: number;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly label_fingerprint!: string;
  readonly licenses?: string[];
  readonly project?: string;
  readonly self_link!: string;
  readonly storage_locations?: string[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeImageArgs) {
    super(config, "resource", args, resourceName, "google_compute_image");
  }
}