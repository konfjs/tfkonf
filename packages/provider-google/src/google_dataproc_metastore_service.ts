import { TerraformConfig, TerraformResource } from "tfs";
export interface EncryptionConfig {
  kms_key: string;
}
export interface AuxiliaryVersions {
  config_overrides?: {
    [key: string]: string;
  };
  key: string;
  version: string;
}
export interface Keytab {
  cloud_secret: string;
}
export interface KerberosConfig {
  krb5_config_gcs_uri: string;
  principal: string;
  keytab: Keytab;
}
export interface HiveMetastoreConfig {
  endpoint_protocol?: string;
  version: string;
  auxiliary_versions: AuxiliaryVersions;
  kerberos_config: KerberosConfig;
}
export interface MaintenanceWindow {
  day_of_week: string;
  hour_of_day: number;
}
export interface DataCatalogConfig {
  enabled: boolean;
}
export interface MetadataIntegration {
  data_catalog_config: DataCatalogConfig;
}
export interface Consumers {
  subnetwork: string;
}
export interface NetworkConfig {
  consumers: Consumers;
}
export interface ScalingConfig {
  instance_size?: string;
  scaling_factor?: number;
}
export interface ScheduledBackup {
  backup_location: string;
  cron_schedule?: string;
}
export interface TelemetryConfig {
  log_format?: string;
}
export interface Timeouts {
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
  encryption_config: EncryptionConfig;
  hive_metastore_config: HiveMetastoreConfig;
  maintenance_window: MaintenanceWindow;
  metadata_integration: MetadataIntegration;
  network_config: NetworkConfig;
  scaling_config: ScalingConfig;
  scheduled_backup: ScheduledBackup;
  telemetry_config: TelemetryConfig;
  timeouts: Timeouts;
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