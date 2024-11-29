import { TerraformConfig, TerraformResource } from "tfs";
export interface ErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface CustomConnector {
  custom_properties?: {
    [key: string]: string;
  };
  entity_name: string;
  id_field_names?: string[];
  write_operation_type?: string;
  error_handling_config: ErrorHandlingConfig;
}
export interface CustomerProfiles {
  domain_name: string;
  object_type_name?: string;
}
export interface ErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface EventBridge {
  object: string;
  error_handling_config: ErrorHandlingConfig;
}
export interface ErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface Honeycode {
  object: string;
  error_handling_config: ErrorHandlingConfig;
}
export interface LookoutMetrics {}
export interface ErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface Marketo {
  object: string;
  error_handling_config: ErrorHandlingConfig;
}
export interface ErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface Redshift {
  bucket_prefix?: string;
  intermediate_bucket_name: string;
  object: string;
  error_handling_config: ErrorHandlingConfig;
}
export interface AggregationConfig {}
export interface PrefixConfig {
  prefix_format?: string;
  prefix_type?: string;
}
export interface S3OutputFormatConfig {
  file_type?: string;
  aggregation_config: AggregationConfig;
  prefix_config: PrefixConfig;
}
export interface S3 {
  bucket_name: string;
  s3_output_format_config: S3OutputFormatConfig;
}
export interface ErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface Salesforce {
  id_field_names?: string[];
  object: string;
  write_operation_type?: string;
  error_handling_config: ErrorHandlingConfig;
}
export interface ErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface SuccessResponseHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
}
export interface SapoData {
  id_field_names?: string[];
  object_path: string;
  write_operation_type?: string;
  error_handling_config: ErrorHandlingConfig;
  success_response_handling_config: SuccessResponseHandlingConfig;
}
export interface ErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface Snowflake {
  bucket_prefix?: string;
  intermediate_bucket_name: string;
  object: string;
  error_handling_config: ErrorHandlingConfig;
}
export interface AggregationConfig {
  aggregation_type?: string;
}
export interface PrefixConfig {
  prefix_format?: string;
  prefix_type: string;
}
export interface S3OutputFormatConfig {
  file_type?: string;
  aggregation_config: AggregationConfig;
  prefix_config: PrefixConfig;
}
export interface Upsolver {
  bucket_name: string;
  bucket_prefix?: string;
  s3_output_format_config: S3OutputFormatConfig;
}
export interface ErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface Zendesk {
  id_field_names?: string[];
  object: string;
  write_operation_type?: string;
  error_handling_config: ErrorHandlingConfig;
}
export interface DestinationConnectorProperties {
  custom_connector: CustomConnector;
  customer_profiles: CustomerProfiles;
  event_bridge: EventBridge;
  honeycode: Honeycode;
  lookout_metrics: LookoutMetrics;
  marketo: Marketo;
  redshift: Redshift;
  s3: S3;
  salesforce: Salesforce;
  sapo_data: SapoData;
  snowflake: Snowflake;
  upsolver: Upsolver;
  zendesk: Zendesk;
}
export interface DestinationFlowConfig {
  api_version?: string;
  connector_profile_name?: string;
  connector_type: string;
  destination_connector_properties: DestinationConnectorProperties;
}
export interface GlueDataCatalog {
  database_name: string;
  role_arn: string;
  table_prefix: string;
}
export interface MetadataCatalogConfig {
  glue_data_catalog: GlueDataCatalog;
}
export interface IncrementalPullConfig {
  datetime_type_field_name?: string;
}
export interface Amplitude {
  object: string;
}
export interface CustomConnector {
  custom_properties?: {
    [key: string]: string;
  };
  entity_name: string;
}
export interface Datadog {
  object: string;
}
export interface Dynatrace {
  object: string;
}
export interface GoogleAnalytics {
  object: string;
}
export interface InforNexus {
  object: string;
}
export interface Marketo {
  object: string;
}
export interface S3InputFormatConfig {
  s3_input_file_type?: string;
}
export interface S3 {
  bucket_name: string;
  bucket_prefix: string;
  s3_input_format_config: S3InputFormatConfig;
}
export interface Salesforce {
  enable_dynamic_field_update?: boolean;
  include_deleted_records?: boolean;
  object: string;
}
export interface PaginationConfig {
  max_page_size: number;
}
export interface ParallelismConfig {
  max_page_size: number;
}
export interface SapoData {
  object_path: string;
  pagination_config: PaginationConfig;
  parallelism_config: ParallelismConfig;
}
export interface ServiceNow {
  object: string;
}
export interface Singular {
  object: string;
}
export interface Slack {
  object: string;
}
export interface Trendmicro {
  object: string;
}
export interface Veeva {
  document_type?: string;
  include_all_versions?: boolean;
  include_renditions?: boolean;
  include_source_files?: boolean;
  object: string;
}
export interface Zendesk {
  object: string;
}
export interface SourceConnectorProperties {
  amplitude: Amplitude;
  custom_connector: CustomConnector;
  datadog: Datadog;
  dynatrace: Dynatrace;
  google_analytics: GoogleAnalytics;
  infor_nexus: InforNexus;
  marketo: Marketo;
  s3: S3;
  salesforce: Salesforce;
  sapo_data: SapoData;
  service_now: ServiceNow;
  singular: Singular;
  slack: Slack;
  trendmicro: Trendmicro;
  veeva: Veeva;
  zendesk: Zendesk;
}
export interface SourceFlowConfig {
  api_version?: string;
  connector_profile_name?: string;
  connector_type: string;
  incremental_pull_config: IncrementalPullConfig;
  source_connector_properties: SourceConnectorProperties;
}
export interface ConnectorOperator {
  amplitude?: string;
  custom_connector?: string;
  datadog?: string;
  dynatrace?: string;
  google_analytics?: string;
  infor_nexus?: string;
  marketo?: string;
  s3?: string;
  salesforce?: string;
  sapo_data?: string;
  service_now?: string;
  singular?: string;
  slack?: string;
  trendmicro?: string;
  veeva?: string;
  zendesk?: string;
}
export interface Task {
  destination_field?: string;
  task_properties?: {
    [key: string]: string;
  };
  task_type: string;
  connector_operator: ConnectorOperator;
}
export interface Scheduled {
  data_pull_mode?: string;
  first_execution_from?: string;
  schedule_end_time?: string;
  schedule_expression: string;
  schedule_offset?: number;
  schedule_start_time?: string;
  timezone?: string;
}
export interface TriggerProperties {
  scheduled: Scheduled;
}
export interface TriggerConfig {
  trigger_type: string;
  trigger_properties: TriggerProperties;
}
export interface AwsAppflowFlowArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  destination_flow_config: DestinationFlowConfig;
  metadata_catalog_config: MetadataCatalogConfig;
  source_flow_config: SourceFlowConfig;
  task: Task;
  trigger_config: TriggerConfig;
}
export class aws_appflow_flow extends TerraformResource {
  readonly arn!: string;
  readonly flow_status!: string;
  readonly id?: string;
  readonly kms_arn?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppflowFlowArgs) {
    super(config, "resource", args, resourceName, "aws_appflow_flow");
  }
}