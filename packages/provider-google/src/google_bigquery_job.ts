import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleBigqueryJobArgsCopyDestinationEncryptionConfiguration {
  kms_key_name: string;
}
export interface GoogleBigqueryJobArgsCopyDestinationTable {
  table_id: string;
}
export interface GoogleBigqueryJobArgsCopySourceTables {
  table_id: string;
}
export interface GoogleBigqueryJobArgsCopy {
  create_disposition?: string;
  write_disposition?: string;
  destination_encryption_configuration: GoogleBigqueryJobArgsCopyDestinationEncryptionConfiguration;
  destination_table: GoogleBigqueryJobArgsCopyDestinationTable;
  source_tables: GoogleBigqueryJobArgsCopySourceTables;
}
export interface GoogleBigqueryJobArgsExtractSourceModel {
  dataset_id: string;
  model_id: string;
  project_id: string;
}
export interface GoogleBigqueryJobArgsExtractSourceTable {
  table_id: string;
}
export interface GoogleBigqueryJobArgsExtract {
  compression?: string;
  destination_uris: string[];
  print_header?: boolean;
  use_avro_logical_types?: boolean;
  source_model: GoogleBigqueryJobArgsExtractSourceModel;
  source_table: GoogleBigqueryJobArgsExtractSourceTable;
}
export interface GoogleBigqueryJobArgsLoadDestinationEncryptionConfiguration {
  kms_key_name: string;
}
export interface GoogleBigqueryJobArgsLoadDestinationTable {
  table_id: string;
}
export interface GoogleBigqueryJobArgsLoadParquetOptions {
  enable_list_inference?: boolean;
  enum_as_string?: boolean;
}
export interface GoogleBigqueryJobArgsLoadTimePartitioning {
  expiration_ms?: string;
  field?: string;
  type: string;
}
export interface GoogleBigqueryJobArgsLoad {
  allow_jagged_rows?: boolean;
  allow_quoted_newlines?: boolean;
  autodetect?: boolean;
  create_disposition?: string;
  encoding?: string;
  ignore_unknown_values?: boolean;
  json_extension?: string;
  max_bad_records?: number;
  null_marker?: string;
  projection_fields?: string[];
  schema_update_options?: string[];
  skip_leading_rows?: number;
  source_format?: string;
  source_uris: string[];
  write_disposition?: string;
  destination_encryption_configuration: GoogleBigqueryJobArgsLoadDestinationEncryptionConfiguration;
  destination_table: GoogleBigqueryJobArgsLoadDestinationTable;
  parquet_options: GoogleBigqueryJobArgsLoadParquetOptions;
  time_partitioning: GoogleBigqueryJobArgsLoadTimePartitioning;
}
export interface GoogleBigqueryJobArgsQueryDefaultDataset {
  dataset_id: string;
}
export interface GoogleBigqueryJobArgsQueryDestinationEncryptionConfiguration {
  kms_key_name: string;
}
export interface GoogleBigqueryJobArgsQueryDestinationTable {
  table_id: string;
}
export interface GoogleBigqueryJobArgsQueryScriptOptions {
  key_result_statement?: string;
  statement_byte_budget?: string;
  statement_timeout_ms?: string;
}
export interface GoogleBigqueryJobArgsQueryUserDefinedFunctionResources {
  inline_code?: string;
  resource_uri?: string;
}
export interface GoogleBigqueryJobArgsQuery {
  allow_large_results?: boolean;
  create_disposition?: string;
  flatten_results?: boolean;
  maximum_billing_tier?: number;
  maximum_bytes_billed?: string;
  parameter_mode?: string;
  priority?: string;
  query: string;
  schema_update_options?: string[];
  use_legacy_sql?: boolean;
  use_query_cache?: boolean;
  write_disposition?: string;
  default_dataset: GoogleBigqueryJobArgsQueryDefaultDataset;
  destination_encryption_configuration: GoogleBigqueryJobArgsQueryDestinationEncryptionConfiguration;
  destination_table: GoogleBigqueryJobArgsQueryDestinationTable;
  script_options: GoogleBigqueryJobArgsQueryScriptOptions;
  user_defined_function_resources: GoogleBigqueryJobArgsQueryUserDefinedFunctionResources;
}
export interface GoogleBigqueryJobArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBigqueryJobArgs {
  job_id: string;
  job_timeout_ms?: string;
  labels?: {
    [key: string]: string;
  };
  location?: string;
  copy: GoogleBigqueryJobArgsCopy;
  extract: GoogleBigqueryJobArgsExtract;
  load: GoogleBigqueryJobArgsLoad;
  query: GoogleBigqueryJobArgsQuery;
  timeouts?: GoogleBigqueryJobArgsTimeouts;
}
export class google_bigquery_job extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly job_type!: string;
  readonly project?: string;
  readonly status!: any[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly user_email!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryJobArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_job");
  }
}