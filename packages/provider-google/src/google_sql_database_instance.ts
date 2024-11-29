import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleSqlDatabaseInstanceArgsClone {
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
export interface GoogleSqlDatabaseInstanceArgsSettingsActiveDirectoryConfig {
  domain: string;
}
export interface GoogleSqlDatabaseInstanceArgsSettingsAdvancedMachineFeatures {
  threads_per_core?: number;
}
export interface GoogleSqlDatabaseInstanceArgsSettingsBackupConfigurationBackupRetentionSettings {
  retained_backups: number;
  retention_unit?: string;
}
export interface GoogleSqlDatabaseInstanceArgsSettingsBackupConfiguration {
  binary_log_enabled?: boolean;
  enabled?: boolean;
  location?: string;
  point_in_time_recovery_enabled?: boolean;
  backup_retention_settings: GoogleSqlDatabaseInstanceArgsSettingsBackupConfigurationBackupRetentionSettings;
}
export interface GoogleSqlDatabaseInstanceArgsSettingsDataCacheConfig {
  data_cache_enabled?: boolean;
}
export interface GoogleSqlDatabaseInstanceArgsSettingsDatabaseFlags {
  name: string;
  value: string;
}
export interface GoogleSqlDatabaseInstanceArgsSettingsDenyMaintenancePeriod {
  end_date: string;
  start_date: string;
  time: string;
}
export interface GoogleSqlDatabaseInstanceArgsSettingsInsightsConfig {
  query_insights_enabled?: boolean;
  query_string_length?: number;
  record_application_tags?: boolean;
  record_client_address?: boolean;
}
export interface GoogleSqlDatabaseInstanceArgsSettingsIpConfigurationAuthorizedNetworks {
  expiration_time?: string;
  name?: string;
  value: string;
}
export interface GoogleSqlDatabaseInstanceArgsSettingsIpConfigurationPscConfigPscAutoConnections {
  consumer_network: string;
  consumer_service_project_id?: string;
}
export interface GoogleSqlDatabaseInstanceArgsSettingsIpConfigurationPscConfig {
  allowed_consumer_projects?: string[];
  psc_enabled?: boolean;
  psc_auto_connections: GoogleSqlDatabaseInstanceArgsSettingsIpConfigurationPscConfigPscAutoConnections;
}
export interface GoogleSqlDatabaseInstanceArgsSettingsIpConfiguration {
  allocated_ip_range?: string;
  enable_private_path_for_google_cloud_services?: boolean;
  ipv4_enabled?: boolean;
  private_network?: string;
  authorized_networks: GoogleSqlDatabaseInstanceArgsSettingsIpConfigurationAuthorizedNetworks;
  psc_config: GoogleSqlDatabaseInstanceArgsSettingsIpConfigurationPscConfig;
}
export interface GoogleSqlDatabaseInstanceArgsSettingsLocationPreference {
  follow_gae_application?: string;
  secondary_zone?: string;
  zone?: string;
}
export interface GoogleSqlDatabaseInstanceArgsSettingsMaintenanceWindow {
  day?: number;
  hour?: number;
  update_track?: string;
}
export interface GoogleSqlDatabaseInstanceArgsSettingsPasswordValidationPolicy {
  complexity?: string;
  disallow_username_substring?: boolean;
  enable_password_policy: boolean;
  min_length?: number;
  password_change_interval?: string;
  reuse_interval?: number;
}
export interface GoogleSqlDatabaseInstanceArgsSettingsSqlServerAuditConfig {
  bucket?: string;
  retention_interval?: string;
  upload_interval?: string;
}
export interface GoogleSqlDatabaseInstanceArgsSettings {
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
  active_directory_config: GoogleSqlDatabaseInstanceArgsSettingsActiveDirectoryConfig;
  advanced_machine_features: GoogleSqlDatabaseInstanceArgsSettingsAdvancedMachineFeatures;
  backup_configuration: GoogleSqlDatabaseInstanceArgsSettingsBackupConfiguration;
  data_cache_config: GoogleSqlDatabaseInstanceArgsSettingsDataCacheConfig;
  database_flags: GoogleSqlDatabaseInstanceArgsSettingsDatabaseFlags;
  deny_maintenance_period: GoogleSqlDatabaseInstanceArgsSettingsDenyMaintenancePeriod;
  insights_config: GoogleSqlDatabaseInstanceArgsSettingsInsightsConfig;
  ip_configuration: GoogleSqlDatabaseInstanceArgsSettingsIpConfiguration;
  location_preference: GoogleSqlDatabaseInstanceArgsSettingsLocationPreference;
  maintenance_window: GoogleSqlDatabaseInstanceArgsSettingsMaintenanceWindow;
  password_validation_policy: GoogleSqlDatabaseInstanceArgsSettingsPasswordValidationPolicy;
  sql_server_audit_config: GoogleSqlDatabaseInstanceArgsSettingsSqlServerAuditConfig;
}
export interface GoogleSqlDatabaseInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSqlDatabaseInstanceArgs {
  database_version: string;
  deletion_protection?: boolean;
  root_password?: string;
  clone: GoogleSqlDatabaseInstanceArgsClone;
  replica_configuration: GoogleSqlDatabaseInstanceArgsReplicaConfiguration;
  restore_backup_context: GoogleSqlDatabaseInstanceArgsRestoreBackupContext;
  settings: GoogleSqlDatabaseInstanceArgsSettings;
  timeouts?: GoogleSqlDatabaseInstanceArgsTimeouts;
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