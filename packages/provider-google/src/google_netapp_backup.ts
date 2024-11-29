import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNetappBackupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetappBackupArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  source_snapshot?: string;
  source_volume?: string;
  vault_name: string;
  timeouts: GoogleNetappBackupArgsTimeouts;
}
export class google_netapp_backup extends TerraformResource {
  readonly backup_type!: string;
  readonly chain_storage_bytes!: string;
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly volume_usage_bytes!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetappBackupArgs) {
    super(config, "resource", args, resourceName, "google_netapp_backup");
  }
}