import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDatastreamStreamArgsBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  collation?: string;
  column?: string;
  data_type?: string;
  nullable?: boolean;
  ordinal_position?: number;
  primary_key?: boolean;
}
export interface GoogleDatastreamStreamArgsBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables {
  table: string;
  mysql_columns: GoogleDatastreamStreamArgsBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns;
}
export interface GoogleDatastreamStreamArgsBackfillAllMysqlExcludedObjectsMysqlDatabases {
  database: string;
  mysql_tables: GoogleDatastreamStreamArgsBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables;
}
export interface GoogleDatastreamStreamArgsBackfillAllMysqlExcludedObjects {
  mysql_databases: GoogleDatastreamStreamArgsBackfillAllMysqlExcludedObjectsMysqlDatabases;
}
export interface GoogleDatastreamStreamArgsBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns {
  column?: string;
  data_type?: string;
}
export interface GoogleDatastreamStreamArgsBackfillAllOracleExcludedObjectsOracleSchemasOracleTables {
  table: string;
  oracle_columns: GoogleDatastreamStreamArgsBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns;
}
export interface GoogleDatastreamStreamArgsBackfillAllOracleExcludedObjectsOracleSchemas {
  schema: string;
  oracle_tables: GoogleDatastreamStreamArgsBackfillAllOracleExcludedObjectsOracleSchemasOracleTables;
}
export interface GoogleDatastreamStreamArgsBackfillAllOracleExcludedObjects {
  oracle_schemas: GoogleDatastreamStreamArgsBackfillAllOracleExcludedObjectsOracleSchemas;
}
export interface GoogleDatastreamStreamArgsBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns {
  column?: string;
  data_type?: string;
  nullable?: boolean;
  ordinal_position?: number;
  primary_key?: boolean;
}
export interface GoogleDatastreamStreamArgsBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables {
  table: string;
  postgresql_columns: GoogleDatastreamStreamArgsBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns;
}
export interface GoogleDatastreamStreamArgsBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas {
  schema: string;
  postgresql_tables: GoogleDatastreamStreamArgsBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables;
}
export interface GoogleDatastreamStreamArgsBackfillAllPostgresqlExcludedObjects {
  postgresql_schemas: GoogleDatastreamStreamArgsBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas;
}
export interface GoogleDatastreamStreamArgsBackfillAllSqlServerExcludedObjectsSchemasTablesColumns {
  column?: string;
  data_type?: string;
}
export interface GoogleDatastreamStreamArgsBackfillAllSqlServerExcludedObjectsSchemasTables {
  table: string;
  columns: GoogleDatastreamStreamArgsBackfillAllSqlServerExcludedObjectsSchemasTablesColumns;
}
export interface GoogleDatastreamStreamArgsBackfillAllSqlServerExcludedObjectsSchemas {
  schema: string;
  tables: GoogleDatastreamStreamArgsBackfillAllSqlServerExcludedObjectsSchemasTables;
}
export interface GoogleDatastreamStreamArgsBackfillAllSqlServerExcludedObjects {
  schemas: GoogleDatastreamStreamArgsBackfillAllSqlServerExcludedObjectsSchemas;
}
export interface GoogleDatastreamStreamArgsBackfillAll {
  mysql_excluded_objects: GoogleDatastreamStreamArgsBackfillAllMysqlExcludedObjects;
  oracle_excluded_objects: GoogleDatastreamStreamArgsBackfillAllOracleExcludedObjects;
  postgresql_excluded_objects: GoogleDatastreamStreamArgsBackfillAllPostgresqlExcludedObjects;
  sql_server_excluded_objects: GoogleDatastreamStreamArgsBackfillAllSqlServerExcludedObjects;
}
export interface GoogleDatastreamStreamArgsBackfillNone {}
export interface GoogleDatastreamStreamArgsDestinationConfigBigqueryDestinationConfigAppendOnly {}
export interface GoogleDatastreamStreamArgsDestinationConfigBigqueryDestinationConfigMerge {}
export interface GoogleDatastreamStreamArgsDestinationConfigBigqueryDestinationConfigSingleTargetDataset {
  dataset_id: string;
}
export interface GoogleDatastreamStreamArgsDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate {
  dataset_id_prefix?: string;
  kms_key_name?: string;
  location: string;
}
export interface GoogleDatastreamStreamArgsDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets {
  dataset_template: GoogleDatastreamStreamArgsDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate;
}
export interface GoogleDatastreamStreamArgsDestinationConfigBigqueryDestinationConfig {
  data_freshness?: string;
  append_only: GoogleDatastreamStreamArgsDestinationConfigBigqueryDestinationConfigAppendOnly;
  merge: GoogleDatastreamStreamArgsDestinationConfigBigqueryDestinationConfigMerge;
  single_target_dataset: GoogleDatastreamStreamArgsDestinationConfigBigqueryDestinationConfigSingleTargetDataset;
  source_hierarchy_datasets: GoogleDatastreamStreamArgsDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets;
}
export interface GoogleDatastreamStreamArgsDestinationConfigGcsDestinationConfigAvroFileFormat {}
export interface GoogleDatastreamStreamArgsDestinationConfigGcsDestinationConfigJsonFileFormat {
  compression?: string;
  schema_file_format?: string;
}
export interface GoogleDatastreamStreamArgsDestinationConfigGcsDestinationConfig {
  path?: string;
  avro_file_format: GoogleDatastreamStreamArgsDestinationConfigGcsDestinationConfigAvroFileFormat;
  json_file_format: GoogleDatastreamStreamArgsDestinationConfigGcsDestinationConfigJsonFileFormat;
}
export interface GoogleDatastreamStreamArgsDestinationConfig {
  destination_connection_profile: string;
  bigquery_destination_config: GoogleDatastreamStreamArgsDestinationConfigBigqueryDestinationConfig;
  gcs_destination_config: GoogleDatastreamStreamArgsDestinationConfigGcsDestinationConfig;
}
export interface GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  collation?: string;
  column?: string;
  data_type?: string;
  nullable?: boolean;
  ordinal_position?: number;
  primary_key?: boolean;
}
export interface GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables {
  table: string;
  mysql_columns: GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns;
}
export interface GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases {
  database: string;
  mysql_tables: GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables;
}
export interface GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfigExcludeObjects {
  mysql_databases: GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases;
}
export interface GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  collation?: string;
  column?: string;
  data_type?: string;
  nullable?: boolean;
  ordinal_position?: number;
  primary_key?: boolean;
}
export interface GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables {
  table: string;
  mysql_columns: GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns;
}
export interface GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases {
  database: string;
  mysql_tables: GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables;
}
export interface GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfigIncludeObjects {
  mysql_databases: GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases;
}
export interface GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfig {
  exclude_objects: GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfigExcludeObjects;
  include_objects: GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfigIncludeObjects;
}
export interface GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigDropLargeObjects {}
export interface GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns {
  column?: string;
  data_type?: string;
}
export interface GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables {
  table: string;
  oracle_columns: GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns;
}
export interface GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas {
  schema: string;
  oracle_tables: GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables;
}
export interface GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigExcludeObjects {
  oracle_schemas: GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas;
}
export interface GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns {
  column?: string;
  data_type?: string;
}
export interface GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables {
  table: string;
  oracle_columns: GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns;
}
export interface GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas {
  schema: string;
  oracle_tables: GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables;
}
export interface GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigIncludeObjects {
  oracle_schemas: GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas;
}
export interface GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigStreamLargeObjects {}
export interface GoogleDatastreamStreamArgsSourceConfigOracleSourceConfig {
  drop_large_objects: GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigDropLargeObjects;
  exclude_objects: GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigExcludeObjects;
  include_objects: GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigIncludeObjects;
  stream_large_objects: GoogleDatastreamStreamArgsSourceConfigOracleSourceConfigStreamLargeObjects;
}
export interface GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns {
  column?: string;
  data_type?: string;
  nullable?: boolean;
  ordinal_position?: number;
  primary_key?: boolean;
}
export interface GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables {
  table: string;
  postgresql_columns: GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns;
}
export interface GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas {
  schema: string;
  postgresql_tables: GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables;
}
export interface GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfigExcludeObjects {
  postgresql_schemas: GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas;
}
export interface GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns {
  column?: string;
  data_type?: string;
  nullable?: boolean;
  ordinal_position?: number;
  primary_key?: boolean;
}
export interface GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables {
  table: string;
  postgresql_columns: GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns;
}
export interface GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas {
  schema: string;
  postgresql_tables: GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables;
}
export interface GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfigIncludeObjects {
  postgresql_schemas: GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas;
}
export interface GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfig {
  publication: string;
  replication_slot: string;
  exclude_objects: GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfigExcludeObjects;
  include_objects: GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfigIncludeObjects;
}
export interface GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigChangeTables {}
export interface GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns {
  column?: string;
  data_type?: string;
}
export interface GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables {
  table: string;
  columns: GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns;
}
export interface GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigExcludeObjectsSchemas {
  schema: string;
  tables: GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables;
}
export interface GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigExcludeObjects {
  schemas: GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigExcludeObjectsSchemas;
}
export interface GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns {
  column?: string;
  data_type?: string;
}
export interface GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables {
  table: string;
  columns: GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns;
}
export interface GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigIncludeObjectsSchemas {
  schema: string;
  tables: GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables;
}
export interface GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigIncludeObjects {
  schemas: GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigIncludeObjectsSchemas;
}
export interface GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigTransactionLogs {}
export interface GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfig {
  change_tables: GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigChangeTables;
  exclude_objects: GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigExcludeObjects;
  include_objects: GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigIncludeObjects;
  transaction_logs: GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfigTransactionLogs;
}
export interface GoogleDatastreamStreamArgsSourceConfig {
  source_connection_profile: string;
  mysql_source_config: GoogleDatastreamStreamArgsSourceConfigMysqlSourceConfig;
  oracle_source_config: GoogleDatastreamStreamArgsSourceConfigOracleSourceConfig;
  postgresql_source_config: GoogleDatastreamStreamArgsSourceConfigPostgresqlSourceConfig;
  sql_server_source_config: GoogleDatastreamStreamArgsSourceConfigSqlServerSourceConfig;
}
export interface GoogleDatastreamStreamArgsTimeouts {
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
  backfill_all: GoogleDatastreamStreamArgsBackfillAll;
  backfill_none: GoogleDatastreamStreamArgsBackfillNone;
  destination_config: GoogleDatastreamStreamArgsDestinationConfig;
  source_config: GoogleDatastreamStreamArgsSourceConfig;
  timeouts?: GoogleDatastreamStreamArgsTimeouts;
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