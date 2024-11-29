import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleBigqueryTableArgsBiglakeConfiguration {
  connection_id: string;
  file_format: string;
  storage_uri: string;
  table_format: string;
}
export interface GoogleBigqueryTableArgsEncryptionConfiguration {
  kms_key_name: string;
}
export interface GoogleBigqueryTableArgsExternalDataConfigurationAvroOptions {
  use_avro_logical_types: boolean;
}
export interface GoogleBigqueryTableArgsExternalDataConfigurationBigtableOptionsColumnFamilyColumn {
  encoding?: string;
  field_name?: string;
  only_read_latest?: boolean;
  qualifier_encoded?: string;
  qualifier_string?: string;
  type?: string;
}
export interface GoogleBigqueryTableArgsExternalDataConfigurationBigtableOptionsColumnFamily {
  encoding?: string;
  family_id?: string;
  only_read_latest?: boolean;
  type?: string;
  column: GoogleBigqueryTableArgsExternalDataConfigurationBigtableOptionsColumnFamilyColumn;
}
export interface GoogleBigqueryTableArgsExternalDataConfigurationBigtableOptions {
  ignore_unspecified_column_families?: boolean;
  output_column_families_as_json?: boolean;
  read_rowkey_as_string?: boolean;
  column_family: GoogleBigqueryTableArgsExternalDataConfigurationBigtableOptionsColumnFamily;
}
export interface GoogleBigqueryTableArgsExternalDataConfigurationCsvOptions {
  allow_jagged_rows?: boolean;
  allow_quoted_newlines?: boolean;
  encoding?: string;
  field_delimiter?: string;
  quote: string;
  skip_leading_rows?: number;
}
export interface GoogleBigqueryTableArgsExternalDataConfigurationGoogleSheetsOptions {
  range?: string;
  skip_leading_rows?: number;
}
export interface GoogleBigqueryTableArgsExternalDataConfigurationHivePartitioningOptions {
  mode?: string;
  require_partition_filter?: boolean;
  source_uri_prefix?: string;
}
export interface GoogleBigqueryTableArgsExternalDataConfigurationJsonOptions {
  encoding?: string;
}
export interface GoogleBigqueryTableArgsExternalDataConfigurationParquetOptions {
  enable_list_inference?: boolean;
  enum_as_string?: boolean;
}
export interface GoogleBigqueryTableArgsExternalDataConfiguration {
  autodetect: boolean;
  compression?: string;
  connection_id?: string;
  file_set_spec_type?: string;
  ignore_unknown_values?: boolean;
  json_extension?: string;
  max_bad_records?: number;
  metadata_cache_mode?: string;
  object_metadata?: string;
  reference_file_schema_uri?: string;
  source_format?: string;
  source_uris: string[];
  avro_options: GoogleBigqueryTableArgsExternalDataConfigurationAvroOptions;
  bigtable_options: GoogleBigqueryTableArgsExternalDataConfigurationBigtableOptions;
  csv_options: GoogleBigqueryTableArgsExternalDataConfigurationCsvOptions;
  google_sheets_options: GoogleBigqueryTableArgsExternalDataConfigurationGoogleSheetsOptions;
  hive_partitioning_options: GoogleBigqueryTableArgsExternalDataConfigurationHivePartitioningOptions;
  json_options: GoogleBigqueryTableArgsExternalDataConfigurationJsonOptions;
  parquet_options: GoogleBigqueryTableArgsExternalDataConfigurationParquetOptions;
}
export interface GoogleBigqueryTableArgsMaterializedView {
  allow_non_incremental_definition?: boolean;
  enable_refresh?: boolean;
  query: string;
  refresh_interval_ms?: number;
}
export interface GoogleBigqueryTableArgsRangePartitioningRange {
  end: number;
  interval: number;
  start: number;
}
export interface GoogleBigqueryTableArgsRangePartitioning {
  field: string;
  range: GoogleBigqueryTableArgsRangePartitioningRange;
}
export interface GoogleBigqueryTableArgsTableConstraintsForeignKeysColumnReferences {
  referenced_column: string;
  referencing_column: string;
}
export interface GoogleBigqueryTableArgsTableConstraintsForeignKeysReferencedTable {
  dataset_id: string;
  project_id: string;
  table_id: string;
}
export interface GoogleBigqueryTableArgsTableConstraintsForeignKeys {
  name?: string;
  column_references: GoogleBigqueryTableArgsTableConstraintsForeignKeysColumnReferences;
  referenced_table: GoogleBigqueryTableArgsTableConstraintsForeignKeysReferencedTable;
}
export interface GoogleBigqueryTableArgsTableConstraintsPrimaryKey {
  columns: string[];
}
export interface GoogleBigqueryTableArgsTableConstraints {
  foreign_keys: GoogleBigqueryTableArgsTableConstraintsForeignKeys;
  primary_key: GoogleBigqueryTableArgsTableConstraintsPrimaryKey;
}
export interface GoogleBigqueryTableArgsTableReplicationInfo {
  replication_interval_ms?: number;
  source_dataset_id: string;
  source_project_id: string;
  source_table_id: string;
}
export interface GoogleBigqueryTableArgsTimePartitioning {
  field?: string;
  require_partition_filter?: boolean;
  type: string;
}
export interface GoogleBigqueryTableArgsView {
  query: string;
  use_legacy_sql?: boolean;
}
export interface GoogleBigqueryTableArgs {
  clustering?: string[];
  dataset_id: string;
  deletion_protection?: boolean;
  description?: string;
  friendly_name?: string;
  labels?: {
    [key: string]: string;
  };
  max_staleness?: string;
  require_partition_filter?: boolean;
  resource_tags?: {
    [key: string]: string;
  };
  table_id: string;
  biglake_configuration: GoogleBigqueryTableArgsBiglakeConfiguration;
  encryption_configuration: GoogleBigqueryTableArgsEncryptionConfiguration;
  external_data_configuration: GoogleBigqueryTableArgsExternalDataConfiguration;
  materialized_view: GoogleBigqueryTableArgsMaterializedView;
  range_partitioning: GoogleBigqueryTableArgsRangePartitioning;
  table_constraints: GoogleBigqueryTableArgsTableConstraints;
  table_replication_info: GoogleBigqueryTableArgsTableReplicationInfo;
  time_partitioning: GoogleBigqueryTableArgsTimePartitioning;
  view: GoogleBigqueryTableArgsView;
}
export class google_bigquery_table extends TerraformResource {
  readonly creation_time!: number;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly expiration_time?: number;
  readonly id?: string;
  readonly last_modified_time!: number;
  readonly location!: string;
  readonly num_bytes!: number;
  readonly num_long_term_bytes!: number;
  readonly num_rows!: number;
  readonly project?: string;
  readonly schema?: string;
  readonly self_link!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryTableArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_table");
  }
}