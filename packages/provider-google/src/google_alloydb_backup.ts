import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleAlloydbBackupArgsEncryptionConfig {
  kms_key_name?: string;
}
export interface GoogleAlloydbBackupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAlloydbBackupArgs {
  annotations?: {
    [key: string]: string;
  };
  backup_id: string;
  cluster_name: string;
  description?: string;
  display_name?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  encryption_config: GoogleAlloydbBackupArgsEncryptionConfig;
  timeouts: GoogleAlloydbBackupArgsTimeouts;
}
export class google_alloydb_backup extends TerraformResource {
  readonly cluster_uid!: string;
  readonly create_time!: string;
  readonly delete_time!: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly encryption_info!: any[];
  readonly etag!: string;
  readonly expiry_quantity!: any[];
  readonly expiry_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly reconciling!: boolean;
  readonly size_bytes!: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly type?: string;
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAlloydbBackupArgs) {
    super(config, "resource", args, resourceName, "google_alloydb_backup");
  }
}