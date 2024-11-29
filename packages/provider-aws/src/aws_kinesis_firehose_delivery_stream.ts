import { TerraformConfig, TerraformResource } from "tfs";
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface Parameters {
  parameter_name: string;
  parameter_value: string;
}
export interface Processors {
  type: string;
  parameters: Parameters;
}
export interface ProcessingConfiguration {
  enabled?: boolean;
  processors: Processors;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface S3Configuration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
}
export interface VpcConfig {
  role_arn: string;
  security_group_ids: string[];
  subnet_ids: string[];
}
export interface ElasticsearchConfiguration {
  buffering_interval?: number;
  buffering_size?: number;
  cluster_endpoint?: string;
  domain_arn?: string;
  index_name: string;
  index_rotation_period?: string;
  retry_duration?: number;
  role_arn: string;
  s3_backup_mode?: string;
  type_name?: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
  processing_configuration: ProcessingConfiguration;
  s3_configuration: S3Configuration;
  vpc_config: VpcConfig;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface HiveJsonSerDe {
  timestamp_formats?: string[];
}
export interface OpenXJsonSerDe {
  case_insensitive?: boolean;
  column_to_json_key_mappings?: {
    [key: string]: string;
  };
  convert_dots_in_json_keys_to_underscores?: boolean;
}
export interface Deserializer {
  hive_json_ser_de: HiveJsonSerDe;
  open_x_json_ser_de: OpenXJsonSerDe;
}
export interface InputFormatConfiguration {
  deserializer: Deserializer;
}
export interface OrcSerDe {
  block_size_bytes?: number;
  bloom_filter_columns?: string[];
  bloom_filter_false_positive_probability?: number;
  compression?: string;
  dictionary_key_threshold?: number;
  enable_padding?: boolean;
  format_version?: string;
  padding_tolerance?: number;
  row_index_stride?: number;
  stripe_size_bytes?: number;
}
export interface ParquetSerDe {
  block_size_bytes?: number;
  compression?: string;
  enable_dictionary_compression?: boolean;
  max_padding_bytes?: number;
  page_size_bytes?: number;
  writer_version?: string;
}
export interface Serializer {
  orc_ser_de: OrcSerDe;
  parquet_ser_de: ParquetSerDe;
}
export interface OutputFormatConfiguration {
  serializer: Serializer;
}
export interface SchemaConfiguration {
  database_name: string;
  role_arn: string;
  table_name: string;
  version_id?: string;
}
export interface DataFormatConversionConfiguration {
  enabled?: boolean;
  input_format_configuration: InputFormatConfiguration;
  output_format_configuration: OutputFormatConfiguration;
  schema_configuration: SchemaConfiguration;
}
export interface DynamicPartitioningConfiguration {
  enabled?: boolean;
  retry_duration?: number;
}
export interface Parameters {
  parameter_name: string;
  parameter_value: string;
}
export interface Processors {
  type: string;
  parameters: Parameters;
}
export interface ProcessingConfiguration {
  enabled?: boolean;
  processors: Processors;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface S3BackupConfiguration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
}
export interface ExtendedS3Configuration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  custom_time_zone?: string;
  error_output_prefix?: string;
  file_extension?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  s3_backup_mode?: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
  data_format_conversion_configuration: DataFormatConversionConfiguration;
  dynamic_partitioning_configuration: DynamicPartitioningConfiguration;
  processing_configuration: ProcessingConfiguration;
  s3_backup_configuration: S3BackupConfiguration;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface Parameters {
  parameter_name: string;
  parameter_value: string;
}
export interface Processors {
  type: string;
  parameters: Parameters;
}
export interface ProcessingConfiguration {
  enabled?: boolean;
  processors: Processors;
}
export interface CommonAttributes {
  name: string;
  value: string;
}
export interface RequestConfiguration {
  content_encoding?: string;
  common_attributes: CommonAttributes;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface S3Configuration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
}
export interface SecretsManagerConfiguration {
  role_arn?: string;
  secret_arn?: string;
}
export interface HttpEndpointConfiguration {
  access_key?: string;
  buffering_interval?: number;
  buffering_size?: number;
  name?: string;
  retry_duration?: number;
  role_arn?: string;
  s3_backup_mode?: string;
  url: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
  processing_configuration: ProcessingConfiguration;
  request_configuration: RequestConfiguration;
  s3_configuration: S3Configuration;
  secrets_manager_configuration: SecretsManagerConfiguration;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface DestinationTableConfiguration {
  database_name: string;
  s3_error_output_prefix?: string;
  table_name: string;
  unique_keys?: string[];
}
export interface Parameters {
  parameter_name: string;
  parameter_value: string;
}
export interface Processors {
  type: string;
  parameters: Parameters;
}
export interface ProcessingConfiguration {
  enabled?: boolean;
  processors: Processors;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface S3Configuration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
}
export interface IcebergConfiguration {
  buffering_interval?: number;
  buffering_size?: number;
  catalog_arn: string;
  retry_duration?: number;
  role_arn: string;
  s3_backup_mode?: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
  destination_table_configuration: DestinationTableConfiguration;
  processing_configuration: ProcessingConfiguration;
  s3_configuration: S3Configuration;
}
export interface KinesisSourceConfiguration {
  kinesis_stream_arn: string;
  role_arn: string;
}
export interface AuthenticationConfiguration {
  connectivity: string;
  role_arn: string;
}
export interface MskSourceConfiguration {
  msk_cluster_arn: string;
  topic_name: string;
  authentication_configuration: AuthenticationConfiguration;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface DocumentIdOptions {
  default_document_id_format: string;
}
export interface Parameters {
  parameter_name: string;
  parameter_value: string;
}
export interface Processors {
  type: string;
  parameters: Parameters;
}
export interface ProcessingConfiguration {
  enabled?: boolean;
  processors: Processors;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface S3Configuration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
}
export interface VpcConfig {
  role_arn: string;
  security_group_ids: string[];
  subnet_ids: string[];
}
export interface OpensearchConfiguration {
  buffering_interval?: number;
  buffering_size?: number;
  cluster_endpoint?: string;
  domain_arn?: string;
  index_name: string;
  index_rotation_period?: string;
  retry_duration?: number;
  role_arn: string;
  s3_backup_mode?: string;
  type_name?: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
  document_id_options: DocumentIdOptions;
  processing_configuration: ProcessingConfiguration;
  s3_configuration: S3Configuration;
  vpc_config: VpcConfig;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface Parameters {
  parameter_name: string;
  parameter_value: string;
}
export interface Processors {
  type: string;
  parameters: Parameters;
}
export interface ProcessingConfiguration {
  enabled?: boolean;
  processors: Processors;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface S3Configuration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
}
export interface VpcConfig {
  role_arn: string;
  security_group_ids: string[];
  subnet_ids: string[];
}
export interface OpensearchserverlessConfiguration {
  buffering_interval?: number;
  buffering_size?: number;
  collection_endpoint: string;
  index_name: string;
  retry_duration?: number;
  role_arn: string;
  s3_backup_mode?: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
  processing_configuration: ProcessingConfiguration;
  s3_configuration: S3Configuration;
  vpc_config: VpcConfig;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface Parameters {
  parameter_name: string;
  parameter_value: string;
}
export interface Processors {
  type: string;
  parameters: Parameters;
}
export interface ProcessingConfiguration {
  enabled?: boolean;
  processors: Processors;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface S3BackupConfiguration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface S3Configuration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
}
export interface SecretsManagerConfiguration {
  role_arn?: string;
  secret_arn?: string;
}
export interface RedshiftConfiguration {
  cluster_jdbcurl: string;
  copy_options?: string;
  data_table_columns?: string;
  data_table_name: string;
  password?: string;
  retry_duration?: number;
  role_arn: string;
  s3_backup_mode?: string;
  username?: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
  processing_configuration: ProcessingConfiguration;
  s3_backup_configuration: S3BackupConfiguration;
  s3_configuration: S3Configuration;
  secrets_manager_configuration: SecretsManagerConfiguration;
}
export interface ServerSideEncryption {
  enabled?: boolean;
  key_arn?: string;
  key_type?: string;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface Parameters {
  parameter_name: string;
  parameter_value: string;
}
export interface Processors {
  type: string;
  parameters: Parameters;
}
export interface ProcessingConfiguration {
  enabled?: boolean;
  processors: Processors;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface S3Configuration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
}
export interface SecretsManagerConfiguration {
  role_arn?: string;
  secret_arn?: string;
}
export interface SnowflakeRoleConfiguration {
  enabled?: boolean;
  snowflake_role?: string;
}
export interface SnowflakeVpcConfiguration {
  private_link_vpce_id: string;
}
export interface SnowflakeConfiguration {
  account_url: string;
  buffering_interval?: number;
  buffering_size?: number;
  content_column_name?: string;
  data_loading_option?: string;
  database: string;
  key_passphrase?: string;
  metadata_column_name?: string;
  private_key?: string;
  retry_duration?: number;
  role_arn: string;
  s3_backup_mode?: string;
  schema: string;
  table: string;
  user?: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
  processing_configuration: ProcessingConfiguration;
  s3_configuration: S3Configuration;
  secrets_manager_configuration: SecretsManagerConfiguration;
  snowflake_role_configuration: SnowflakeRoleConfiguration;
  snowflake_vpc_configuration: SnowflakeVpcConfiguration;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface Parameters {
  parameter_name: string;
  parameter_value: string;
}
export interface Processors {
  type: string;
  parameters: Parameters;
}
export interface ProcessingConfiguration {
  enabled?: boolean;
  processors: Processors;
}
export interface CloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface S3Configuration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
}
export interface SecretsManagerConfiguration {
  role_arn?: string;
  secret_arn?: string;
}
export interface SplunkConfiguration {
  buffering_interval?: number;
  buffering_size?: number;
  hec_acknowledgment_timeout?: number;
  hec_endpoint: string;
  hec_endpoint_type?: string;
  hec_token?: string;
  retry_duration?: number;
  s3_backup_mode?: string;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
  processing_configuration: ProcessingConfiguration;
  s3_configuration: S3Configuration;
  secrets_manager_configuration: SecretsManagerConfiguration;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgs {
  destination: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  elasticsearch_configuration: ElasticsearchConfiguration;
  extended_s3_configuration: ExtendedS3Configuration;
  http_endpoint_configuration: HttpEndpointConfiguration;
  iceberg_configuration: IcebergConfiguration;
  kinesis_source_configuration: KinesisSourceConfiguration;
  msk_source_configuration: MskSourceConfiguration;
  opensearch_configuration: OpensearchConfiguration;
  opensearchserverless_configuration: OpensearchserverlessConfiguration;
  redshift_configuration: RedshiftConfiguration;
  server_side_encryption: ServerSideEncryption;
  snowflake_configuration: SnowflakeConfiguration;
  splunk_configuration: SplunkConfiguration;
  timeouts: Timeouts;
}
export class aws_kinesis_firehose_delivery_stream extends TerraformResource {
  readonly arn?: string;
  readonly destination_id?: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsKinesisFirehoseDeliveryStreamArgs) {
    super(config, "resource", args, resourceName, "aws_kinesis_firehose_delivery_stream");
  }
}