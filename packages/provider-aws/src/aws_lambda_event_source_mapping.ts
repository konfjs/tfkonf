import { TerraformConfig, TerraformResource } from "tfs";
export interface AmazonManagedKafkaEventSourceConfig {}
export interface OnFailure {
  destination_arn: string;
}
export interface DestinationConfig {
  on_failure: OnFailure;
}
export interface DocumentDbEventSourceConfig {
  collection_name?: string;
  database_name: string;
  full_document?: string;
}
export interface Filter {
  pattern?: string;
}
export interface FilterCriteria {
  filter: Filter;
}
export interface ScalingConfig {
  maximum_concurrency?: number;
}
export interface SelfManagedEventSource {
  endpoints: {
    [key: string]: string;
  };
}
export interface SelfManagedKafkaEventSourceConfig {}
export interface SourceAccessConfiguration {
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
  amazon_managed_kafka_event_source_config: AmazonManagedKafkaEventSourceConfig;
  destination_config: DestinationConfig;
  document_db_event_source_config: DocumentDbEventSourceConfig;
  filter_criteria: FilterCriteria;
  scaling_config: ScalingConfig;
  self_managed_event_source: SelfManagedEventSource;
  self_managed_kafka_event_source_config: SelfManagedKafkaEventSourceConfig;
  source_access_configuration: SourceAccessConfiguration;
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