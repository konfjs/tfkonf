import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleNetappBackupVaultArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetappBackupVaultArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  timeouts?: GoogleNetappBackupVaultArgsTimeouts;
}
export class google_netapp_backup_vault extends TerraformResource {
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
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetappBackupVaultArgs) {
    super(config, "resource", args, resourceName, "google_netapp_backup_vault");
  }
}