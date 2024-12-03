import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydbSettingsInitialUser {
  password: string;
  user: string;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydbSettingsPrimaryInstanceSettingsMachineConfig {
  cpu_count: number;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydbSettingsPrimaryInstanceSettings {
  database_flags?: {
    [key: string]: string;
  };
  id: string;
  labels?: {
    [key: string]: string;
  };
  machine_config: GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydbSettingsPrimaryInstanceSettingsMachineConfig;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydbSettings {
  labels?: {
    [key: string]: string;
  };
  vpc_network: string;
  initial_user: GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydbSettingsInitialUser;
  primary_instance_settings: GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydbSettingsPrimaryInstanceSettings;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydb {
  cluster_id: string;
  settings: GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydbSettings;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsCloudsqlSettingsIpConfigAuthorizedNetworks {
  expire_time?: string;
  label?: string;
  ttl?: string;
  value: string;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsCloudsqlSettingsIpConfig {
  enable_ipv4?: boolean;
  private_network?: string;
  require_ssl?: boolean;
  authorized_networks: GoogleDatabaseMigrationServiceConnectionProfileArgsCloudsqlSettingsIpConfigAuthorizedNetworks;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsCloudsqlSettings {
  activation_policy?: string;
  auto_storage_increase?: boolean;
  cmek_key_name?: string;
  collation?: string;
  data_disk_size_gb?: string;
  data_disk_type?: string;
  database_flags?: {
    [key: string]: string;
  };
  database_version?: string;
  edition?: string;
  root_password?: string;
  source_id: string;
  storage_auto_resize_limit?: string;
  tier?: string;
  user_labels?: {
    [key: string]: string;
  };
  zone?: string;
  ip_config: GoogleDatabaseMigrationServiceConnectionProfileArgsCloudsqlSettingsIpConfig;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsCloudsql {
  settings: GoogleDatabaseMigrationServiceConnectionProfileArgsCloudsqlSettings;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsMysqlSsl {
  ca_certificate: string;
  client_certificate?: string;
  client_key?: string;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsMysql {
  cloud_sql_id?: string;
  host?: string;
  password?: string;
  port?: number;
  username?: string;
  ssl: GoogleDatabaseMigrationServiceConnectionProfileArgsMysqlSsl;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsOracleForwardSshConnectivity {
  hostname: string;
  password?: string;
  port: number;
  private_key?: string;
  username: string;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsOraclePrivateConnectivity {
  private_connection: string;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsOracleSsl {
  ca_certificate: string;
  client_certificate?: string;
  client_key?: string;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsOracleStaticServiceIpConnectivity {}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsOracle {
  database_service: string;
  host: string;
  password: string;
  port: number;
  username: string;
  forward_ssh_connectivity: GoogleDatabaseMigrationServiceConnectionProfileArgsOracleForwardSshConnectivity;
  private_connectivity: GoogleDatabaseMigrationServiceConnectionProfileArgsOraclePrivateConnectivity;
  ssl: GoogleDatabaseMigrationServiceConnectionProfileArgsOracleSsl;
  static_service_ip_connectivity: GoogleDatabaseMigrationServiceConnectionProfileArgsOracleStaticServiceIpConnectivity;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsPostgresqlSsl {
  ca_certificate: string;
  client_certificate?: string;
  client_key?: string;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsPostgresql {
  alloydb_cluster_id?: string;
  cloud_sql_id?: string;
  host?: string;
  password?: string;
  port?: number;
  username?: string;
  ssl: GoogleDatabaseMigrationServiceConnectionProfileArgsPostgresqlSsl;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgs {
  connection_profile_id: string;
  display_name?: string;
  labels?: {
    [key: string]: string;
  };
  location?: string;
  alloydb: GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydb;
  cloudsql: GoogleDatabaseMigrationServiceConnectionProfileArgsCloudsql;
  mysql: GoogleDatabaseMigrationServiceConnectionProfileArgsMysql;
  oracle: GoogleDatabaseMigrationServiceConnectionProfileArgsOracle;
  postgresql: GoogleDatabaseMigrationServiceConnectionProfileArgsPostgresql;
  timeouts?: GoogleDatabaseMigrationServiceConnectionProfileArgsTimeouts;
}
export class google_database_migration_service_connection_profile extends TerraformResource {
  readonly create_time!: string;
  readonly dbprovider!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly error!: any[];
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDatabaseMigrationServiceConnectionProfileArgs) {
    super(config, "resource", args, resourceName, "google_database_migration_service_connection_profile");
  }
}