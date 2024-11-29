import { TerraformConfig, TerraformResource } from "tfs";
export interface ExecutionConfig {
  kms_key?: string;
  network_tags?: string[];
  network_uri?: string;
  staging_bucket?: string;
  subnetwork_uri?: string;
}
export interface SparkHistoryServerConfig {
  dataproc_cluster?: string;
}
export interface PeripheralsConfig {
  metastore_service?: string;
  spark_history_server_config: SparkHistoryServerConfig;
}
export interface EnvironmentConfig {
  execution_config: ExecutionConfig;
  peripherals_config: PeripheralsConfig;
}
export interface PysparkBatch {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_python_file_uri?: string;
  python_file_uris?: string[];
}
export interface RuntimeConfig {
  container_image?: string;
  properties?: {
    [key: string]: string;
  };
}
export interface SparkBatch {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_class?: string;
  main_jar_file_uri?: string;
}
export interface SparkRBatch {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  main_r_file_uri?: string;
}
export interface SparkSqlBatch {
  jar_file_uris?: string[];
  query_file_uri?: string;
  query_variables?: {
    [key: string]: string;
  };
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataprocBatchArgs {
  batch_id?: string;
  labels?: {
    [key: string]: string;
  };
  location?: string;
  environment_config: EnvironmentConfig;
  pyspark_batch: PysparkBatch;
  runtime_config: RuntimeConfig;
  spark_batch: SparkBatch;
  spark_r_batch: SparkRBatch;
  spark_sql_batch: SparkSqlBatch;
  timeouts: Timeouts;
}
export class google_dataproc_batch extends TerraformResource {
  readonly create_time!: string;
  readonly creator!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly operation!: string;
  readonly project?: string;
  readonly runtime_info!: any[];
  readonly state!: string;
  readonly state_history!: any[];
  readonly state_message!: string;
  readonly state_time!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uuid!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocBatchArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_batch");
  }
}