import { TerraformConfig, TerraformResource } from "tfs";
export interface S3ContentLocation {
  bucket_arn: string;
  file_key: string;
  object_version?: string;
}
export interface CodeContent {
  text_content?: string;
  s3_content_location: S3ContentLocation;
}
export interface ApplicationCodeConfiguration {
  code_content_type: string;
  code_content: CodeContent;
}
export interface ApplicationSnapshotConfiguration {
  snapshots_enabled: boolean;
}
export interface PropertyGroup {
  property_group_id: string;
  property_map: {
    [key: string]: string;
  };
}
export interface EnvironmentProperties {
  property_group: PropertyGroup;
}
export interface CheckpointConfiguration {
  configuration_type: string;
}
export interface MonitoringConfiguration {
  configuration_type: string;
}
export interface ParallelismConfiguration {
  configuration_type: string;
}
export interface FlinkApplicationConfiguration {
  checkpoint_configuration: CheckpointConfiguration;
  monitoring_configuration: MonitoringConfiguration;
  parallelism_configuration: ParallelismConfiguration;
}
export interface ApplicationRestoreConfiguration {
  snapshot_name?: string;
}
export interface FlinkRunConfiguration {}
export interface RunConfiguration {
  application_restore_configuration: ApplicationRestoreConfiguration;
  flink_run_configuration: FlinkRunConfiguration;
}
export interface InputParallelism {}
export interface InputLambdaProcessor {
  resource_arn: string;
}
export interface InputProcessingConfiguration {
  input_lambda_processor: InputLambdaProcessor;
}
export interface RecordColumn {
  mapping?: string;
  name: string;
  sql_type: string;
}
export interface CsvMappingParameters {
  record_column_delimiter: string;
  record_row_delimiter: string;
}
export interface JsonMappingParameters {
  record_row_path: string;
}
export interface MappingParameters {
  csv_mapping_parameters: CsvMappingParameters;
  json_mapping_parameters: JsonMappingParameters;
}
export interface RecordFormat {
  record_format_type: string;
  mapping_parameters: MappingParameters;
}
export interface InputSchema {
  record_encoding?: string;
  record_column: RecordColumn;
  record_format: RecordFormat;
}
export interface InputStartingPositionConfiguration {}
export interface KinesisFirehoseInput {
  resource_arn: string;
}
export interface KinesisStreamsInput {
  resource_arn: string;
}
export interface Input {
  name_prefix: string;
  input_parallelism: InputParallelism;
  input_processing_configuration: InputProcessingConfiguration;
  input_schema: InputSchema;
  input_starting_position_configuration: InputStartingPositionConfiguration;
  kinesis_firehose_input: KinesisFirehoseInput;
  kinesis_streams_input: KinesisStreamsInput;
}
export interface DestinationSchema {
  record_format_type: string;
}
export interface KinesisFirehoseOutput {
  resource_arn: string;
}
export interface KinesisStreamsOutput {
  resource_arn: string;
}
export interface LambdaOutput {
  resource_arn: string;
}
export interface Output {
  name: string;
  destination_schema: DestinationSchema;
  kinesis_firehose_output: KinesisFirehoseOutput;
  kinesis_streams_output: KinesisStreamsOutput;
  lambda_output: LambdaOutput;
}
export interface RecordColumn {
  mapping?: string;
  name: string;
  sql_type: string;
}
export interface CsvMappingParameters {
  record_column_delimiter: string;
  record_row_delimiter: string;
}
export interface JsonMappingParameters {
  record_row_path: string;
}
export interface MappingParameters {
  csv_mapping_parameters: CsvMappingParameters;
  json_mapping_parameters: JsonMappingParameters;
}
export interface RecordFormat {
  record_format_type: string;
  mapping_parameters: MappingParameters;
}
export interface ReferenceSchema {
  record_encoding?: string;
  record_column: RecordColumn;
  record_format: RecordFormat;
}
export interface S3ReferenceDataSource {
  bucket_arn: string;
  file_key: string;
}
export interface ReferenceDataSource {
  table_name: string;
  reference_schema: ReferenceSchema;
  s3_reference_data_source: S3ReferenceDataSource;
}
export interface SqlApplicationConfiguration {
  input: Input;
  output: Output;
  reference_data_source: ReferenceDataSource;
}
export interface VpcConfiguration {
  security_group_ids: string[];
  subnet_ids: string[];
}
export interface ApplicationConfiguration {
  application_code_configuration: ApplicationCodeConfiguration;
  application_snapshot_configuration: ApplicationSnapshotConfiguration;
  environment_properties: EnvironmentProperties;
  flink_application_configuration: FlinkApplicationConfiguration;
  run_configuration: RunConfiguration;
  sql_application_configuration: SqlApplicationConfiguration;
  vpc_configuration: VpcConfiguration;
}
export interface CloudwatchLoggingOptions {
  log_stream_arn: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsKinesisanalyticsv2ApplicationArgs {
  description?: string;
  force_stop?: boolean;
  name: string;
  runtime_environment: string;
  service_execution_role: string;
  start_application?: boolean;
  tags?: {
    [key: string]: string;
  };
  application_configuration: ApplicationConfiguration;
  cloudwatch_logging_options: CloudwatchLoggingOptions;
  timeouts: Timeouts;
}
export class aws_kinesisanalyticsv2_application extends TerraformResource {
  readonly application_mode?: string;
  readonly arn!: string;
  readonly create_timestamp!: string;
  readonly id?: string;
  readonly last_update_timestamp!: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version_id!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsKinesisanalyticsv2ApplicationArgs) {
    super(config, "resource", args, resourceName, "aws_kinesisanalyticsv2_application");
  }
}