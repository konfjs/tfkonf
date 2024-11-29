import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsDmsS3EndpointArgs {
  add_column_name?: boolean;
  add_trailing_padding_character?: boolean;
  bucket_folder?: string;
  bucket_name: string;
  canned_acl_for_objects?: string;
  cdc_inserts_and_updates?: boolean;
  cdc_inserts_only?: boolean;
  cdc_max_batch_interval?: number;
  cdc_min_file_size?: number;
  cdc_path?: string;
  compression_type?: string;
  csv_delimiter?: string;
  csv_no_sup_value?: string;
  csv_null_value?: string;
  csv_row_delimiter?: string;
  data_format?: string;
  data_page_size?: number;
  date_partition_delimiter?: string;
  date_partition_enabled?: boolean;
  date_partition_sequence?: string;
  date_partition_timezone?: string;
  detach_target_on_lob_lookup_failure_parquet?: boolean;
  dict_page_size_limit?: number;
  enable_statistics?: boolean;
  encoding_type?: string;
  encryption_mode?: string;
  endpoint_id: string;
  endpoint_type: string;
  expected_bucket_owner?: string;
  external_table_definition?: string;
  glue_catalog_generation?: boolean;
  ignore_header_rows?: number;
  include_op_for_full_load?: boolean;
  max_file_size?: number;
  parquet_timestamp_in_millisecond?: boolean;
  parquet_version?: string;
  preserve_transactions?: boolean;
  rfc_4180?: boolean;
  row_group_length?: number;
  server_side_encryption_kms_key_id?: string;
  service_access_role_arn: string;
  tags?: {
    [key: string]: string;
  };
  timestamp_column_name?: string;
  use_csv_no_sup_value?: boolean;
  use_task_start_time_for_full_load_timestamp?: boolean;
  timeouts: Timeouts;
}
export class aws_dms_s3_endpoint extends TerraformResource {
  readonly certificate_arn?: string;
  readonly endpoint_arn!: string;
  readonly engine_display_name!: string;
  readonly external_id!: string;
  readonly id?: string;
  readonly kms_key_arn?: string;
  readonly ssl_mode?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDmsS3EndpointArgs) {
    super(config, "resource", args, resourceName, "aws_dms_s3_endpoint");
  }
}