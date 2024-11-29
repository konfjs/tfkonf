import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBigqueryConnectionArgsAwsAccessRole {
  iam_role_id: string;
}
export interface GoogleBigqueryConnectionArgsAws {
  access_role: GoogleBigqueryConnectionArgsAwsAccessRole;
}
export interface GoogleBigqueryConnectionArgsAzure {
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
export interface GoogleBigqueryConnectionArgsCloudSqlCredential {
  password: string;
  username: string;
}
export interface GoogleBigqueryConnectionArgsCloudSql {
  database: string;
  instance_id: string;
  type: string;
  credential: GoogleBigqueryConnectionArgsCloudSqlCredential;
}
export interface GoogleBigqueryConnectionArgsSparkMetastoreServiceConfig {
  metastore_service?: string;
}
export interface GoogleBigqueryConnectionArgsSparkSparkHistoryServerConfig {
  dataproc_cluster?: string;
}
export interface GoogleBigqueryConnectionArgsSpark {
  metastore_service_config: GoogleBigqueryConnectionArgsSparkMetastoreServiceConfig;
  spark_history_server_config: GoogleBigqueryConnectionArgsSparkSparkHistoryServerConfig;
}
export interface GoogleBigqueryConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBigqueryConnectionArgs {
  description?: string;
  friendly_name?: string;
  kms_key_name?: string;
  location?: string;
  aws: GoogleBigqueryConnectionArgsAws;
  azure: GoogleBigqueryConnectionArgsAzure;
  cloud_resource: GoogleBigqueryConnectionArgsCloudResource;
  cloud_spanner: GoogleBigqueryConnectionArgsCloudSpanner;
  cloud_sql: GoogleBigqueryConnectionArgsCloudSql;
  spark: GoogleBigqueryConnectionArgsSpark;
  timeouts: GoogleBigqueryConnectionArgsTimeouts;
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