import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDynamodbTableArgsAttribute {
  name: string;
  type: string;
}

export interface AwsDynamodbTableArgsGlobalSecondaryIndexOnDemandThroughput {
}

export interface AwsDynamodbTableArgsGlobalSecondaryIndex {
  hash_key: string;
  name: string;
  non_key_attributes?: string[];
  projection_type: string;
  range_key?: string;
  on_demand_throughput: AwsDynamodbTableArgsGlobalSecondaryIndexOnDemandThroughput;
}

export interface AwsDynamodbTableArgsImportTableInputFormatOptionsCsv {
  delimiter?: string;
  header_list?: string[];
}

export interface AwsDynamodbTableArgsImportTableInputFormatOptions {
  csv: AwsDynamodbTableArgsImportTableInputFormatOptionsCsv;
}

export interface AwsDynamodbTableArgsImportTableS3BucketSource {
  bucket: string;
  bucket_owner?: string;
  key_prefix?: string;
}

export interface AwsDynamodbTableArgsImportTable {
  input_compression_type?: string;
  input_format: string;
  input_format_options: AwsDynamodbTableArgsImportTableInputFormatOptions;
  s3_bucket_source: AwsDynamodbTableArgsImportTableS3BucketSource;
}

export interface AwsDynamodbTableArgsLocalSecondaryIndex {
  name: string;
  non_key_attributes?: string[];
  projection_type: string;
  range_key: string;
}

export interface AwsDynamodbTableArgsOnDemandThroughput {
}

export interface AwsDynamodbTableArgsPointInTimeRecovery {
  enabled: boolean;
}

export interface AwsDynamodbTableArgsReplica {
  point_in_time_recovery?: boolean;
  propagate_tags?: boolean;
  region_name: string;
}

export interface AwsDynamodbTableArgsServerSideEncryption {
  enabled: boolean;
}

export interface AwsDynamodbTableArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDynamodbTableArgsTtl {
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
  tags?: { [key: string]: string };
  attribute: AwsDynamodbTableArgsAttribute;
  global_secondary_index: AwsDynamodbTableArgsGlobalSecondaryIndex;
  import_table: AwsDynamodbTableArgsImportTable;
  local_secondary_index: AwsDynamodbTableArgsLocalSecondaryIndex;
  on_demand_throughput: AwsDynamodbTableArgsOnDemandThroughput;
  point_in_time_recovery: AwsDynamodbTableArgsPointInTimeRecovery;
  replica: AwsDynamodbTableArgsReplica;
  server_side_encryption: AwsDynamodbTableArgsServerSideEncryption;
  timeouts?: AwsDynamodbTableArgsTimeouts;
  ttl: AwsDynamodbTableArgsTtl;
}

export class aws_dynamodb_table extends TerraformResource {
  readonly arn!: string;
  readonly hash_key?: string;
  readonly id?: string;
  readonly read_capacity?: number;
  readonly stream_arn!: string;
  readonly stream_label!: string;
  readonly stream_view_type?: string;
  readonly tags_all?: { [key: string]: string };
  readonly write_capacity?: number;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDynamodbTableArgs) {
    super(config, "resource", args, resourceName, "aws_dynamodb_table");
  }
}
