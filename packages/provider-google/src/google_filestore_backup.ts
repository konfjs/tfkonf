import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFilestoreBackupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFilestoreBackupArgs {
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  source_file_share: string;
  source_instance: string;
  timeouts?: GoogleFilestoreBackupArgsTimeouts;
}

export class google_filestore_backup extends TerraformResource {
  readonly capacity_gb!: string;
  readonly create_time!: string;
  readonly download_bytes!: string;
  readonly effective_labels!: { [key: string]: string };
  readonly id?: string;
  readonly kms_key_name!: string;
  readonly project?: string;
  readonly source_instance_tier!: string;
  readonly state!: string;
  readonly storage_bytes!: string;
  readonly terraform_labels!: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: GoogleFilestoreBackupArgs) {
    super(config, "resource", args, resourceName, "google_filestore_backup");
  }
}
