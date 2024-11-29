import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsQuicksightDataSourceArgscredentialsCredentialPair {
  password: string;
  username: string;
}
export interface AwsQuicksightDataSourceArgscredentials {
  copy_source_arn?: string;
  secret_arn?: string;
  credential_pair: AwsQuicksightDataSourceArgscredentialsCredentialPair;
}
export interface AwsQuicksightDataSourceArgsparametersAmazonElasticsearch {
  domain: string;
}
export interface AwsQuicksightDataSourceArgsparametersathena {
  work_group?: string;
}
export interface AwsQuicksightDataSourceArgsparametersaurora {
  database: string;
  host: string;
  port: number;
}
export interface AwsQuicksightDataSourceArgsparametersAuroraPostgresql {
  database: string;
  host: string;
  port: number;
}
export interface AwsQuicksightDataSourceArgsparametersAwsIotAnalytics {
  data_set_name: string;
}
export interface AwsQuicksightDataSourceArgsparametersdatabricks {
  host: string;
  port: number;
  sql_endpoint_path: string;
}
export interface AwsQuicksightDataSourceArgsparametersjira {
  site_base_url: string;
}
export interface AwsQuicksightDataSourceArgsparametersMariaDb {
  database: string;
  host: string;
  port: number;
}
export interface AwsQuicksightDataSourceArgsparametersmysql {
  database: string;
  host: string;
  port: number;
}
export interface AwsQuicksightDataSourceArgsparametersoracle {
  database: string;
  host: string;
  port: number;
}
export interface AwsQuicksightDataSourceArgsparameterspostgresql {
  database: string;
  host: string;
  port: number;
}
export interface AwsQuicksightDataSourceArgsparameterspresto {
  catalog: string;
  host: string;
  port: number;
}
export interface AwsQuicksightDataSourceArgsparametersrds {
  database: string;
  instance_id: string;
}
export interface AwsQuicksightDataSourceArgsparametersredshift {
  cluster_id?: string;
  database: string;
  host?: string;
  port?: number;
}
export interface AwsQuicksightDataSourceArgsparameterss3ManifestFileLocation {
  bucket: string;
  key: string;
}
export interface AwsQuicksightDataSourceArgsparameterss3 {
  manifest_file_location: AwsQuicksightDataSourceArgsparameterss3ManifestFileLocation;
}
export interface AwsQuicksightDataSourceArgsparametersServiceNow {
  site_base_url: string;
}
export interface AwsQuicksightDataSourceArgsparameterssnowflake {
  database: string;
  host: string;
  warehouse: string;
}
export interface AwsQuicksightDataSourceArgsparametersspark {
  host: string;
  port: number;
}
export interface AwsQuicksightDataSourceArgsparametersSqlServer {
  database: string;
  host: string;
  port: number;
}
export interface AwsQuicksightDataSourceArgsparametersteradata {
  database: string;
  host: string;
  port: number;
}
export interface AwsQuicksightDataSourceArgsparameterstwitter {
  max_rows: number;
  query: string;
}
export interface AwsQuicksightDataSourceArgsparameters {
  amazon_elasticsearch: AwsQuicksightDataSourceArgsparametersAmazonElasticsearch;
  athena: AwsQuicksightDataSourceArgsparametersathena;
  aurora: AwsQuicksightDataSourceArgsparametersaurora;
  aurora_postgresql: AwsQuicksightDataSourceArgsparametersAuroraPostgresql;
  aws_iot_analytics: AwsQuicksightDataSourceArgsparametersAwsIotAnalytics;
  databricks: AwsQuicksightDataSourceArgsparametersdatabricks;
  jira: AwsQuicksightDataSourceArgsparametersjira;
  maria_db: AwsQuicksightDataSourceArgsparametersMariaDb;
  mysql: AwsQuicksightDataSourceArgsparametersmysql;
  oracle: AwsQuicksightDataSourceArgsparametersoracle;
  postgresql: AwsQuicksightDataSourceArgsparameterspostgresql;
  presto: AwsQuicksightDataSourceArgsparameterspresto;
  rds: AwsQuicksightDataSourceArgsparametersrds;
  redshift: AwsQuicksightDataSourceArgsparametersredshift;
  s3: AwsQuicksightDataSourceArgsparameterss3;
  service_now: AwsQuicksightDataSourceArgsparametersServiceNow;
  snowflake: AwsQuicksightDataSourceArgsparameterssnowflake;
  spark: AwsQuicksightDataSourceArgsparametersspark;
  sql_server: AwsQuicksightDataSourceArgsparametersSqlServer;
  teradata: AwsQuicksightDataSourceArgsparametersteradata;
  twitter: AwsQuicksightDataSourceArgsparameterstwitter;
}
export interface AwsQuicksightDataSourceArgspermission {
  actions: string[];
  principal: string;
}
export interface AwsQuicksightDataSourceArgsSslProperties {
  disable_ssl: boolean;
}
export interface AwsQuicksightDataSourceArgsVpcConnectionProperties {
  vpc_connection_arn: string;
}
export interface AwsQuicksightDataSourceArgs {
  data_source_id: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  type: string;
  credentials: AwsQuicksightDataSourceArgscredentials;
  parameters: AwsQuicksightDataSourceArgsparameters;
  permission: AwsQuicksightDataSourceArgspermission;
  ssl_properties: AwsQuicksightDataSourceArgsSslProperties;
  vpc_connection_properties: AwsQuicksightDataSourceArgsVpcConnectionProperties;
}
export class aws_quicksight_data_source extends TerraformResource {
  readonly arn!: string;
  readonly aws_account_id?: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsQuicksightDataSourceArgs) {
    super(config, "resource", args, resourceName, "aws_quicksight_data_source");
  }
}