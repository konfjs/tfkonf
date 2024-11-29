import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBigqueryConnectionArgsawsAccessRole {
  iam_role_id: string;
}
export interface GoogleBigqueryConnectionArgsaws {
  access_role: GoogleBigqueryConnectionArgsawsAccessRole;
}
export interface GoogleBigqueryConnectionArgsazure {
  customer_tenant_id: string;
  federated_application_client_id?: string;
}
export interface GoogleBigqueryConnectionArgsCloudResource {}
export interface GoogleBigqueryConnectionArgsCloudSpanner {
  database: string;
  database_role?: string;
  max_parallelism?: number;
  use_data_boost?: boolean;
  use_parallelism?: boolean;
  use_serverless_analytics?: boolean;
}
export interface GoogleBigqueryConnectionArgsCloudSqlcredential {
  password: string;
  username: string;
}
export interface GoogleBigqueryConnectionArgsCloudSql {
  database: string;
  instance_id: string;
  type: string;
  credential: GoogleBigqueryConnectionArgsCloudSqlcredential;
}
export interface GoogleBigqueryConnectionArgssparkMetastoreServiceConfig {
  metastore_service?: string;
}
export interface GoogleBigqueryConnectionArgssparkSparkHistoryServerConfig {
  dataproc_cluster?: string;
}
export interface GoogleBigqueryConnectionArgsspark {
  metastore_service_config: GoogleBigqueryConnectionArgssparkMetastoreServiceConfig;
  spark_history_server_config: GoogleBigqueryConnectionArgssparkSparkHistoryServerConfig;
}
export interface GoogleBigqueryConnectionArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBigqueryConnectionArgs {
  description?: string;
  friendly_name?: string;
  kms_key_name?: string;
  location?: string;
  aws: GoogleBigqueryConnectionArgsaws;
  azure: GoogleBigqueryConnectionArgsazure;
  cloud_resource: GoogleBigqueryConnectionArgsCloudResource;
  cloud_spanner: GoogleBigqueryConnectionArgsCloudSpanner;
  cloud_sql: GoogleBigqueryConnectionArgsCloudSql;
  spark: GoogleBigqueryConnectionArgsspark;
  timeouts: GoogleBigqueryConnectionArgstimeouts;
}
export class google_bigquery_connection extends TerraformResource {
  readonly connection_id?: string;
  readonly has_credential!: boolean;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryConnectionArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_connection");
  }
}