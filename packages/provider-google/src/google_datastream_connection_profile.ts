import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDatastreamConnectionProfileArgsBigqueryProfile {
}

export interface GoogleDatastreamConnectionProfileArgsForwardSshConnectivity {
  hostname: string;
  password?: string;
  port?: number;
  private_key?: string;
  username: string;
}

export interface GoogleDatastreamConnectionProfileArgsGcsProfile {
  bucket: string;
  root_path?: string;
}

export interface GoogleDatastreamConnectionProfileArgsMysqlProfileSslConfig {
  ca_certificate?: string;
  client_certificate?: string;
  client_key?: string;
}

export interface GoogleDatastreamConnectionProfileArgsMysqlProfile {
  hostname: string;
  password: string;
  port?: number;
  username: string;
  ssl_config: GoogleDatastreamConnectionProfileArgsMysqlProfileSslConfig;
}

export interface GoogleDatastreamConnectionProfileArgsOracleProfile {
  connection_attributes?: { [key: string]: string };
  database_service: string;
  hostname: string;
  password: string;
  port?: number;
  username: string;
}

export interface GoogleDatastreamConnectionProfileArgsPostgresqlProfile {
  database: string;
  hostname: string;
  password: string;
  port?: number;
  username: string;
}

export interface GoogleDatastreamConnectionProfileArgsPrivateConnectivity {
  private_connection: string;
}

export interface GoogleDatastreamConnectionProfileArgsSqlServerProfile {
  database: string;
  hostname: string;
  password: string;
  port?: number;
  username: string;
}

export interface GoogleDatastreamConnectionProfileArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDatastreamConnectionProfileArgs {
  connection_profile_id: string;
  create_without_validation?: boolean;
  display_name: string;
  labels?: { [key: string]: string };
  location: string;
  bigquery_profile: GoogleDatastreamConnectionProfileArgsBigqueryProfile;
  forward_ssh_connectivity: GoogleDatastreamConnectionProfileArgsForwardSshConnectivity;
  gcs_profile: GoogleDatastreamConnectionProfileArgsGcsProfile;
  mysql_profile: GoogleDatastreamConnectionProfileArgsMysqlProfile;
  oracle_profile: GoogleDatastreamConnectionProfileArgsOracleProfile;
  postgresql_profile: GoogleDatastreamConnectionProfileArgsPostgresqlProfile;
  private_connectivity: GoogleDatastreamConnectionProfileArgsPrivateConnectivity;
  sql_server_profile: GoogleDatastreamConnectionProfileArgsSqlServerProfile;
  timeouts?: GoogleDatastreamConnectionProfileArgsTimeouts;
}

export class google_datastream_connection_profile extends TerraformResource {
  readonly effective_labels!: { [key: string]: string };
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDatastreamConnectionProfileArgs) {
    super(config, "resource", args, resourceName, "google_datastream_connection_profile");
  }
}
