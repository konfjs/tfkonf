import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsKinesisFirehoseDeliveryStreamArgsElasticsearchConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsElasticsearchConfigurationProcessingConfigurationprocessorsparameters {
  parameter_name: string;
  parameter_value: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsElasticsearchConfigurationProcessingConfigurationprocessors {
  type: string;
  parameters: AwsKinesisFirehoseDeliveryStreamArgsElasticsearchConfigurationProcessingConfigurationprocessorsparameters;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsElasticsearchConfigurationProcessingConfiguration {
  enabled?: boolean;
  processors: AwsKinesisFirehoseDeliveryStreamArgsElasticsearchConfigurationProcessingConfigurationprocessors;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsElasticsearchConfigurationS3Configuration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsElasticsearchConfigurationVpcConfig {
  role_arn: string;
  security_group_ids: string[];
  subnet_ids: string[];
}
export interface AwsKinesisFirehoseDeliveryStreamArgsElasticsearchConfiguration {
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
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsElasticsearchConfigurationCloudwatchLoggingOptions;
  processing_configuration: AwsKinesisFirehoseDeliveryStreamArgsElasticsearchConfigurationProcessingConfiguration;
  s3_configuration: AwsKinesisFirehoseDeliveryStreamArgsElasticsearchConfigurationS3Configuration;
  vpc_config: AwsKinesisFirehoseDeliveryStreamArgsElasticsearchConfigurationVpcConfig;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationdeserializerHiveJsonSerDe {
  timestamp_formats?: string[];
}
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationdeserializerOpenXJsonSerDe {
  case_insensitive?: boolean;
  column_to_json_key_mappings?: {
    [key: string]: string;
  };
  convert_dots_in_json_keys_to_underscores?: boolean;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationdeserializer {
  hive_json_ser_de: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationdeserializerHiveJsonSerDe;
  open_x_json_ser_de: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationdeserializerOpenXJsonSerDe;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration {
  deserializer: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationdeserializer;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationserializerOrcSerDe {
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
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationserializerParquetSerDe {
  block_size_bytes?: number;
  compression?: string;
  enable_dictionary_compression?: boolean;
  max_padding_bytes?: number;
  page_size_bytes?: number;
  writer_version?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationserializer {
  orc_ser_de: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationserializerOrcSerDe;
  parquet_ser_de: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationserializerParquetSerDe;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration {
  serializer: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationserializer;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration {
  database_name: string;
  role_arn: string;
  table_name: string;
  version_id?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfiguration {
  enabled?: boolean;
  input_format_configuration: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration;
  output_format_configuration: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration;
  schema_configuration: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDynamicPartitioningConfiguration {
  enabled?: boolean;
  retry_duration?: number;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationProcessingConfigurationprocessorsparameters {
  parameter_name: string;
  parameter_value: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationProcessingConfigurationprocessors {
  type: string;
  parameters: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationProcessingConfigurationprocessorsparameters;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationProcessingConfiguration {
  enabled?: boolean;
  processors: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationProcessingConfigurationprocessors;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationS3BackupConfiguration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsExtendedS3Configuration {
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
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationCloudwatchLoggingOptions;
  data_format_conversion_configuration: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDataFormatConversionConfiguration;
  dynamic_partitioning_configuration: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationDynamicPartitioningConfiguration;
  processing_configuration: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationProcessingConfiguration;
  s3_backup_configuration: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3ConfigurationS3BackupConfiguration;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationProcessingConfigurationprocessorsparameters {
  parameter_name: string;
  parameter_value: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationProcessingConfigurationprocessors {
  type: string;
  parameters: AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationProcessingConfigurationprocessorsparameters;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationProcessingConfiguration {
  enabled?: boolean;
  processors: AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationProcessingConfigurationprocessors;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationRequestConfigurationCommonAttributes {
  name: string;
  value: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationRequestConfiguration {
  content_encoding?: string;
  common_attributes: AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationRequestConfigurationCommonAttributes;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationS3Configuration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationSecretsManagerConfiguration {
  role_arn?: string;
  secret_arn?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfiguration {
  access_key?: string;
  buffering_interval?: number;
  buffering_size?: number;
  name?: string;
  retry_duration?: number;
  role_arn?: string;
  s3_backup_mode?: string;
  url: string;
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationCloudwatchLoggingOptions;
  processing_configuration: AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationProcessingConfiguration;
  request_configuration: AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationRequestConfiguration;
  s3_configuration: AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationS3Configuration;
  secrets_manager_configuration: AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfigurationSecretsManagerConfiguration;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsIcebergConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsIcebergConfigurationDestinationTableConfiguration {
  database_name: string;
  s3_error_output_prefix?: string;
  table_name: string;
  unique_keys?: string[];
}
export interface AwsKinesisFirehoseDeliveryStreamArgsIcebergConfigurationProcessingConfigurationprocessorsparameters {
  parameter_name: string;
  parameter_value: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsIcebergConfigurationProcessingConfigurationprocessors {
  type: string;
  parameters: AwsKinesisFirehoseDeliveryStreamArgsIcebergConfigurationProcessingConfigurationprocessorsparameters;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsIcebergConfigurationProcessingConfiguration {
  enabled?: boolean;
  processors: AwsKinesisFirehoseDeliveryStreamArgsIcebergConfigurationProcessingConfigurationprocessors;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsIcebergConfigurationS3Configuration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsIcebergConfiguration {
  buffering_interval?: number;
  buffering_size?: number;
  catalog_arn: string;
  retry_duration?: number;
  role_arn: string;
  s3_backup_mode?: string;
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsIcebergConfigurationCloudwatchLoggingOptions;
  destination_table_configuration: AwsKinesisFirehoseDeliveryStreamArgsIcebergConfigurationDestinationTableConfiguration;
  processing_configuration: AwsKinesisFirehoseDeliveryStreamArgsIcebergConfigurationProcessingConfiguration;
  s3_configuration: AwsKinesisFirehoseDeliveryStreamArgsIcebergConfigurationS3Configuration;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsKinesisSourceConfiguration {
  kinesis_stream_arn: string;
  role_arn: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsMskSourceConfigurationAuthenticationConfiguration {
  connectivity: string;
  role_arn: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsMskSourceConfiguration {
  msk_cluster_arn: string;
  topic_name: string;
  authentication_configuration: AwsKinesisFirehoseDeliveryStreamArgsMskSourceConfigurationAuthenticationConfiguration;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfigurationDocumentIdOptions {
  default_document_id_format: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfigurationProcessingConfigurationprocessorsparameters {
  parameter_name: string;
  parameter_value: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfigurationProcessingConfigurationprocessors {
  type: string;
  parameters: AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfigurationProcessingConfigurationprocessorsparameters;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfigurationProcessingConfiguration {
  enabled?: boolean;
  processors: AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfigurationProcessingConfigurationprocessors;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfigurationS3Configuration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfigurationVpcConfig {
  role_arn: string;
  security_group_ids: string[];
  subnet_ids: string[];
}
export interface AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfiguration {
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
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfigurationCloudwatchLoggingOptions;
  document_id_options: AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfigurationDocumentIdOptions;
  processing_configuration: AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfigurationProcessingConfiguration;
  s3_configuration: AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfigurationS3Configuration;
  vpc_config: AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfigurationVpcConfig;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsOpensearchserverlessConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsOpensearchserverlessConfigurationProcessingConfigurationprocessorsparameters {
  parameter_name: string;
  parameter_value: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsOpensearchserverlessConfigurationProcessingConfigurationprocessors {
  type: string;
  parameters: AwsKinesisFirehoseDeliveryStreamArgsOpensearchserverlessConfigurationProcessingConfigurationprocessorsparameters;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsOpensearchserverlessConfigurationProcessingConfiguration {
  enabled?: boolean;
  processors: AwsKinesisFirehoseDeliveryStreamArgsOpensearchserverlessConfigurationProcessingConfigurationprocessors;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsOpensearchserverlessConfigurationS3Configuration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsOpensearchserverlessConfigurationVpcConfig {
  role_arn: string;
  security_group_ids: string[];
  subnet_ids: string[];
}
export interface AwsKinesisFirehoseDeliveryStreamArgsOpensearchserverlessConfiguration {
  buffering_interval?: number;
  buffering_size?: number;
  collection_endpoint: string;
  index_name: string;
  retry_duration?: number;
  role_arn: string;
  s3_backup_mode?: string;
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsOpensearchserverlessConfigurationCloudwatchLoggingOptions;
  processing_configuration: AwsKinesisFirehoseDeliveryStreamArgsOpensearchserverlessConfigurationProcessingConfiguration;
  s3_configuration: AwsKinesisFirehoseDeliveryStreamArgsOpensearchserverlessConfigurationS3Configuration;
  vpc_config: AwsKinesisFirehoseDeliveryStreamArgsOpensearchserverlessConfigurationVpcConfig;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationProcessingConfigurationprocessorsparameters {
  parameter_name: string;
  parameter_value: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationProcessingConfigurationprocessors {
  type: string;
  parameters: AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationProcessingConfigurationprocessorsparameters;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationProcessingConfiguration {
  enabled?: boolean;
  processors: AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationProcessingConfigurationprocessors;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationS3BackupConfiguration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationS3Configuration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationSecretsManagerConfiguration {
  role_arn?: string;
  secret_arn?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfiguration {
  cluster_jdbcurl: string;
  copy_options?: string;
  data_table_columns?: string;
  data_table_name: string;
  password?: string;
  retry_duration?: number;
  role_arn: string;
  s3_backup_mode?: string;
  username?: string;
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationCloudwatchLoggingOptions;
  processing_configuration: AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationProcessingConfiguration;
  s3_backup_configuration: AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationS3BackupConfiguration;
  s3_configuration: AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationS3Configuration;
  secrets_manager_configuration: AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationSecretsManagerConfiguration;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsServerSideEncryption {
  enabled?: boolean;
  key_arn?: string;
  key_type?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationProcessingConfigurationprocessorsparameters {
  parameter_name: string;
  parameter_value: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationProcessingConfigurationprocessors {
  type: string;
  parameters: AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationProcessingConfigurationprocessorsparameters;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationProcessingConfiguration {
  enabled?: boolean;
  processors: AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationProcessingConfigurationprocessors;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationS3Configuration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationSecretsManagerConfiguration {
  role_arn?: string;
  secret_arn?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationSnowflakeRoleConfiguration {
  enabled?: boolean;
  snowflake_role?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationSnowflakeVpcConfiguration {
  private_link_vpce_id: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfiguration {
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
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationCloudwatchLoggingOptions;
  processing_configuration: AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationProcessingConfiguration;
  s3_configuration: AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationS3Configuration;
  secrets_manager_configuration: AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationSecretsManagerConfiguration;
  snowflake_role_configuration: AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationSnowflakeRoleConfiguration;
  snowflake_vpc_configuration: AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfigurationSnowflakeVpcConfiguration;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSplunkConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSplunkConfigurationProcessingConfigurationprocessorsparameters {
  parameter_name: string;
  parameter_value: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSplunkConfigurationProcessingConfigurationprocessors {
  type: string;
  parameters: AwsKinesisFirehoseDeliveryStreamArgsSplunkConfigurationProcessingConfigurationprocessorsparameters;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSplunkConfigurationProcessingConfiguration {
  enabled?: boolean;
  processors: AwsKinesisFirehoseDeliveryStreamArgsSplunkConfigurationProcessingConfigurationprocessors;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions {
  enabled?: boolean;
  log_group_name?: string;
  log_stream_name?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSplunkConfigurationS3Configuration {
  bucket_arn: string;
  buffering_interval?: number;
  buffering_size?: number;
  compression_format?: string;
  error_output_prefix?: string;
  kms_key_arn?: string;
  prefix?: string;
  role_arn: string;
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSplunkConfigurationSecretsManagerConfiguration {
  role_arn?: string;
  secret_arn?: string;
}
export interface AwsKinesisFirehoseDeliveryStreamArgsSplunkConfiguration {
  buffering_interval?: number;
  buffering_size?: number;
  hec_acknowledgment_timeout?: number;
  hec_endpoint: string;
  hec_endpoint_type?: string;
  hec_token?: string;
  retry_duration?: number;
  s3_backup_mode?: string;
  cloudwatch_logging_options: AwsKinesisFirehoseDeliveryStreamArgsSplunkConfigurationCloudwatchLoggingOptions;
  processing_configuration: AwsKinesisFirehoseDeliveryStreamArgsSplunkConfigurationProcessingConfiguration;
  s3_configuration: AwsKinesisFirehoseDeliveryStreamArgsSplunkConfigurationS3Configuration;
  secrets_manager_configuration: AwsKinesisFirehoseDeliveryStreamArgsSplunkConfigurationSecretsManagerConfiguration;
}
export interface AwsKinesisFirehoseDeliveryStreamArgstimeouts {
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
  elasticsearch_configuration: AwsKinesisFirehoseDeliveryStreamArgsElasticsearchConfiguration;
  extended_s3_configuration: AwsKinesisFirehoseDeliveryStreamArgsExtendedS3Configuration;
  http_endpoint_configuration: AwsKinesisFirehoseDeliveryStreamArgsHttpEndpointConfiguration;
  iceberg_configuration: AwsKinesisFirehoseDeliveryStreamArgsIcebergConfiguration;
  kinesis_source_configuration: AwsKinesisFirehoseDeliveryStreamArgsKinesisSourceConfiguration;
  msk_source_configuration: AwsKinesisFirehoseDeliveryStreamArgsMskSourceConfiguration;
  opensearch_configuration: AwsKinesisFirehoseDeliveryStreamArgsOpensearchConfiguration;
  opensearchserverless_configuration: AwsKinesisFirehoseDeliveryStreamArgsOpensearchserverlessConfiguration;
  redshift_configuration: AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfiguration;
  server_side_encryption: AwsKinesisFirehoseDeliveryStreamArgsServerSideEncryption;
  snowflake_configuration: AwsKinesisFirehoseDeliveryStreamArgsSnowflakeConfiguration;
  splunk_configuration: AwsKinesisFirehoseDeliveryStreamArgsSplunkConfiguration;
  timeouts: AwsKinesisFirehoseDeliveryStreamArgstimeouts;
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