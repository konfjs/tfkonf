import { TerraformConfig, TerraformResource } from "tfs";
export interface InitialUser {
  password: string;
  user: string;
}
export interface MachineConfig {
  cpu_count: number;
}
export interface PrimaryInstanceSettings {
  database_flags?: {
    [key: string]: string;
  };
  id: string;
  labels?: {
    [key: string]: string;
  };
  machine_config: MachineConfig;
}
export interface Settings {
  labels?: {
    [key: string]: string;
  };
  vpc_network: string;
  initial_user: InitialUser;
  primary_instance_settings: PrimaryInstanceSettings;
}
export interface Alloydb {
  cluster_id: string;
  settings: Settings;
}
export interface AuthorizedNetworks {
  expire_time?: string;
  label?: string;
  ttl?: string;
  value: string;
}
export interface IpConfig {
  enable_ipv4?: boolean;
  private_network?: string;
  require_ssl?: boolean;
  authorized_networks: AuthorizedNetworks;
}
export interface Settings {
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
  ip_config: IpConfig;
}
export interface Cloudsql {
  settings: Settings;
}
export interface Ssl {
  ca_certificate: string;
  client_certificate?: string;
  client_key?: string;
}
export interface Mysql {
  cloud_sql_id?: string;
  host?: string;
  password?: string;
  port?: number;
  username?: string;
  ssl: Ssl;
}
export interface ForwardSshConnectivity {
  hostname: string;
  password?: string;
  port: number;
  private_key?: string;
  username: string;
}
export interface PrivateConnectivity {
  private_connection: string;
}
export interface Ssl {
  ca_certificate: string;
  client_certificate?: string;
  client_key?: string;
}
export interface StaticServiceIpConnectivity {}
export interface Oracle {
  database_service: string;
  host: string;
  password: string;
  port: number;
  username: string;
  forward_ssh_connectivity: ForwardSshConnectivity;
  private_connectivity: PrivateConnectivity;
  ssl: Ssl;
  static_service_ip_connectivity: StaticServiceIpConnectivity;
}
export interface Ssl {
  ca_certificate: string;
  client_certificate?: string;
  client_key?: string;
}
export interface Postgresql {
  alloydb_cluster_id?: string;
  cloud_sql_id?: string;
  host?: string;
  password?: string;
  port?: number;
  username?: string;
  ssl: Ssl;
}
export interface Timeouts {
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
  alloydb: Alloydb;
  cloudsql: Cloudsql;
  mysql: Mysql;
  oracle: Oracle;
  postgresql: Postgresql;
  timeouts: Timeouts;
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