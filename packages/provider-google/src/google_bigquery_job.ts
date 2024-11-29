import { TerraformConfig, TerraformResource } from "tfs";
export interface DestinationEncryptionConfiguration {
  kms_key_name: string;
}
export interface DestinationTable {
  table_id: string;
}
export interface SourceTables {
  table_id: string;
}
export interface Copy {
  create_disposition?: string;
  write_disposition?: string;
  destination_encryption_configuration: DestinationEncryptionConfiguration;
  destination_table: DestinationTable;
  source_tables: SourceTables;
}
export interface SourceModel {
  dataset_id: string;
  model_id: string;
  project_id: string;
}
export interface SourceTable {
  table_id: string;
}
export interface Extract {
  compression?: string;
  destination_uris: string[];
  print_header?: boolean;
  use_avro_logical_types?: boolean;
  source_model: SourceModel;
  source_table: SourceTable;
}
export interface DestinationEncryptionConfiguration {
  kms_key_name: string;
}
export interface DestinationTable {
  table_id: string;
}
export interface ParquetOptions {
  enable_list_inference?: boolean;
  enum_as_string?: boolean;
}
export interface TimePartitioning {
  expiration_ms?: string;
  field?: string;
  type: string;
}
export interface Load {
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
  destination_encryption_configuration: DestinationEncryptionConfiguration;
  destination_table: DestinationTable;
  parquet_options: ParquetOptions;
  time_partitioning: TimePartitioning;
}
export interface DefaultDataset {
  dataset_id: string;
}
export interface DestinationEncryptionConfiguration {
  kms_key_name: string;
}
export interface DestinationTable {
  table_id: string;
}
export interface ScriptOptions {
  key_result_statement?: string;
  statement_byte_budget?: string;
  statement_timeout_ms?: string;
}
export interface UserDefinedFunctionResources {
  inline_code?: string;
  resource_uri?: string;
}
export interface Query {
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
  default_dataset: DefaultDataset;
  destination_encryption_configuration: DestinationEncryptionConfiguration;
  destination_table: DestinationTable;
  script_options: ScriptOptions;
  user_defined_function_resources: UserDefinedFunctionResources;
}
export interface Timeouts {
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
  copy: Copy;
  extract: Extract;
  load: Load;
  query: Query;
  timeouts: Timeouts;
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