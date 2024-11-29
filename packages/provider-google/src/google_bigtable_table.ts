import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleBigtableTableArgsAutomatedBackupPolicy {}
export interface GoogleBigtableTableArgsColumnFamily {
  family: string;
  type?: string;
}
export interface GoogleBigtableTableArgsTimeouts {
  create?: string;
  update?: string;
}
export interface GoogleBigtableTableArgs {
  instance_name: string;
  name: string;
  split_keys?: string[];
  automated_backup_policy: GoogleBigtableTableArgsAutomatedBackupPolicy;
  column_family: GoogleBigtableTableArgsColumnFamily;
  timeouts: GoogleBigtableTableArgsTimeouts;
}
export class google_bigtable_table extends TerraformResource {
  readonly change_stream_retention?: string;
  readonly deletion_protection?: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigtableTableArgs) {
    super(config, "resource", args, resourceName, "google_bigtable_table");
  }
}