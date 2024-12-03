import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDataprocMetastoreServiceArgsEncryptionConfig {
  kms_key: string;
}
export interface GoogleDataprocMetastoreServiceArgsHiveMetastoreConfigAuxiliaryVersions {
  config_overrides?: {
    [key: string]: string;
  };
  key: string;
  version: string;
}
export interface GoogleDataprocMetastoreServiceArgsHiveMetastoreConfigKerberosConfigKeytab {
  cloud_secret: string;
}
export interface GoogleDataprocMetastoreServiceArgsHiveMetastoreConfigKerberosConfig {
  krb5_config_gcs_uri: string;
  principal: string;
  keytab: GoogleDataprocMetastoreServiceArgsHiveMetastoreConfigKerberosConfigKeytab;
}
export interface GoogleDataprocMetastoreServiceArgsHiveMetastoreConfig {
  endpoint_protocol?: string;
  version: string;
  auxiliary_versions: GoogleDataprocMetastoreServiceArgsHiveMetastoreConfigAuxiliaryVersions;
  kerberos_config: GoogleDataprocMetastoreServiceArgsHiveMetastoreConfigKerberosConfig;
}
export interface GoogleDataprocMetastoreServiceArgsMaintenanceWindow {
  day_of_week: string;
  hour_of_day: number;
}
export interface GoogleDataprocMetastoreServiceArgsMetadataIntegrationDataCatalogConfig {
  enabled: boolean;
}
export interface GoogleDataprocMetastoreServiceArgsMetadataIntegration {
  data_catalog_config: GoogleDataprocMetastoreServiceArgsMetadataIntegrationDataCatalogConfig;
}
export interface GoogleDataprocMetastoreServiceArgsNetworkConfigConsumers {
  subnetwork: string;
}
export interface GoogleDataprocMetastoreServiceArgsNetworkConfig {
  consumers: GoogleDataprocMetastoreServiceArgsNetworkConfigConsumers;
}
export interface GoogleDataprocMetastoreServiceArgsScalingConfig {
  instance_size?: string;
  scaling_factor?: number;
}
export interface GoogleDataprocMetastoreServiceArgsScheduledBackup {
  backup_location: string;
  cron_schedule?: string;
}
export interface GoogleDataprocMetastoreServiceArgsTelemetryConfig {
  log_format?: string;
}
export interface GoogleDataprocMetastoreServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataprocMetastoreServiceArgs {
  database_type?: string;
  deletion_protection?: boolean;
  labels?: {
    [key: string]: string;
  };
  location?: string;
  release_channel?: string;
  service_id: string;
  encryption_config: GoogleDataprocMetastoreServiceArgsEncryptionConfig;
  hive_metastore_config: GoogleDataprocMetastoreServiceArgsHiveMetastoreConfig;
  maintenance_window: GoogleDataprocMetastoreServiceArgsMaintenanceWindow;
  metadata_integration: GoogleDataprocMetastoreServiceArgsMetadataIntegration;
  network_config: GoogleDataprocMetastoreServiceArgsNetworkConfig;
  scaling_config: GoogleDataprocMetastoreServiceArgsScalingConfig;
  scheduled_backup: GoogleDataprocMetastoreServiceArgsScheduledBackup;
  telemetry_config: GoogleDataprocMetastoreServiceArgsTelemetryConfig;
  timeouts?: GoogleDataprocMetastoreServiceArgsTimeouts;
}
export class google_dataproc_metastore_service extends TerraformResource {
  readonly artifact_gcs_uri!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly endpoint_uri!: string;
  readonly id?: string;
  readonly name!: string;
  readonly network?: string;
  readonly port?: number;
  readonly project?: string;
  readonly state!: string;
  readonly state_message!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly tier?: string;
  readonly uid!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocMetastoreServiceArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_metastore_service");
  }
}