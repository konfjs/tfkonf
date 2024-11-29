import { TerraformConfig, TerraformResource } from "tfs";
export interface GeoSpatialColumnGroup {
  columns: string[];
  country_code: string;
  name: string;
}
export interface ColumnGroups {
  geo_spatial_column_group: GeoSpatialColumnGroup;
}
export interface ColumnLevelPermissionRules {
  column_names?: string[];
  principals?: string[];
}
export interface DataSetUsageConfiguration {}
export interface FieldFolders {
  columns?: string[];
  description?: string;
  field_folders_id: string;
}
export interface CastColumnTypeOperation {
  column_name: string;
  new_column_type: string;
}
export interface Columns {
  column_id: string;
  column_name: string;
  expression: string;
}
export interface CreateColumnsOperation {
  columns: Columns;
}
export interface FilterOperation {
  condition_expression: string;
}
export interface ProjectOperation {
  projected_columns: string[];
}
export interface RenameColumnOperation {
  column_name: string;
  new_column_name: string;
}
export interface ColumnDescription {}
export interface Tags {
  column_description: ColumnDescription;
}
export interface TagColumnOperation {
  column_name: string;
  tags: Tags;
}
export interface UntagColumnOperation {
  column_name: string;
  tag_names: string[];
}
export interface DataTransforms {
  cast_column_type_operation: CastColumnTypeOperation;
  create_columns_operation: CreateColumnsOperation;
  filter_operation: FilterOperation;
  project_operation: ProjectOperation;
  rename_column_operation: RenameColumnOperation;
  tag_column_operation: TagColumnOperation;
  untag_column_operation: UntagColumnOperation;
}
export interface LeftJoinKeyProperties {}
export interface RightJoinKeyProperties {}
export interface JoinInstruction {
  left_operand: string;
  on_clause: string;
  right_operand: string;
  type: string;
  left_join_key_properties: LeftJoinKeyProperties;
  right_join_key_properties: RightJoinKeyProperties;
}
export interface Source {
  join_instruction: JoinInstruction;
}
export interface LogicalTableMap {
  alias: string;
  logical_table_map_id: string;
  data_transforms: DataTransforms;
  source: Source;
}
export interface Permissions {
  actions: string[];
  principal: string;
}
export interface Columns {
  name: string;
  type: string;
}
export interface CustomSql {
  data_source_arn: string;
  name: string;
  sql_query: string;
  columns: Columns;
}
export interface InputColumns {
  name: string;
  type: string;
}
export interface RelationalTable {
  catalog?: string;
  data_source_arn: string;
  name: string;
  schema?: string;
  input_columns: InputColumns;
}
export interface InputColumns {
  name: string;
  type: string;
}
export interface UploadSettings {}
export interface S3Source {
  data_source_arn: string;
  input_columns: InputColumns;
  upload_settings: UploadSettings;
}
export interface PhysicalTableMap {
  physical_table_map_id: string;
  custom_sql: CustomSql;
  relational_table: RelationalTable;
  s3_source: S3Source;
}
export interface LookbackWindow {
  column_name: string;
  size: number;
  size_unit: string;
}
export interface IncrementalRefresh {
  lookback_window: LookbackWindow;
}
export interface RefreshConfiguration {
  incremental_refresh: IncrementalRefresh;
}
export interface RefreshProperties {
  refresh_configuration: RefreshConfiguration;
}
export interface RowLevelPermissionDataSet {
  arn: string;
  format_version?: string;
  namespace?: string;
  permission_policy: string;
  status?: string;
}
export interface TagRules {
  column_name: string;
  match_all_value?: string;
  tag_key: string;
  tag_multi_value_delimiter?: string;
}
export interface RowLevelPermissionTagConfiguration {
  status?: string;
  tag_rules: TagRules;
}
export interface AwsQuicksightDataSetArgs {
  data_set_id: string;
  import_mode: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  column_groups: ColumnGroups;
  column_level_permission_rules: ColumnLevelPermissionRules;
  data_set_usage_configuration: DataSetUsageConfiguration;
  field_folders: FieldFolders;
  logical_table_map: LogicalTableMap;
  permissions: Permissions;
  physical_table_map: PhysicalTableMap;
  refresh_properties: RefreshProperties;
  row_level_permission_data_set: RowLevelPermissionDataSet;
  row_level_permission_tag_configuration: RowLevelPermissionTagConfiguration;
}
export class aws_quicksight_data_set extends TerraformResource {
  readonly arn!: string;
  readonly aws_account_id?: string;
  readonly id?: string;
  readonly output_columns!: any[];
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsQuicksightDataSetArgs) {
    super(config, "resource", args, resourceName, "aws_quicksight_data_set");
  }
}