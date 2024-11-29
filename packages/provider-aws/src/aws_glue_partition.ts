import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsGluePartitionArgsStorageDescriptorColumns {
  comment?: string;
  name: string;
  type?: string;
}
export interface AwsGluePartitionArgsStorageDescriptorSerDeInfo {
  name?: string;
  parameters?: {
    [key: string]: string;
  };
  serialization_library?: string;
}
export interface AwsGluePartitionArgsStorageDescriptorSkewedInfo {
  skewed_column_names?: string[];
  skewed_column_value_location_maps?: {
    [key: string]: string;
  };
  skewed_column_values?: string[];
}
export interface AwsGluePartitionArgsStorageDescriptorSortColumns {
  column: string;
  sort_order: number;
}
export interface AwsGluePartitionArgsStorageDescriptor {
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
  columns: AwsGluePartitionArgsStorageDescriptorColumns;
  ser_de_info: AwsGluePartitionArgsStorageDescriptorSerDeInfo;
  skewed_info: AwsGluePartitionArgsStorageDescriptorSkewedInfo;
  sort_columns: AwsGluePartitionArgsStorageDescriptorSortColumns;
}
export interface AwsGluePartitionArgs {
  database_name: string;
  parameters?: {
    [key: string]: string;
  };
  partition_values: string[];
  table_name: string;
  storage_descriptor: AwsGluePartitionArgsStorageDescriptor;
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