import { TerraformConfig, TerraformResource } from "tfs";
export interface MysqlColumns {
  collation?: string;
  column?: string;
  data_type?: string;
  nullable?: boolean;
  ordinal_position?: number;
  primary_key?: boolean;
}
export interface MysqlTables {
  table: string;
  mysql_columns: MysqlColumns;
}
export interface MysqlDatabases {
  database: string;
  mysql_tables: MysqlTables;
}
export interface MysqlExcludedObjects {
  mysql_databases: MysqlDatabases;
}
export interface OracleColumns {
  column?: string;
  data_type?: string;
}
export interface OracleTables {
  table: string;
  oracle_columns: OracleColumns;
}
export interface OracleSchemas {
  schema: string;
  oracle_tables: OracleTables;
}
export interface OracleExcludedObjects {
  oracle_schemas: OracleSchemas;
}
export interface PostgresqlColumns {
  column?: string;
  data_type?: string;
  nullable?: boolean;
  ordinal_position?: number;
  primary_key?: boolean;
}
export interface PostgresqlTables {
  table: string;
  postgresql_columns: PostgresqlColumns;
}
export interface PostgresqlSchemas {
  schema: string;
  postgresql_tables: PostgresqlTables;
}
export interface PostgresqlExcludedObjects {
  postgresql_schemas: PostgresqlSchemas;
}
export interface Columns {
  column?: string;
  data_type?: string;
}
export interface Tables {
  table: string;
  columns: Columns;
}
export interface Schemas {
  schema: string;
  tables: Tables;
}
export interface SqlServerExcludedObjects {
  schemas: Schemas;
}
export interface BackfillAll {
  mysql_excluded_objects: MysqlExcludedObjects;
  oracle_excluded_objects: OracleExcludedObjects;
  postgresql_excluded_objects: PostgresqlExcludedObjects;
  sql_server_excluded_objects: SqlServerExcludedObjects;
}
export interface BackfillNone {}
export interface AppendOnly {}
export interface Merge {}
export interface SingleTargetDataset {
  dataset_id: string;
}
export interface DatasetTemplate {
  dataset_id_prefix?: string;
  kms_key_name?: string;
  location: string;
}
export interface SourceHierarchyDatasets {
  dataset_template: DatasetTemplate;
}
export interface BigqueryDestinationConfig {
  data_freshness?: string;
  append_only: AppendOnly;
  merge: Merge;
  single_target_dataset: SingleTargetDataset;
  source_hierarchy_datasets: SourceHierarchyDatasets;
}
export interface AvroFileFormat {}
export interface JsonFileFormat {
  compression?: string;
  schema_file_format?: string;
}
export interface GcsDestinationConfig {
  path?: string;
  avro_file_format: AvroFileFormat;
  json_file_format: JsonFileFormat;
}
export interface DestinationConfig {
  destination_connection_profile: string;
  bigquery_destination_config: BigqueryDestinationConfig;
  gcs_destination_config: GcsDestinationConfig;
}
export interface MysqlColumns {
  collation?: string;
  column?: string;
  data_type?: string;
  nullable?: boolean;
  ordinal_position?: number;
  primary_key?: boolean;
}
export interface MysqlTables {
  table: string;
  mysql_columns: MysqlColumns;
}
export interface MysqlDatabases {
  database: string;
  mysql_tables: MysqlTables;
}
export interface ExcludeObjects {
  mysql_databases: MysqlDatabases;
}
export interface MysqlColumns {
  collation?: string;
  column?: string;
  data_type?: string;
  nullable?: boolean;
  ordinal_position?: number;
  primary_key?: boolean;
}
export interface MysqlTables {
  table: string;
  mysql_columns: MysqlColumns;
}
export interface MysqlDatabases {
  database: string;
  mysql_tables: MysqlTables;
}
export interface IncludeObjects {
  mysql_databases: MysqlDatabases;
}
export interface MysqlSourceConfig {
  exclude_objects: ExcludeObjects;
  include_objects: IncludeObjects;
}
export interface DropLargeObjects {}
export interface OracleColumns {
  column?: string;
  data_type?: string;
}
export interface OracleTables {
  table: string;
  oracle_columns: OracleColumns;
}
export interface OracleSchemas {
  schema: string;
  oracle_tables: OracleTables;
}
export interface ExcludeObjects {
  oracle_schemas: OracleSchemas;
}
export interface OracleColumns {
  column?: string;
  data_type?: string;
}
export interface OracleTables {
  table: string;
  oracle_columns: OracleColumns;
}
export interface OracleSchemas {
  schema: string;
  oracle_tables: OracleTables;
}
export interface IncludeObjects {
  oracle_schemas: OracleSchemas;
}
export interface StreamLargeObjects {}
export interface OracleSourceConfig {
  drop_large_objects: DropLargeObjects;
  exclude_objects: ExcludeObjects;
  include_objects: IncludeObjects;
  stream_large_objects: StreamLargeObjects;
}
export interface PostgresqlColumns {
  column?: string;
  data_type?: string;
  nullable?: boolean;
  ordinal_position?: number;
  primary_key?: boolean;
}
export interface PostgresqlTables {
  table: string;
  postgresql_columns: PostgresqlColumns;
}
export interface PostgresqlSchemas {
  schema: string;
  postgresql_tables: PostgresqlTables;
}
export interface ExcludeObjects {
  postgresql_schemas: PostgresqlSchemas;
}
export interface PostgresqlColumns {
  column?: string;
  data_type?: string;
  nullable?: boolean;
  ordinal_position?: number;
  primary_key?: boolean;
}
export interface PostgresqlTables {
  table: string;
  postgresql_columns: PostgresqlColumns;
}
export interface PostgresqlSchemas {
  schema: string;
  postgresql_tables: PostgresqlTables;
}
export interface IncludeObjects {
  postgresql_schemas: PostgresqlSchemas;
}
export interface PostgresqlSourceConfig {
  publication: string;
  replication_slot: string;
  exclude_objects: ExcludeObjects;
  include_objects: IncludeObjects;
}
export interface ChangeTables {}
export interface Columns {
  column?: string;
  data_type?: string;
}
export interface Tables {
  table: string;
  columns: Columns;
}
export interface Schemas {
  schema: string;
  tables: Tables;
}
export interface ExcludeObjects {
  schemas: Schemas;
}
export interface Columns {
  column?: string;
  data_type?: string;
}
export interface Tables {
  table: string;
  columns: Columns;
}
export interface Schemas {
  schema: string;
  tables: Tables;
}
export interface IncludeObjects {
  schemas: Schemas;
}
export interface TransactionLogs {}
export interface SqlServerSourceConfig {
  change_tables: ChangeTables;
  exclude_objects: ExcludeObjects;
  include_objects: IncludeObjects;
  transaction_logs: TransactionLogs;
}
export interface SourceConfig {
  source_connection_profile: string;
  mysql_source_config: MysqlSourceConfig;
  oracle_source_config: OracleSourceConfig;
  postgresql_source_config: PostgresqlSourceConfig;
  sql_server_source_config: SqlServerSourceConfig;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDatastreamStreamArgs {
  create_without_validation?: boolean;
  customer_managed_encryption_key?: string;
  desired_state?: string;
  display_name: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  stream_id: string;
  backfill_all: BackfillAll;
  backfill_none: BackfillNone;
  destination_config: DestinationConfig;
  source_config: SourceConfig;
  timeouts: Timeouts;
}
export class google_datastream_stream extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDatastreamStreamArgs) {
    super(config, "resource", args, resourceName, "google_datastream_stream");
  }
}