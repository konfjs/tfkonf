import { TerraformConfig, TerraformResource } from "tfs";
export interface AccessRole {
  iam_role_id: string;
}
export interface Aws {
  access_role: AccessRole;
}
export interface Azure {
  customer_tenant_id: string;
  federated_application_client_id?: string;
}
export interface CloudResource {}
export interface CloudSpanner {
  database: string;
  database_role?: string;
  max_parallelism?: number;
  use_data_boost?: boolean;
  use_parallelism?: boolean;
  use_serverless_analytics?: boolean;
}
export interface Credential {
  password: string;
  username: string;
}
export interface CloudSql {
  database: string;
  instance_id: string;
  type: string;
  credential: Credential;
}
export interface MetastoreServiceConfig {
  metastore_service?: string;
}
export interface SparkHistoryServerConfig {
  dataproc_cluster?: string;
}
export interface Spark {
  metastore_service_config: MetastoreServiceConfig;
  spark_history_server_config: SparkHistoryServerConfig;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBigqueryConnectionArgs {
  description?: string;
  friendly_name?: string;
  kms_key_name?: string;
  location?: string;
  aws: Aws;
  azure: Azure;
  cloud_resource: CloudResource;
  cloud_spanner: CloudSpanner;
  cloud_sql: CloudSql;
  spark: Spark;
  timeouts: Timeouts;
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