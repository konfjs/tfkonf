import { TerraformConfig, TerraformResource } from "tfs";
export interface Attribute {
  name: string;
  type: string;
}
export interface OnDemandThroughput {}
export interface GlobalSecondaryIndex {
  hash_key: string;
  name: string;
  non_key_attributes?: string[];
  projection_type: string;
  range_key?: string;
  on_demand_throughput: OnDemandThroughput;
}
export interface Csv {
  delimiter?: string;
  header_list?: string[];
}
export interface InputFormatOptions {
  csv: Csv;
}
export interface S3BucketSource {
  bucket: string;
  bucket_owner?: string;
  key_prefix?: string;
}
export interface ImportTable {
  input_compression_type?: string;
  input_format: string;
  input_format_options: InputFormatOptions;
  s3_bucket_source: S3BucketSource;
}
export interface LocalSecondaryIndex {
  name: string;
  non_key_attributes?: string[];
  projection_type: string;
  range_key: string;
}
export interface OnDemandThroughput {}
export interface PointInTimeRecovery {
  enabled: boolean;
}
export interface Replica {
  point_in_time_recovery?: boolean;
  propagate_tags?: boolean;
  region_name: string;
}
export interface ServerSideEncryption {
  enabled: boolean;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface Ttl {
  attribute_name?: string;
  enabled?: boolean;
}
export interface AwsDynamodbTableArgs {
  billing_mode?: string;
  deletion_protection_enabled?: boolean;
  name: string;
  range_key?: string;
  restore_date_time?: string;
  restore_source_name?: string;
  restore_source_table_arn?: string;
  restore_to_latest_time?: boolean;
  stream_enabled?: boolean;
  table_class?: string;
  tags?: {
    [key: string]: string;
  };
  attribute: Attribute;
  global_secondary_index: GlobalSecondaryIndex;
  import_table: ImportTable;
  local_secondary_index: LocalSecondaryIndex;
  on_demand_throughput: OnDemandThroughput;
  point_in_time_recovery: PointInTimeRecovery;
  replica: Replica;
  server_side_encryption: ServerSideEncryption;
  timeouts: Timeouts;
  ttl: Ttl;
}
export class aws_dynamodb_table extends TerraformResource {
  readonly arn!: string;
  readonly hash_key?: string;
  readonly id?: string;
  readonly read_capacity?: number;
  readonly stream_arn!: string;
  readonly stream_label!: string;
  readonly stream_view_type?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly write_capacity?: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDynamodbTableArgs) {
    super(config, "resource", args, resourceName, "aws_dynamodb_table");
  }
}