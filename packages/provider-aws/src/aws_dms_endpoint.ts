import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDmsEndpointArgsElasticsearchSettings {
  endpoint_uri: string;
  error_retry_duration?: number;
  full_load_error_percentage?: number;
  service_access_role_arn: string;
  use_new_mapping_type?: boolean;
}
export interface AwsDmsEndpointArgsKafkaSettings {
  broker: string;
  include_control_details?: boolean;
  include_null_and_empty?: boolean;
  include_partition_value?: boolean;
  include_table_alter_operations?: boolean;
  include_transaction_details?: boolean;
  message_format?: string;
  message_max_bytes?: number;
  no_hex_prefix?: boolean;
  partition_include_schema_table?: boolean;
  sasl_password?: string;
  sasl_username?: string;
  security_protocol?: string;
  ssl_ca_certificate_arn?: string;
  ssl_client_certificate_arn?: string;
  ssl_client_key_arn?: string;
  ssl_client_key_password?: string;
  topic?: string;
}
export interface AwsDmsEndpointArgsKinesisSettings {
  include_control_details?: boolean;
  include_null_and_empty?: boolean;
  include_partition_value?: boolean;
  include_table_alter_operations?: boolean;
  include_transaction_details?: boolean;
  message_format?: string;
  partition_include_schema_table?: boolean;
  service_access_role_arn?: string;
  stream_arn?: string;
}
export interface AwsDmsEndpointArgsMongodbSettings {
  auth_mechanism?: string;
  auth_source?: string;
  auth_type?: string;
  docs_to_investigate?: string;
  extract_doc_id?: string;
  nesting_level?: string;
}
export interface AwsDmsEndpointArgsPostgresSettings {
  after_connect_script?: string;
  babelfish_database_name?: string;
  capture_ddls?: boolean;
  database_mode?: string;
  ddl_artifacts_schema?: string;
  execute_timeout?: number;
  fail_tasks_on_lob_truncation?: boolean;
  heartbeat_enable?: boolean;
  heartbeat_frequency?: number;
  heartbeat_schema?: string;
  map_boolean_as_boolean?: boolean;
  map_jsonb_as_clob?: boolean;
  map_long_varchar_as?: string;
  max_file_size?: number;
  plugin_name?: string;
  slot_name?: string;
}
export interface AwsDmsEndpointArgsRedisSettings {
  auth_password?: string;
  auth_type: string;
  auth_user_name?: string;
  port: number;
  server_name: string;
  ssl_ca_certificate_arn?: string;
  ssl_security_protocol?: string;
}
export interface AwsDmsEndpointArgsRedshiftSettings {
  bucket_folder?: string;
  bucket_name?: string;
  encryption_mode?: string;
  server_side_encryption_kms_key_id?: string;
  service_access_role_arn?: string;
}
export interface AwsDmsEndpointArgsS3Settings {
  add_column_name?: boolean;
  bucket_folder?: string;
  bucket_name?: string;
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
  dict_page_size_limit?: number;
  enable_statistics?: boolean;
  encoding_type?: string;
  encryption_mode?: string;
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
  service_access_role_arn?: string;
  timestamp_column_name?: string;
  use_csv_no_sup_value?: boolean;
  use_task_start_time_for_full_load_timestamp?: boolean;
}
export interface AwsDmsEndpointArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsDmsEndpointArgs {
  database_name?: string;
  endpoint_id: string;
  endpoint_type: string;
  engine_name: string;
  password?: string;
  pause_replication_tasks?: boolean;
  port?: number;
  secrets_manager_access_role_arn?: string;
  secrets_manager_arn?: string;
  server_name?: string;
  service_access_role?: string;
  tags?: {
    [key: string]: string;
  };
  username?: string;
  elasticsearch_settings: AwsDmsEndpointArgsElasticsearchSettings;
  kafka_settings: AwsDmsEndpointArgsKafkaSettings;
  kinesis_settings: AwsDmsEndpointArgsKinesisSettings;
  mongodb_settings: AwsDmsEndpointArgsMongodbSettings;
  postgres_settings: AwsDmsEndpointArgsPostgresSettings;
  redis_settings: AwsDmsEndpointArgsRedisSettings;
  redshift_settings: AwsDmsEndpointArgsRedshiftSettings;
  s3_settings: AwsDmsEndpointArgsS3Settings;
  timeouts?: AwsDmsEndpointArgsTimeouts;
}
export class aws_dms_endpoint extends TerraformResource {
  readonly certificate_arn?: string;
  readonly endpoint_arn!: string;
  readonly extra_connection_attributes?: string;
  readonly id?: string;
  readonly kms_key_arn?: string;
  readonly ssl_mode?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDmsEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_dms_endpoint");
  }
}