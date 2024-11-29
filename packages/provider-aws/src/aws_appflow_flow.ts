import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesCustomConnector {
  custom_properties?: {
    [key: string]: string;
  };
  entity_name: string;
  id_field_names?: string[];
  write_operation_type?: string;
  error_handling_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles {
  domain_name: string;
  object_type_name?: string;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesEventBridge {
  object: string;
  error_handling_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertieshoneycodeErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertieshoneycode {
  object: string;
  error_handling_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertieshoneycodeErrorHandlingConfig;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics {}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesmarketoErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesmarketo {
  object: string;
  error_handling_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesmarketoErrorHandlingConfig;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesredshiftErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesredshift {
  bucket_prefix?: string;
  intermediate_bucket_name: string;
  object: string;
  error_handling_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesredshiftErrorHandlingConfig;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiess3S3OutputFormatConfigAggregationConfig {}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiess3S3OutputFormatConfigPrefixConfig {
  prefix_format?: string;
  prefix_type?: string;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiess3S3OutputFormatConfig {
  file_type?: string;
  aggregation_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiess3S3OutputFormatConfigAggregationConfig;
  prefix_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiess3S3OutputFormatConfigPrefixConfig;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiess3 {
  bucket_name: string;
  s3_output_format_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiess3S3OutputFormatConfig;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiessalesforceErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiessalesforce {
  id_field_names?: string[];
  object: string;
  write_operation_type?: string;
  error_handling_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiessalesforceErrorHandlingConfig;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesSapoData {
  id_field_names?: string[];
  object_path: string;
  write_operation_type?: string;
  error_handling_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig;
  success_response_handling_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiessnowflakeErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiessnowflake {
  bucket_prefix?: string;
  intermediate_bucket_name: string;
  object: string;
  error_handling_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiessnowflakeErrorHandlingConfig;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesupsolverS3OutputFormatConfigAggregationConfig {
  aggregation_type?: string;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesupsolverS3OutputFormatConfigPrefixConfig {
  prefix_format?: string;
  prefix_type: string;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesupsolverS3OutputFormatConfig {
  file_type?: string;
  aggregation_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesupsolverS3OutputFormatConfigAggregationConfig;
  prefix_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesupsolverS3OutputFormatConfigPrefixConfig;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesupsolver {
  bucket_name: string;
  bucket_prefix?: string;
  s3_output_format_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesupsolverS3OutputFormatConfig;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertieszendeskErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertieszendesk {
  id_field_names?: string[];
  object: string;
  write_operation_type?: string;
  error_handling_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertieszendeskErrorHandlingConfig;
}
export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorProperties {
  custom_connector: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesCustomConnector;
  customer_profiles: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles;
  event_bridge: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesEventBridge;
  honeycode: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertieshoneycode;
  lookout_metrics: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics;
  marketo: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesmarketo;
  redshift: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesredshift;
  s3: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiess3;
  salesforce: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiessalesforce;
  sapo_data: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesSapoData;
  snowflake: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiessnowflake;
  upsolver: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesupsolver;
  zendesk: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertieszendesk;
}
export interface AwsAppflowFlowArgsDestinationFlowConfig {
  api_version?: string;
  connector_profile_name?: string;
  connector_type: string;
  destination_connector_properties: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorProperties;
}
export interface AwsAppflowFlowArgsMetadataCatalogConfigGlueDataCatalog {
  database_name: string;
  role_arn: string;
  table_prefix: string;
}
export interface AwsAppflowFlowArgsMetadataCatalogConfig {
  glue_data_catalog: AwsAppflowFlowArgsMetadataCatalogConfigGlueDataCatalog;
}
export interface AwsAppflowFlowArgsSourceFlowConfigIncrementalPullConfig {
  datetime_type_field_name?: string;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesamplitude {
  object: string;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesCustomConnector {
  custom_properties?: {
    [key: string]: string;
  };
  entity_name: string;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesdatadog {
  object: string;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesdynatrace {
  object: string;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics {
  object: string;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesInforNexus {
  object: string;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesmarketo {
  object: string;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiess3S3InputFormatConfig {
  s3_input_file_type?: string;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiess3 {
  bucket_name: string;
  bucket_prefix: string;
  s3_input_format_config: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiess3S3InputFormatConfig;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiessalesforce {
  enable_dynamic_field_update?: boolean;
  include_deleted_records?: boolean;
  object: string;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig {
  max_page_size: number;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig {
  max_page_size: number;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesSapoData {
  object_path: string;
  pagination_config: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig;
  parallelism_config: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesServiceNow {
  object: string;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiessingular {
  object: string;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesslack {
  object: string;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiestrendmicro {
  object: string;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesveeva {
  document_type?: string;
  include_all_versions?: boolean;
  include_renditions?: boolean;
  include_source_files?: boolean;
  object: string;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertieszendesk {
  object: string;
}
export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorProperties {
  amplitude: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesamplitude;
  custom_connector: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesCustomConnector;
  datadog: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesdatadog;
  dynatrace: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesdynatrace;
  google_analytics: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics;
  infor_nexus: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesInforNexus;
  marketo: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesmarketo;
  s3: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiess3;
  salesforce: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiessalesforce;
  sapo_data: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesSapoData;
  service_now: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesServiceNow;
  singular: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiessingular;
  slack: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesslack;
  trendmicro: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiestrendmicro;
  veeva: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesveeva;
  zendesk: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertieszendesk;
}
export interface AwsAppflowFlowArgsSourceFlowConfig {
  api_version?: string;
  connector_profile_name?: string;
  connector_type: string;
  incremental_pull_config: AwsAppflowFlowArgsSourceFlowConfigIncrementalPullConfig;
  source_connector_properties: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorProperties;
}
export interface AwsAppflowFlowArgstaskConnectorOperator {
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
export interface AwsAppflowFlowArgstask {
  destination_field?: string;
  task_properties?: {
    [key: string]: string;
  };
  task_type: string;
  connector_operator: AwsAppflowFlowArgstaskConnectorOperator;
}
export interface AwsAppflowFlowArgsTriggerConfigTriggerPropertiesscheduled {
  data_pull_mode?: string;
  first_execution_from?: string;
  schedule_end_time?: string;
  schedule_expression: string;
  schedule_offset?: number;
  schedule_start_time?: string;
  timezone?: string;
}
export interface AwsAppflowFlowArgsTriggerConfigTriggerProperties {
  scheduled: AwsAppflowFlowArgsTriggerConfigTriggerPropertiesscheduled;
}
export interface AwsAppflowFlowArgsTriggerConfig {
  trigger_type: string;
  trigger_properties: AwsAppflowFlowArgsTriggerConfigTriggerProperties;
}
export interface AwsAppflowFlowArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  destination_flow_config: AwsAppflowFlowArgsDestinationFlowConfig;
  metadata_catalog_config: AwsAppflowFlowArgsMetadataCatalogConfig;
  source_flow_config: AwsAppflowFlowArgsSourceFlowConfig;
  task: AwsAppflowFlowArgstask;
  trigger_config: AwsAppflowFlowArgsTriggerConfig;
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