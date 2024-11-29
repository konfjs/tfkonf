import { TerraformConfig, TerraformResource } from "tfs";
export interface Columns {
  comment?: string;
  name: string;
  type?: string;
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
  ser_de_info: SerDeInfo;
  skewed_info: SkewedInfo;
  sort_columns: SortColumns;
}
export interface AwsGluePartitionArgs {
  database_name: string;
  parameters?: {
    [key: string]: string;
  };
  partition_values: string[];
  table_name: string;
  storage_descriptor: StorageDescriptor;
}
export class aws_glue_partition extends TerraformResource {
  readonly catalog_id?: string;
  readonly creation_time!: string;
  readonly id?: string;
  readonly last_accessed_time!: string;
  readonly last_analyzed_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGluePartitionArgs) {
    super(config, "resource", args, resourceName, "aws_glue_partition");
  }
}