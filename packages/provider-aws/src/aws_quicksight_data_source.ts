import { TerraformConfig, TerraformResource } from "tfs";
export interface CredentialPair {
  password: string;
  username: string;
}
export interface Credentials {
  copy_source_arn?: string;
  secret_arn?: string;
  credential_pair: CredentialPair;
}
export interface AmazonElasticsearch {
  domain: string;
}
export interface Athena {
  work_group?: string;
}
export interface Aurora {
  database: string;
  host: string;
  port: number;
}
export interface AuroraPostgresql {
  database: string;
  host: string;
  port: number;
}
export interface AwsIotAnalytics {
  data_set_name: string;
}
export interface Databricks {
  host: string;
  port: number;
  sql_endpoint_path: string;
}
export interface Jira {
  site_base_url: string;
}
export interface MariaDb {
  database: string;
  host: string;
  port: number;
}
export interface Mysql {
  database: string;
  host: string;
  port: number;
}
export interface Oracle {
  database: string;
  host: string;
  port: number;
}
export interface Postgresql {
  database: string;
  host: string;
  port: number;
}
export interface Presto {
  catalog: string;
  host: string;
  port: number;
}
export interface Rds {
  database: string;
  instance_id: string;
}
export interface Redshift {
  cluster_id?: string;
  database: string;
  host?: string;
  port?: number;
}
export interface ManifestFileLocation {
  bucket: string;
  key: string;
}
export interface S3 {
  manifest_file_location: ManifestFileLocation;
}
export interface ServiceNow {
  site_base_url: string;
}
export interface Snowflake {
  database: string;
  host: string;
  warehouse: string;
}
export interface Spark {
  host: string;
  port: number;
}
export interface SqlServer {
  database: string;
  host: string;
  port: number;
}
export interface Teradata {
  database: string;
  host: string;
  port: number;
}
export interface Twitter {
  max_rows: number;
  query: string;
}
export interface Parameters {
  amazon_elasticsearch: AmazonElasticsearch;
  athena: Athena;
  aurora: Aurora;
  aurora_postgresql: AuroraPostgresql;
  aws_iot_analytics: AwsIotAnalytics;
  databricks: Databricks;
  jira: Jira;
  maria_db: MariaDb;
  mysql: Mysql;
  oracle: Oracle;
  postgresql: Postgresql;
  presto: Presto;
  rds: Rds;
  redshift: Redshift;
  s3: S3;
  service_now: ServiceNow;
  snowflake: Snowflake;
  spark: Spark;
  sql_server: SqlServer;
  teradata: Teradata;
  twitter: Twitter;
}
export interface Permission {
  actions: string[];
  principal: string;
}
export interface SslProperties {
  disable_ssl: boolean;
}
export interface VpcConnectionProperties {
  vpc_connection_arn: string;
}
export interface AwsQuicksightDataSourceArgs {
  data_source_id: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  type: string;
  credentials: Credentials;
  parameters: Parameters;
  permission: Permission;
  ssl_properties: SslProperties;
  vpc_connection_properties: VpcConnectionProperties;
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