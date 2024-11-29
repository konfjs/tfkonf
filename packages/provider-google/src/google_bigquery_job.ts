import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBigqueryJobArgscopyDestinationEncryptionConfiguration {
  kms_key_name: string;
}
export interface GoogleBigqueryJobArgscopyDestinationTable {
  table_id: string;
}
export interface GoogleBigqueryJobArgscopySourceTables {
  table_id: string;
}
export interface GoogleBigqueryJobArgscopy {
  create_disposition?: string;
  write_disposition?: string;
  destination_encryption_configuration: GoogleBigqueryJobArgscopyDestinationEncryptionConfiguration;
  destination_table: GoogleBigqueryJobArgscopyDestinationTable;
  source_tables: GoogleBigqueryJobArgscopySourceTables;
}
export interface GoogleBigqueryJobArgsextractSourceModel {
  dataset_id: string;
  model_id: string;
  project_id: string;
}
export interface GoogleBigqueryJobArgsextractSourceTable {
  table_id: string;
}
export interface GoogleBigqueryJobArgsextract {
  compression?: string;
  destination_uris: string[];
  print_header?: boolean;
  use_avro_logical_types?: boolean;
  source_model: GoogleBigqueryJobArgsextractSourceModel;
  source_table: GoogleBigqueryJobArgsextractSourceTable;
}
export interface GoogleBigqueryJobArgsloadDestinationEncryptionConfiguration {
  kms_key_name: string;
}
export interface GoogleBigqueryJobArgsloadDestinationTable {
  table_id: string;
}
export interface GoogleBigqueryJobArgsloadParquetOptions {
  enable_list_inference?: boolean;
  enum_as_string?: boolean;
}
export interface GoogleBigqueryJobArgsloadTimePartitioning {
  expiration_ms?: string;
  field?: string;
  type: string;
}
export interface GoogleBigqueryJobArgsload {
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
  destination_encryption_configuration: GoogleBigqueryJobArgsloadDestinationEncryptionConfiguration;
  destination_table: GoogleBigqueryJobArgsloadDestinationTable;
  parquet_options: GoogleBigqueryJobArgsloadParquetOptions;
  time_partitioning: GoogleBigqueryJobArgsloadTimePartitioning;
}
export interface GoogleBigqueryJobArgsqueryDefaultDataset {
  dataset_id: string;
}
export interface GoogleBigqueryJobArgsqueryDestinationEncryptionConfiguration {
  kms_key_name: string;
}
export interface GoogleBigqueryJobArgsqueryDestinationTable {
  table_id: string;
}
export interface GoogleBigqueryJobArgsqueryScriptOptions {
  key_result_statement?: string;
  statement_byte_budget?: string;
  statement_timeout_ms?: string;
}
export interface GoogleBigqueryJobArgsqueryUserDefinedFunctionResources {
  inline_code?: string;
  resource_uri?: string;
}
export interface GoogleBigqueryJobArgsquery {
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
  default_dataset: GoogleBigqueryJobArgsqueryDefaultDataset;
  destination_encryption_configuration: GoogleBigqueryJobArgsqueryDestinationEncryptionConfiguration;
  destination_table: GoogleBigqueryJobArgsqueryDestinationTable;
  script_options: GoogleBigqueryJobArgsqueryScriptOptions;
  user_defined_function_resources: GoogleBigqueryJobArgsqueryUserDefinedFunctionResources;
}
export interface GoogleBigqueryJobArgstimeouts {
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
  copy: GoogleBigqueryJobArgscopy;
  extract: GoogleBigqueryJobArgsextract;
  load: GoogleBigqueryJobArgsload;
  query: GoogleBigqueryJobArgsquery;
  timeouts: GoogleBigqueryJobArgstimeouts;
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