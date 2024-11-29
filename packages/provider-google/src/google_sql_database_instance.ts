import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSqlDatabaseInstanceArgsclone {
  allocated_ip_range?: string;
  database_names?: string[];
  point_in_time?: string;
  preferred_zone?: string;
  source_instance_name: string;
}
export interface GoogleSqlDatabaseInstanceArgsReplicaConfiguration {
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
export interface GoogleSqlDatabaseInstanceArgsRestoreBackupContext {
  backup_run_id: number;
  instance_id?: string;
  project?: string;
}
export interface GoogleSqlDatabaseInstanceArgssettingsActiveDirectoryConfig {
  domain: string;
}
export interface GoogleSqlDatabaseInstanceArgssettingsAdvancedMachineFeatures {
  threads_per_core?: number;
}
export interface GoogleSqlDatabaseInstanceArgssettingsBackupConfigurationBackupRetentionSettings {
  retained_backups: number;
  retention_unit?: string;
}
export interface GoogleSqlDatabaseInstanceArgssettingsBackupConfiguration {
  binary_log_enabled?: boolean;
  enabled?: boolean;
  location?: string;
  point_in_time_recovery_enabled?: boolean;
  backup_retention_settings: GoogleSqlDatabaseInstanceArgssettingsBackupConfigurationBackupRetentionSettings;
}
export interface GoogleSqlDatabaseInstanceArgssettingsDataCacheConfig {
  data_cache_enabled?: boolean;
}
export interface GoogleSqlDatabaseInstanceArgssettingsDatabaseFlags {
  name: string;
  value: string;
}
export interface GoogleSqlDatabaseInstanceArgssettingsDenyMaintenancePeriod {
  end_date: string;
  start_date: string;
  time: string;
}
export interface GoogleSqlDatabaseInstanceArgssettingsInsightsConfig {
  query_insights_enabled?: boolean;
  query_string_length?: number;
  record_application_tags?: boolean;
  record_client_address?: boolean;
}
export interface GoogleSqlDatabaseInstanceArgssettingsIpConfigurationAuthorizedNetworks {
  expiration_time?: string;
  name?: string;
  value: string;
}
export interface GoogleSqlDatabaseInstanceArgssettingsIpConfigurationPscConfigPscAutoConnections {
  consumer_network: string;
  consumer_service_project_id?: string;
}
export interface GoogleSqlDatabaseInstanceArgssettingsIpConfigurationPscConfig {
  allowed_consumer_projects?: string[];
  psc_enabled?: boolean;
  psc_auto_connections: GoogleSqlDatabaseInstanceArgssettingsIpConfigurationPscConfigPscAutoConnections;
}
export interface GoogleSqlDatabaseInstanceArgssettingsIpConfiguration {
  allocated_ip_range?: string;
  enable_private_path_for_google_cloud_services?: boolean;
  ipv4_enabled?: boolean;
  private_network?: string;
  authorized_networks: GoogleSqlDatabaseInstanceArgssettingsIpConfigurationAuthorizedNetworks;
  psc_config: GoogleSqlDatabaseInstanceArgssettingsIpConfigurationPscConfig;
}
export interface GoogleSqlDatabaseInstanceArgssettingsLocationPreference {
  follow_gae_application?: string;
  secondary_zone?: string;
  zone?: string;
}
export interface GoogleSqlDatabaseInstanceArgssettingsMaintenanceWindow {
  day?: number;
  hour?: number;
  update_track?: string;
}
export interface GoogleSqlDatabaseInstanceArgssettingsPasswordValidationPolicy {
  complexity?: string;
  disallow_username_substring?: boolean;
  enable_password_policy: boolean;
  min_length?: number;
  password_change_interval?: string;
  reuse_interval?: number;
}
export interface GoogleSqlDatabaseInstanceArgssettingsSqlServerAuditConfig {
  bucket?: string;
  retention_interval?: string;
  upload_interval?: string;
}
export interface GoogleSqlDatabaseInstanceArgssettings {
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
  active_directory_config: GoogleSqlDatabaseInstanceArgssettingsActiveDirectoryConfig;
  advanced_machine_features: GoogleSqlDatabaseInstanceArgssettingsAdvancedMachineFeatures;
  backup_configuration: GoogleSqlDatabaseInstanceArgssettingsBackupConfiguration;
  data_cache_config: GoogleSqlDatabaseInstanceArgssettingsDataCacheConfig;
  database_flags: GoogleSqlDatabaseInstanceArgssettingsDatabaseFlags;
  deny_maintenance_period: GoogleSqlDatabaseInstanceArgssettingsDenyMaintenancePeriod;
  insights_config: GoogleSqlDatabaseInstanceArgssettingsInsightsConfig;
  ip_configuration: GoogleSqlDatabaseInstanceArgssettingsIpConfiguration;
  location_preference: GoogleSqlDatabaseInstanceArgssettingsLocationPreference;
  maintenance_window: GoogleSqlDatabaseInstanceArgssettingsMaintenanceWindow;
  password_validation_policy: GoogleSqlDatabaseInstanceArgssettingsPasswordValidationPolicy;
  sql_server_audit_config: GoogleSqlDatabaseInstanceArgssettingsSqlServerAuditConfig;
}
export interface GoogleSqlDatabaseInstanceArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSqlDatabaseInstanceArgs {
  database_version: string;
  deletion_protection?: boolean;
  root_password?: string;
  clone: GoogleSqlDatabaseInstanceArgsclone;
  replica_configuration: GoogleSqlDatabaseInstanceArgsReplicaConfiguration;
  restore_backup_context: GoogleSqlDatabaseInstanceArgsRestoreBackupContext;
  settings: GoogleSqlDatabaseInstanceArgssettings;
  timeouts: GoogleSqlDatabaseInstanceArgstimeouts;
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