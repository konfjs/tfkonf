import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataprocBatchArgsEnvironmentConfigExecutionConfig {
  kms_key?: string;
  network_tags?: string[];
  network_uri?: string;
  staging_bucket?: string;
  subnetwork_uri?: string;
}
export interface GoogleDataprocBatchArgsEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig {
  dataproc_cluster?: string;
}
export interface GoogleDataprocBatchArgsEnvironmentConfigPeripheralsConfig {
  metastore_service?: string;
  spark_history_server_config: GoogleDataprocBatchArgsEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig;
}
export interface GoogleDataprocBatchArgsEnvironmentConfig {
  execution_config: GoogleDataprocBatchArgsEnvironmentConfigExecutionConfig;
  peripherals_config: GoogleDataprocBatchArgsEnvironmentConfigPeripheralsConfig;
}
export interface GoogleDataprocBatchArgsPysparkBatch {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_python_file_uri?: string;
  python_file_uris?: string[];
}
export interface GoogleDataprocBatchArgsRuntimeConfig {
  container_image?: string;
  properties?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocBatchArgsSparkBatch {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_class?: string;
  main_jar_file_uri?: string;
}
export interface GoogleDataprocBatchArgsSparkRBatch {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  main_r_file_uri?: string;
}
export interface GoogleDataprocBatchArgsSparkSqlBatch {
  jar_file_uris?: string[];
  query_file_uri?: string;
  query_variables?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocBatchArgsTimeouts {
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
  environment_config: GoogleDataprocBatchArgsEnvironmentConfig;
  pyspark_batch: GoogleDataprocBatchArgsPysparkBatch;
  runtime_config: GoogleDataprocBatchArgsRuntimeConfig;
  spark_batch: GoogleDataprocBatchArgsSparkBatch;
  spark_r_batch: GoogleDataprocBatchArgsSparkRBatch;
  spark_sql_batch: GoogleDataprocBatchArgsSparkSqlBatch;
  timeouts: GoogleDataprocBatchArgsTimeouts;
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