import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsKinesisAnalyticsApplicationArgsCloudwatchLoggingOptions {
  log_stream_arn: string;
  role_arn: string;
}
export interface AwsKinesisAnalyticsApplicationArgsinputsKinesisFirehose {
  resource_arn: string;
  role_arn: string;
}
export interface AwsKinesisAnalyticsApplicationArgsinputsKinesisStream {
  resource_arn: string;
  role_arn: string;
}
export interface AwsKinesisAnalyticsApplicationArgsinputsparallelism {}
export interface AwsKinesisAnalyticsApplicationArgsinputsProcessingConfigurationlambda {
  resource_arn: string;
  role_arn: string;
}
export interface AwsKinesisAnalyticsApplicationArgsinputsProcessingConfiguration {
  lambda: AwsKinesisAnalyticsApplicationArgsinputsProcessingConfigurationlambda;
}
export interface AwsKinesisAnalyticsApplicationArgsinputsschemaRecordColumns {
  mapping?: string;
  name: string;
  sql_type: string;
}
export interface AwsKinesisAnalyticsApplicationArgsinputsschemaRecordFormatMappingParameterscsv {
  record_column_delimiter: string;
  record_row_delimiter: string;
}
export interface AwsKinesisAnalyticsApplicationArgsinputsschemaRecordFormatMappingParametersjson {
  record_row_path: string;
}
export interface AwsKinesisAnalyticsApplicationArgsinputsschemaRecordFormatMappingParameters {
  csv: AwsKinesisAnalyticsApplicationArgsinputsschemaRecordFormatMappingParameterscsv;
  json: AwsKinesisAnalyticsApplicationArgsinputsschemaRecordFormatMappingParametersjson;
}
export interface AwsKinesisAnalyticsApplicationArgsinputsschemaRecordFormat {
  mapping_parameters: AwsKinesisAnalyticsApplicationArgsinputsschemaRecordFormatMappingParameters;
}
export interface AwsKinesisAnalyticsApplicationArgsinputsschema {
  record_encoding?: string;
  record_columns: AwsKinesisAnalyticsApplicationArgsinputsschemaRecordColumns;
  record_format: AwsKinesisAnalyticsApplicationArgsinputsschemaRecordFormat;
}
export interface AwsKinesisAnalyticsApplicationArgsinputsStartingPositionConfiguration {}
export interface AwsKinesisAnalyticsApplicationArgsinputs {
  name_prefix: string;
  kinesis_firehose: AwsKinesisAnalyticsApplicationArgsinputsKinesisFirehose;
  kinesis_stream: AwsKinesisAnalyticsApplicationArgsinputsKinesisStream;
  parallelism: AwsKinesisAnalyticsApplicationArgsinputsparallelism;
  processing_configuration: AwsKinesisAnalyticsApplicationArgsinputsProcessingConfiguration;
  schema: AwsKinesisAnalyticsApplicationArgsinputsschema;
  starting_position_configuration: AwsKinesisAnalyticsApplicationArgsinputsStartingPositionConfiguration;
}
export interface AwsKinesisAnalyticsApplicationArgsoutputsKinesisFirehose {
  resource_arn: string;
  role_arn: string;
}
export interface AwsKinesisAnalyticsApplicationArgsoutputsKinesisStream {
  resource_arn: string;
  role_arn: string;
}
export interface AwsKinesisAnalyticsApplicationArgsoutputslambda {
  resource_arn: string;
  role_arn: string;
}
export interface AwsKinesisAnalyticsApplicationArgsoutputsschema {
  record_format_type: string;
}
export interface AwsKinesisAnalyticsApplicationArgsoutputs {
  name: string;
  kinesis_firehose: AwsKinesisAnalyticsApplicationArgsoutputsKinesisFirehose;
  kinesis_stream: AwsKinesisAnalyticsApplicationArgsoutputsKinesisStream;
  lambda: AwsKinesisAnalyticsApplicationArgsoutputslambda;
  schema: AwsKinesisAnalyticsApplicationArgsoutputsschema;
}
export interface AwsKinesisAnalyticsApplicationArgsReferenceDataSourcess3 {
  bucket_arn: string;
  file_key: string;
  role_arn: string;
}
export interface AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesschemaRecordColumns {
  mapping?: string;
  name: string;
  sql_type: string;
}
export interface AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesschemaRecordFormatMappingParameterscsv {
  record_column_delimiter: string;
  record_row_delimiter: string;
}
export interface AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesschemaRecordFormatMappingParametersjson {
  record_row_path: string;
}
export interface AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesschemaRecordFormatMappingParameters {
  csv: AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesschemaRecordFormatMappingParameterscsv;
  json: AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesschemaRecordFormatMappingParametersjson;
}
export interface AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesschemaRecordFormat {
  mapping_parameters: AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesschemaRecordFormatMappingParameters;
}
export interface AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesschema {
  record_encoding?: string;
  record_columns: AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesschemaRecordColumns;
  record_format: AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesschemaRecordFormat;
}
export interface AwsKinesisAnalyticsApplicationArgsReferenceDataSources {
  table_name: string;
  s3: AwsKinesisAnalyticsApplicationArgsReferenceDataSourcess3;
  schema: AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesschema;
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
  inputs: AwsKinesisAnalyticsApplicationArgsinputs;
  outputs: AwsKinesisAnalyticsApplicationArgsoutputs;
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