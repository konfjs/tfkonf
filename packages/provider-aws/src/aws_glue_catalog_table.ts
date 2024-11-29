import { TerraformConfig, TerraformResource } from "tfs";
export interface IcebergInput {
  metadata_operation: string;
  version?: string;
}
export interface OpenTableFormatInput {
  iceberg_input: IcebergInput;
}
export interface PartitionIndex {
  index_name: string;
  keys: string[];
}
export interface PartitionKeys {
  comment?: string;
  name: string;
  type?: string;
}
export interface Columns {
  comment?: string;
  name: string;
  parameters?: {
    [key: string]: string;
  };
  type?: string;
}
export interface SchemaId {
  registry_name?: string;
  schema_arn?: string;
  schema_name?: string;
}
export interface SchemaReference {
  schema_version_id?: string;
  schema_version_number: number;
  schema_id: SchemaId;
}
export interface SerDeInfo {
  name?: string;
  parameters?: {
    [key: string]: string;
  };
  serialization_library?: string;
}
export interface SkewedInfo {
  skewed_column_names?: string[];
  skewed_column_value_location_maps?: {
    [key: string]: string;
  };
  skewed_column_values?: string[];
}
export interface SortColumns {
  column: string;
  sort_order: number;
}
export interface StorageDescriptor {
  additional_locations?: string[];
  bucket_columns?: string[];
  compressed?: boolean;
  input_format?: string;
  location?: string;
  number_of_buckets?: number;
  output_format?: string;
  parameters?: {
    [key: string]: string;
  };
  stored_as_sub_directories?: boolean;
  columns: Columns;
  schema_reference: SchemaReference;
  ser_de_info: SerDeInfo;
  skewed_info: SkewedInfo;
  sort_columns: SortColumns;
}
export interface TargetTable {
  catalog_id: string;
  database_name: string;
  name: string;
  region?: string;
}
export interface AwsGlueCatalogTableArgs {
  database_name: string;
  description?: string;
  name: string;
  owner?: string;
  parameters?: {
    [key: string]: string;
  };
  retention?: number;
  table_type?: string;
  view_expanded_text?: string;
  view_original_text?: string;
  open_table_format_input: OpenTableFormatInput;
  partition_index: PartitionIndex;
  partition_keys: PartitionKeys;
  storage_descriptor: StorageDescriptor;
  target_table: TargetTable;
}
export class aws_glue_catalog_table extends TerraformResource {
  readonly arn!: string;
  readonly catalog_id?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueCatalogTableArgs) {
    super(config, "resource", args, resourceName, "aws_glue_catalog_table");
  }
}