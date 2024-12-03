import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsKinesisAnalyticsApplicationArgsCloudwatchLoggingOptions {
  log_stream_arn: string;
  role_arn: string;
}
export interface AwsKinesisAnalyticsApplicationArgsInputsKinesisFirehose {
  resource_arn: string;
  role_arn: string;
}
export interface AwsKinesisAnalyticsApplicationArgsInputsKinesisStream {
  resource_arn: string;
  role_arn: string;
}
export interface AwsKinesisAnalyticsApplicationArgsInputsParallelism {}
export interface AwsKinesisAnalyticsApplicationArgsInputsProcessingConfigurationLambda {
  resource_arn: string;
  role_arn: string;
}
export interface AwsKinesisAnalyticsApplicationArgsInputsProcessingConfiguration {
  lambda: AwsKinesisAnalyticsApplicationArgsInputsProcessingConfigurationLambda;
}
export interface AwsKinesisAnalyticsApplicationArgsInputsSchemaRecordColumns {
  mapping?: string;
  name: string;
  sql_type: string;
}
export interface AwsKinesisAnalyticsApplicationArgsInputsSchemaRecordFormatMappingParametersCsv {
  record_column_delimiter: string;
  record_row_delimiter: string;
}
export interface AwsKinesisAnalyticsApplicationArgsInputsSchemaRecordFormatMappingParametersJson {
  record_row_path: string;
}
export interface AwsKinesisAnalyticsApplicationArgsInputsSchemaRecordFormatMappingParameters {
  csv: AwsKinesisAnalyticsApplicationArgsInputsSchemaRecordFormatMappingParametersCsv;
  json: AwsKinesisAnalyticsApplicationArgsInputsSchemaRecordFormatMappingParametersJson;
}
export interface AwsKinesisAnalyticsApplicationArgsInputsSchemaRecordFormat {
  mapping_parameters: AwsKinesisAnalyticsApplicationArgsInputsSchemaRecordFormatMappingParameters;
}
export interface AwsKinesisAnalyticsApplicationArgsInputsSchema {
  record_encoding?: string;
  record_columns: AwsKinesisAnalyticsApplicationArgsInputsSchemaRecordColumns;
  record_format: AwsKinesisAnalyticsApplicationArgsInputsSchemaRecordFormat;
}
export interface AwsKinesisAnalyticsApplicationArgsInputsStartingPositionConfiguration {}
export interface AwsKinesisAnalyticsApplicationArgsInputs {
  name_prefix: string;
  kinesis_firehose: AwsKinesisAnalyticsApplicationArgsInputsKinesisFirehose;
  kinesis_stream: AwsKinesisAnalyticsApplicationArgsInputsKinesisStream;
  parallelism: AwsKinesisAnalyticsApplicationArgsInputsParallelism;
  processing_configuration: AwsKinesisAnalyticsApplicationArgsInputsProcessingConfiguration;
  schema: AwsKinesisAnalyticsApplicationArgsInputsSchema;
  starting_position_configuration: AwsKinesisAnalyticsApplicationArgsInputsStartingPositionConfiguration;
}
export interface AwsKinesisAnalyticsApplicationArgsOutputsKinesisFirehose {
  resource_arn: string;
  role_arn: string;
}
export interface AwsKinesisAnalyticsApplicationArgsOutputsKinesisStream {
  resource_arn: string;
  role_arn: string;
}
export interface AwsKinesisAnalyticsApplicationArgsOutputsLambda {
  resource_arn: string;
  role_arn: string;
}
export interface AwsKinesisAnalyticsApplicationArgsOutputsSchema {
  record_format_type: string;
}
export interface AwsKinesisAnalyticsApplicationArgsOutputs {
  name: string;
  kinesis_firehose: AwsKinesisAnalyticsApplicationArgsOutputsKinesisFirehose;
  kinesis_stream: AwsKinesisAnalyticsApplicationArgsOutputsKinesisStream;
  lambda: AwsKinesisAnalyticsApplicationArgsOutputsLambda;
  schema: AwsKinesisAnalyticsApplicationArgsOutputsSchema;
}
export interface AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesS3 {
  bucket_arn: string;
  file_key: string;
  role_arn: string;
}
export interface AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesSchemaRecordColumns {
  mapping?: string;
  name: string;
  sql_type: string;
}
export interface AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesSchemaRecordFormatMappingParametersCsv {
  record_column_delimiter: string;
  record_row_delimiter: string;
}
export interface AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesSchemaRecordFormatMappingParametersJson {
  record_row_path: string;
}
export interface AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesSchemaRecordFormatMappingParameters {
  csv: AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesSchemaRecordFormatMappingParametersCsv;
  json: AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesSchemaRecordFormatMappingParametersJson;
}
export interface AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesSchemaRecordFormat {
  mapping_parameters: AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesSchemaRecordFormatMappingParameters;
}
export interface AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesSchema {
  record_encoding?: string;
  record_columns: AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesSchemaRecordColumns;
  record_format: AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesSchemaRecordFormat;
}
export interface AwsKinesisAnalyticsApplicationArgsReferenceDataSources {
  table_name: string;
  s3: AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesS3;
  schema: AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesSchema;
}
export interface AwsKinesisAnalyticsApplicationArgs {
  code?: string;
  description?: string;
  name: string;
  start_application?: boolean;
  tags?: {
    [key: string]: string;
  };
  cloudwatch_logging_options: AwsKinesisAnalyticsApplicationArgsCloudwatchLoggingOptions;
  inputs: AwsKinesisAnalyticsApplicationArgsInputs;
  outputs: AwsKinesisAnalyticsApplicationArgsOutputs;
  reference_data_sources: AwsKinesisAnalyticsApplicationArgsReferenceDataSources;
}
export class aws_kinesis_analytics_application extends TerraformResource {
  readonly arn!: string;
  readonly create_timestamp!: string;
  readonly id?: string;
  readonly last_update_timestamp!: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsKinesisAnalyticsApplicationArgs) {
    super(config, "resource", args, resourceName, "aws_kinesis_analytics_application");
  }
}