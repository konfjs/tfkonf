import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesCustomConnector {
  custom_properties?: { [key: string]: string };
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

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesHoneycode {
  object: string;
  error_handling_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics {
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesMarketo {
  object: string;
  error_handling_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesRedshift {
  bucket_prefix?: string;
  intermediate_bucket_name: string;
  object: string;
  error_handling_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig {
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig {
  prefix_format?: string;
  prefix_type?: string;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig {
  file_type?: string;
  aggregation_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig;
  prefix_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesS3 {
  bucket_name: string;
  s3_output_format_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesSalesforce {
  id_field_names?: string[];
  object: string;
  write_operation_type?: string;
  error_handling_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig;
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

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesSnowflake {
  bucket_prefix?: string;
  intermediate_bucket_name: string;
  object: string;
  error_handling_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig {
  aggregation_type?: string;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig {
  prefix_format?: string;
  prefix_type: string;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig {
  file_type?: string;
  aggregation_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig;
  prefix_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesUpsolver {
  bucket_name: string;
  bucket_prefix?: string;
  s3_output_format_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig {
  bucket_name?: string;
  bucket_prefix?: string;
  fail_on_first_destination_error?: boolean;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesZendesk {
  id_field_names?: string[];
  object: string;
  write_operation_type?: string;
  error_handling_config: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig;
}

export interface AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorProperties {
  custom_connector: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesCustomConnector;
  customer_profiles: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles;
  event_bridge: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesEventBridge;
  honeycode: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesHoneycode;
  lookout_metrics: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics;
  marketo: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesMarketo;
  redshift: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesRedshift;
  s3: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesS3;
  salesforce: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesSalesforce;
  sapo_data: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesSapoData;
  snowflake: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesSnowflake;
  upsolver: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesUpsolver;
  zendesk: AwsAppflowFlowArgsDestinationFlowConfigDestinationConnectorPropertiesZendesk;
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

export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesAmplitude {
  object: string;
}

export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesCustomConnector {
  custom_properties?: { [key: string]: string };
  entity_name: string;
}

export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesDatadog {
  object: string;
}

export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesDynatrace {
  object: string;
}

export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics {
  object: string;
}

export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesInforNexus {
  object: string;
}

export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesMarketo {
  object: string;
}

export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig {
  s3_input_file_type?: string;
}

export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesS3 {
  bucket_name: string;
  bucket_prefix: string;
  s3_input_format_config: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig;
}

export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesSalesforce {
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

export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesSingular {
  object: string;
}

export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesSlack {
  object: string;
}

export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesTrendmicro {
  object: string;
}

export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesVeeva {
  document_type?: string;
  include_all_versions?: boolean;
  include_renditions?: boolean;
  include_source_files?: boolean;
  object: string;
}

export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesZendesk {
  object: string;
}

export interface AwsAppflowFlowArgsSourceFlowConfigSourceConnectorProperties {
  amplitude: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesAmplitude;
  custom_connector: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesCustomConnector;
  datadog: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesDatadog;
  dynatrace: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesDynatrace;
  google_analytics: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics;
  infor_nexus: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesInforNexus;
  marketo: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesMarketo;
  s3: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesS3;
  salesforce: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesSalesforce;
  sapo_data: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesSapoData;
  service_now: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesServiceNow;
  singular: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesSingular;
  slack: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesSlack;
  trendmicro: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesTrendmicro;
  veeva: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesVeeva;
  zendesk: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorPropertiesZendesk;
}

export interface AwsAppflowFlowArgsSourceFlowConfig {
  api_version?: string;
  connector_profile_name?: string;
  connector_type: string;
  incremental_pull_config: AwsAppflowFlowArgsSourceFlowConfigIncrementalPullConfig;
  source_connector_properties: AwsAppflowFlowArgsSourceFlowConfigSourceConnectorProperties;
}

export interface AwsAppflowFlowArgsTaskConnectorOperator {
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

export interface AwsAppflowFlowArgsTask {
  destination_field?: string;
  task_properties?: { [key: string]: string };
  task_type: string;
  connector_operator: AwsAppflowFlowArgsTaskConnectorOperator;
}

export interface AwsAppflowFlowArgsTriggerConfigTriggerPropertiesScheduled {
  data_pull_mode?: string;
  first_execution_from?: string;
  schedule_end_time?: string;
  schedule_expression: string;
  schedule_offset?: number;
  schedule_start_time?: string;
  timezone?: string;
}

export interface AwsAppflowFlowArgsTriggerConfigTriggerProperties {
  scheduled: AwsAppflowFlowArgsTriggerConfigTriggerPropertiesScheduled;
}

export interface AwsAppflowFlowArgsTriggerConfig {
  trigger_type: string;
  trigger_properties: AwsAppflowFlowArgsTriggerConfigTriggerProperties;
}

export interface AwsAppflowFlowArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  destination_flow_config: AwsAppflowFlowArgsDestinationFlowConfig;
  metadata_catalog_config: AwsAppflowFlowArgsMetadataCatalogConfig;
  source_flow_config: AwsAppflowFlowArgsSourceFlowConfig;
  task: AwsAppflowFlowArgsTask;
  trigger_config: AwsAppflowFlowArgsTriggerConfig;
}

export class aws_appflow_flow extends TerraformResource {
  readonly arn!: string;
  readonly flow_status!: string;
  readonly id?: string;
  readonly kms_arn?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsAppflowFlowArgs) {
    super(config, "resource", args, resourceName, "aws_appflow_flow");
  }
}
