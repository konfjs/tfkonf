import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleOracleDatabaseCloudVmClusterArgspropertiesDiagnosticsDataCollectionOptions {
  diagnostics_events_enabled?: boolean;
  health_monitoring_enabled?: boolean;
  incident_logs_enabled?: boolean;
}
export interface GoogleOracleDatabaseCloudVmClusterArgspropertiesTimeZone {}
export interface GoogleOracleDatabaseCloudVmClusterArgsproperties {
  cpu_core_count: number;
  gi_version?: string;
  hostname_prefix?: string;
  license_type: string;
  local_backup_enabled?: boolean;
  ssh_public_keys?: string[];
  diagnostics_data_collection_options: GoogleOracleDatabaseCloudVmClusterArgspropertiesDiagnosticsDataCollectionOptions;
  time_zone: GoogleOracleDatabaseCloudVmClusterArgspropertiesTimeZone;
}
export interface GoogleOracleDatabaseCloudVmClusterArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleOracleDatabaseCloudVmClusterArgs {
  backup_subnet_cidr: string;
  cidr: string;
  cloud_vm_cluster_id: string;
  display_name?: string;
  exadata_infrastructure: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  network: string;
  properties: GoogleOracleDatabaseCloudVmClusterArgsproperties;
  timeouts: GoogleOracleDatabaseCloudVmClusterArgstimeouts;
}
export class google_oracle_database_cloud_vm_cluster extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly gcp_oracle_zone!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleOracleDatabaseCloudVmClusterArgs) {
    super(config, "resource", args, resourceName, "google_oracle_database_cloud_vm_cluster");
  }
}