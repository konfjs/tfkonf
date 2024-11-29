import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsalloydbsettingsInitialUser {
  password: string;
  user: string;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsalloydbsettingsPrimaryInstanceSettingsMachineConfig {
  cpu_count: number;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsalloydbsettingsPrimaryInstanceSettings {
  database_flags?: {
    [key: string]: string;
  };
  id: string;
  labels?: {
    [key: string]: string;
  };
  machine_config: GoogleDatabaseMigrationServiceConnectionProfileArgsalloydbsettingsPrimaryInstanceSettingsMachineConfig;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsalloydbsettings {
  labels?: {
    [key: string]: string;
  };
  vpc_network: string;
  initial_user: GoogleDatabaseMigrationServiceConnectionProfileArgsalloydbsettingsInitialUser;
  primary_instance_settings: GoogleDatabaseMigrationServiceConnectionProfileArgsalloydbsettingsPrimaryInstanceSettings;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsalloydb {
  cluster_id: string;
  settings: GoogleDatabaseMigrationServiceConnectionProfileArgsalloydbsettings;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgscloudsqlsettingsIpConfigAuthorizedNetworks {
  expire_time?: string;
  label?: string;
  ttl?: string;
  value: string;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgscloudsqlsettingsIpConfig {
  enable_ipv4?: boolean;
  private_network?: string;
  require_ssl?: boolean;
  authorized_networks: GoogleDatabaseMigrationServiceConnectionProfileArgscloudsqlsettingsIpConfigAuthorizedNetworks;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgscloudsqlsettings {
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
  ip_config: GoogleDatabaseMigrationServiceConnectionProfileArgscloudsqlsettingsIpConfig;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgscloudsql {
  settings: GoogleDatabaseMigrationServiceConnectionProfileArgscloudsqlsettings;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsmysqlssl {
  ca_certificate: string;
  client_certificate?: string;
  client_key?: string;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsmysql {
  cloud_sql_id?: string;
  host?: string;
  password?: string;
  port?: number;
  username?: string;
  ssl: GoogleDatabaseMigrationServiceConnectionProfileArgsmysqlssl;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsoracleForwardSshConnectivity {
  hostname: string;
  password?: string;
  port: number;
  private_key?: string;
  username: string;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsoraclePrivateConnectivity {
  private_connection: string;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsoraclessl {
  ca_certificate: string;
  client_certificate?: string;
  client_key?: string;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsoracleStaticServiceIpConnectivity {}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgsoracle {
  database_service: string;
  host: string;
  password: string;
  port: number;
  username: string;
  forward_ssh_connectivity: GoogleDatabaseMigrationServiceConnectionProfileArgsoracleForwardSshConnectivity;
  private_connectivity: GoogleDatabaseMigrationServiceConnectionProfileArgsoraclePrivateConnectivity;
  ssl: GoogleDatabaseMigrationServiceConnectionProfileArgsoraclessl;
  static_service_ip_connectivity: GoogleDatabaseMigrationServiceConnectionProfileArgsoracleStaticServiceIpConnectivity;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgspostgresqlssl {
  ca_certificate: string;
  client_certificate?: string;
  client_key?: string;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgspostgresql {
  alloydb_cluster_id?: string;
  cloud_sql_id?: string;
  host?: string;
  password?: string;
  port?: number;
  username?: string;
  ssl: GoogleDatabaseMigrationServiceConnectionProfileArgspostgresqlssl;
}
export interface GoogleDatabaseMigrationServiceConnectionProfileArgstimeouts {
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
  alloydb: GoogleDatabaseMigrationServiceConnectionProfileArgsalloydb;
  cloudsql: GoogleDatabaseMigrationServiceConnectionProfileArgscloudsql;
  mysql: GoogleDatabaseMigrationServiceConnectionProfileArgsmysql;
  oracle: GoogleDatabaseMigrationServiceConnectionProfileArgsoracle;
  postgresql: GoogleDatabaseMigrationServiceConnectionProfileArgspostgresql;
  timeouts: GoogleDatabaseMigrationServiceConnectionProfileArgstimeouts;
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