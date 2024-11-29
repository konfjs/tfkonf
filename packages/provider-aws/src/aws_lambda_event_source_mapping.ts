import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLambdaEventSourceMappingArgsAmazonManagedKafkaEventSourceConfig {}
export interface AwsLambdaEventSourceMappingArgsDestinationConfigOnFailure {
  destination_arn: string;
}
export interface AwsLambdaEventSourceMappingArgsDestinationConfig {
  on_failure: AwsLambdaEventSourceMappingArgsDestinationConfigOnFailure;
}
export interface AwsLambdaEventSourceMappingArgsDocumentDbEventSourceConfig {
  collection_name?: string;
  database_name: string;
  full_document?: string;
}
export interface AwsLambdaEventSourceMappingArgsFilterCriteriaFilter {
  pattern?: string;
}
export interface AwsLambdaEventSourceMappingArgsFilterCriteria {
  filter: AwsLambdaEventSourceMappingArgsFilterCriteriaFilter;
}
export interface AwsLambdaEventSourceMappingArgsScalingConfig {
  maximum_concurrency?: number;
}
export interface AwsLambdaEventSourceMappingArgsSelfManagedEventSource {
  endpoints: {
    [key: string]: string;
  };
}
export interface AwsLambdaEventSourceMappingArgsSelfManagedKafkaEventSourceConfig {}
export interface AwsLambdaEventSourceMappingArgsSourceAccessConfiguration {
  type: string;
  uri: string;
}
export interface AwsLambdaEventSourceMappingArgs {
  batch_size?: number;
  bisect_batch_on_function_error?: boolean;
  enabled?: boolean;
  event_source_arn?: string;
  function_name: string;
  function_response_types?: string[];
  kms_key_arn?: string;
  maximum_batching_window_in_seconds?: number;
  queues?: string[];
  starting_position?: string;
  starting_position_timestamp?: string;
  tags?: {
    [key: string]: string;
  };
  topics?: string[];
  tumbling_window_in_seconds?: number;
  amazon_managed_kafka_event_source_config: AwsLambdaEventSourceMappingArgsAmazonManagedKafkaEventSourceConfig;
  destination_config: AwsLambdaEventSourceMappingArgsDestinationConfig;
  document_db_event_source_config: AwsLambdaEventSourceMappingArgsDocumentDbEventSourceConfig;
  filter_criteria: AwsLambdaEventSourceMappingArgsFilterCriteria;
  scaling_config: AwsLambdaEventSourceMappingArgsScalingConfig;
  self_managed_event_source: AwsLambdaEventSourceMappingArgsSelfManagedEventSource;
  self_managed_kafka_event_source_config: AwsLambdaEventSourceMappingArgsSelfManagedKafkaEventSourceConfig;
  source_access_configuration: AwsLambdaEventSourceMappingArgsSourceAccessConfiguration;
}
export class aws_lambda_event_source_mapping extends TerraformResource {
  readonly arn!: string;
  readonly function_arn!: string;
  readonly id?: string;
  readonly last_modified!: string;
  readonly last_processing_result!: string;
  readonly maximum_record_age_in_seconds?: number;
  readonly maximum_retry_attempts?: number;
  readonly parallelization_factor?: number;
  readonly state!: string;
  readonly state_transition_reason!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly uuid!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLambdaEventSourceMappingArgs) {
    super(config, "resource", args, resourceName, "aws_lambda_event_source_mapping");
  }
}