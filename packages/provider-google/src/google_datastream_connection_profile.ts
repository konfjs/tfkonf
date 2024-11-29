import { TerraformConfig, TerraformResource } from "tfs";
export interface BigqueryProfile {}
export interface ForwardSshConnectivity {
  hostname: string;
  password?: string;
  port?: number;
  private_key?: string;
  username: string;
}
export interface GcsProfile {
  bucket: string;
  root_path?: string;
}
export interface SslConfig {
  ca_certificate?: string;
  client_certificate?: string;
  client_key?: string;
}
export interface MysqlProfile {
  hostname: string;
  password: string;
  port?: number;
  username: string;
  ssl_config: SslConfig;
}
export interface OracleProfile {
  connection_attributes?: {
    [key: string]: string;
  };
  database_service: string;
  hostname: string;
  password: string;
  port?: number;
  username: string;
}
export interface PostgresqlProfile {
  database: string;
  hostname: string;
  password: string;
  port?: number;
  username: string;
}
export interface PrivateConnectivity {
  private_connection: string;
}
export interface SqlServerProfile {
  database: string;
  hostname: string;
  password: string;
  port?: number;
  username: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDatastreamConnectionProfileArgs {
  connection_profile_id: string;
  create_without_validation?: boolean;
  display_name: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  bigquery_profile: BigqueryProfile;
  forward_ssh_connectivity: ForwardSshConnectivity;
  gcs_profile: GcsProfile;
  mysql_profile: MysqlProfile;
  oracle_profile: OracleProfile;
  postgresql_profile: PostgresqlProfile;
  private_connectivity: PrivateConnectivity;
  sql_server_profile: SqlServerProfile;
  timeouts: Timeouts;
}
export class google_datastream_connection_profile extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDatastreamConnectionProfileArgs) {
    super(config, "resource", args, resourceName, "google_datastream_connection_profile");
  }
}