import { TerraformConfig, TerraformResource } from "tfs";
export interface Clone {
  allocated_ip_range?: string;
  database_names?: string[];
  point_in_time?: string;
  preferred_zone?: string;
  source_instance_name: string;
}
export interface ReplicaConfiguration {
  ca_certificate?: string;
  cascadable_replica?: boolean;
  client_certificate?: string;
  client_key?: string;
  connect_retry_interval?: number;
  dump_file_path?: string;
  failover_target?: boolean;
  master_heartbeat_period?: number;
  password?: string;
  ssl_cipher?: string;
  username?: string;
  verify_server_certificate?: boolean;
}
export interface RestoreBackupContext {
  backup_run_id: number;
  instance_id?: string;
  project?: string;
}
export interface ActiveDirectoryConfig {
  domain: string;
}
export interface AdvancedMachineFeatures {
  threads_per_core?: number;
}
export interface BackupRetentionSettings {
  retained_backups: number;
  retention_unit?: string;
}
export interface BackupConfiguration {
  binary_log_enabled?: boolean;
  enabled?: boolean;
  location?: string;
  point_in_time_recovery_enabled?: boolean;
  backup_retention_settings: BackupRetentionSettings;
}
export interface DataCacheConfig {
  data_cache_enabled?: boolean;
}
export interface DatabaseFlags {
  name: string;
  value: string;
}
export interface DenyMaintenancePeriod {
  end_date: string;
  start_date: string;
  time: string;
}
export interface InsightsConfig {
  query_insights_enabled?: boolean;
  query_string_length?: number;
  record_application_tags?: boolean;
  record_client_address?: boolean;
}
export interface AuthorizedNetworks {
  expiration_time?: string;
  name?: string;
  value: string;
}
export interface PscAutoConnections {
  consumer_network: string;
  consumer_service_project_id?: string;
}
export interface PscConfig {
  allowed_consumer_projects?: string[];
  psc_enabled?: boolean;
  psc_auto_connections: PscAutoConnections;
}
export interface IpConfiguration {
  allocated_ip_range?: string;
  enable_private_path_for_google_cloud_services?: boolean;
  ipv4_enabled?: boolean;
  private_network?: string;
  authorized_networks: AuthorizedNetworks;
  psc_config: PscConfig;
}
export interface LocationPreference {
  follow_gae_application?: string;
  secondary_zone?: string;
  zone?: string;
}
export interface MaintenanceWindow {
  day?: number;
  hour?: number;
  update_track?: string;
}
export interface PasswordValidationPolicy {
  complexity?: string;
  disallow_username_substring?: boolean;
  enable_password_policy: boolean;
  min_length?: number;
  password_change_interval?: string;
  reuse_interval?: number;
}
export interface SqlServerAuditConfig {
  bucket?: string;
  retention_interval?: string;
  upload_interval?: string;
}
export interface Settings {
  activation_policy?: string;
  availability_type?: string;
  collation?: string;
  deletion_protection_enabled?: boolean;
  disk_autoresize?: boolean;
  disk_autoresize_limit?: number;
  disk_type?: string;
  enable_dataplex_integration?: boolean;
  enable_google_ml_integration?: boolean;
  pricing_plan?: string;
  tier: string;
  time_zone?: string;
  active_directory_config: ActiveDirectoryConfig;
  advanced_machine_features: AdvancedMachineFeatures;
  backup_configuration: BackupConfiguration;
  data_cache_config: DataCacheConfig;
  database_flags: DatabaseFlags;
  deny_maintenance_period: DenyMaintenancePeriod;
  insights_config: InsightsConfig;
  ip_configuration: IpConfiguration;
  location_preference: LocationPreference;
  maintenance_window: MaintenanceWindow;
  password_validation_policy: PasswordValidationPolicy;
  sql_server_audit_config: SqlServerAuditConfig;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSqlDatabaseInstanceArgs {
  database_version: string;
  deletion_protection?: boolean;
  root_password?: string;
  clone: Clone;
  replica_configuration: ReplicaConfiguration;
  restore_backup_context: RestoreBackupContext;
  settings: Settings;
  timeouts: Timeouts;
}
export class google_sql_database_instance extends TerraformResource {
  readonly available_maintenance_versions!: string[];
  readonly connection_name!: string;
  readonly dns_name!: string;
  readonly encryption_key_name?: string;
  readonly first_ip_address!: string;
  readonly id?: string;
  readonly instance_type?: string;
  readonly ip_address!: any[];
  readonly maintenance_version?: string;
  readonly master_instance_name?: string;
  readonly name?: string;
  readonly private_ip_address!: string;
  readonly project?: string;
  readonly psc_service_attachment_link!: string;
  readonly public_ip_address!: string;
  readonly region?: string;
  readonly replica_names?: string[];
  readonly self_link!: string;
  readonly server_ca_cert!: any[];
  readonly service_account_email_address!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSqlDatabaseInstanceArgs) {
    super(config, "resource", args, resourceName, "google_sql_database_instance");
  }
}