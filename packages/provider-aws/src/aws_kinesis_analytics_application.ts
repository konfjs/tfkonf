import { TerraformConfig, TerraformResource } from "tfs";
export interface CloudwatchLoggingOptions {
  log_stream_arn: string;
  role_arn: string;
}
export interface KinesisFirehose {
  resource_arn: string;
  role_arn: string;
}
export interface KinesisStream {
  resource_arn: string;
  role_arn: string;
}
export interface Parallelism {}
export interface Lambda {
  resource_arn: string;
  role_arn: string;
}
export interface ProcessingConfiguration {
  lambda: Lambda;
}
export interface RecordColumns {
  mapping?: string;
  name: string;
  sql_type: string;
}
export interface Csv {
  record_column_delimiter: string;
  record_row_delimiter: string;
}
export interface Json {
  record_row_path: string;
}
export interface MappingParameters {
  csv: Csv;
  json: Json;
}
export interface RecordFormat {
  mapping_parameters: MappingParameters;
}
export interface Schema {
  record_encoding?: string;
  record_columns: RecordColumns;
  record_format: RecordFormat;
}
export interface StartingPositionConfiguration {}
export interface Inputs {
  name_prefix: string;
  kinesis_firehose: KinesisFirehose;
  kinesis_stream: KinesisStream;
  parallelism: Parallelism;
  processing_configuration: ProcessingConfiguration;
  schema: Schema;
  starting_position_configuration: StartingPositionConfiguration;
}
export interface KinesisFirehose {
  resource_arn: string;
  role_arn: string;
}
export interface KinesisStream {
  resource_arn: string;
  role_arn: string;
}
export interface Lambda {
  resource_arn: string;
  role_arn: string;
}
export interface Schema {
  record_format_type: string;
}
export interface Outputs {
  name: string;
  kinesis_firehose: KinesisFirehose;
  kinesis_stream: KinesisStream;
  lambda: Lambda;
  schema: Schema;
}
export interface S3 {
  bucket_arn: string;
  file_key: string;
  role_arn: string;
}
export interface RecordColumns {
  mapping?: string;
  name: string;
  sql_type: string;
}
export interface Csv {
  record_column_delimiter: string;
  record_row_delimiter: string;
}
export interface Json {
  record_row_path: string;
}
export interface MappingParameters {
  csv: Csv;
  json: Json;
}
export interface RecordFormat {
  mapping_parameters: MappingParameters;
}
export interface Schema {
  record_encoding?: string;
  record_columns: RecordColumns;
  record_format: RecordFormat;
}
export interface ReferenceDataSources {
  table_name: string;
  s3: S3;
  schema: Schema;
}
export interface AwsKinesisAnalyticsApplicationArgs {
  code?: string;
  description?: string;
  name: string;
  start_application?: boolean;
  tags?: {
    [key: string]: string;
  };
  cloudwatch_logging_options: CloudwatchLoggingOptions;
  inputs: Inputs;
  outputs: Outputs;
  reference_data_sources: ReferenceDataSources;
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