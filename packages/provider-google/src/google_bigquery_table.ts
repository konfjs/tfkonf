import { TerraformConfig, TerraformResource } from "tfs";
export interface BiglakeConfiguration {
  connection_id: string;
  file_format: string;
  storage_uri: string;
  table_format: string;
}
export interface EncryptionConfiguration {
  kms_key_name: string;
}
export interface AvroOptions {
  use_avro_logical_types: boolean;
}
export interface Column {
  encoding?: string;
  field_name?: string;
  only_read_latest?: boolean;
  qualifier_encoded?: string;
  qualifier_string?: string;
  type?: string;
}
export interface ColumnFamily {
  encoding?: string;
  family_id?: string;
  only_read_latest?: boolean;
  type?: string;
  column: Column;
}
export interface BigtableOptions {
  ignore_unspecified_column_families?: boolean;
  output_column_families_as_json?: boolean;
  read_rowkey_as_string?: boolean;
  column_family: ColumnFamily;
}
export interface CsvOptions {
  allow_jagged_rows?: boolean;
  allow_quoted_newlines?: boolean;
  encoding?: string;
  field_delimiter?: string;
  quote: string;
  skip_leading_rows?: number;
}
export interface GoogleSheetsOptions {
  range?: string;
  skip_leading_rows?: number;
}
export interface HivePartitioningOptions {
  mode?: string;
  require_partition_filter?: boolean;
  source_uri_prefix?: string;
}
export interface JsonOptions {
  encoding?: string;
}
export interface ParquetOptions {
  enable_list_inference?: boolean;
  enum_as_string?: boolean;
}
export interface ExternalDataConfiguration {
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
  avro_options: AvroOptions;
  bigtable_options: BigtableOptions;
  csv_options: CsvOptions;
  google_sheets_options: GoogleSheetsOptions;
  hive_partitioning_options: HivePartitioningOptions;
  json_options: JsonOptions;
  parquet_options: ParquetOptions;
}
export interface MaterializedView {
  allow_non_incremental_definition?: boolean;
  enable_refresh?: boolean;
  query: string;
  refresh_interval_ms?: number;
}
export interface Range {
  end: number;
  interval: number;
  start: number;
}
export interface RangePartitioning {
  field: string;
  range: Range;
}
export interface ColumnReferences {
  referenced_column: string;
  referencing_column: string;
}
export interface ReferencedTable {
  dataset_id: string;
  project_id: string;
  table_id: string;
}
export interface ForeignKeys {
  name?: string;
  column_references: ColumnReferences;
  referenced_table: ReferencedTable;
}
export interface PrimaryKey {
  columns: string[];
}
export interface TableConstraints {
  foreign_keys: ForeignKeys;
  primary_key: PrimaryKey;
}
export interface TableReplicationInfo {
  replication_interval_ms?: number;
  source_dataset_id: string;
  source_project_id: string;
  source_table_id: string;
}
export interface TimePartitioning {
  field?: string;
  require_partition_filter?: boolean;
  type: string;
}
export interface View {
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
  biglake_configuration: BiglakeConfiguration;
  encryption_configuration: EncryptionConfiguration;
  external_data_configuration: ExternalDataConfiguration;
  materialized_view: MaterializedView;
  range_partitioning: RangePartitioning;
  table_constraints: TableConstraints;
  table_replication_info: TableReplicationInfo;
  time_partitioning: TimePartitioning;
  view: View;
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