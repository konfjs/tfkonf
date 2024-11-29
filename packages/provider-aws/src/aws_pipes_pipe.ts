import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsPipesPipeArgsEnrichmentParametersHttpParameters {
  header_parameters?: {
    [key: string]: string;
  };
  path_parameter_values?: string[];
  query_string_parameters?: {
    [key: string]: string;
  };
}
export interface AwsPipesPipeArgsEnrichmentParameters {
  input_template?: string;
  http_parameters: AwsPipesPipeArgsEnrichmentParametersHttpParameters;
}
export interface AwsPipesPipeArgsLogConfigurationCloudwatchLogsLogDestination {
  log_group_arn: string;
}
export interface AwsPipesPipeArgsLogConfigurationFirehoseLogDestination {
  delivery_stream_arn: string;
}
export interface AwsPipesPipeArgsLogConfigurationS3LogDestination {
  bucket_name: string;
  bucket_owner: string;
  output_format?: string;
  prefix?: string;
}
export interface AwsPipesPipeArgsLogConfiguration {
  include_execution_data?: string[];
  level: string;
  cloudwatch_logs_log_destination: AwsPipesPipeArgsLogConfigurationCloudwatchLogsLogDestination;
  firehose_log_destination: AwsPipesPipeArgsLogConfigurationFirehoseLogDestination;
  s3_log_destination: AwsPipesPipeArgsLogConfigurationS3LogDestination;
}
export interface AwsPipesPipeArgsSourceParametersActivemqBrokerParametersCredentials {
  basic_auth: string;
}
export interface AwsPipesPipeArgsSourceParametersActivemqBrokerParameters {
  queue_name: string;
  credentials: AwsPipesPipeArgsSourceParametersActivemqBrokerParametersCredentials;
}
export interface AwsPipesPipeArgsSourceParametersDynamodbStreamParametersDeadLetterConfig {
  arn?: string;
}
export interface AwsPipesPipeArgsSourceParametersDynamodbStreamParameters {
  maximum_retry_attempts?: number;
  on_partial_batch_item_failure?: string;
  starting_position: string;
  dead_letter_config: AwsPipesPipeArgsSourceParametersDynamodbStreamParametersDeadLetterConfig;
}
export interface AwsPipesPipeArgsSourceParametersFilterCriteriaFilter {
  pattern: string;
}
export interface AwsPipesPipeArgsSourceParametersFilterCriteria {
  filter: AwsPipesPipeArgsSourceParametersFilterCriteriaFilter;
}
export interface AwsPipesPipeArgsSourceParametersKinesisStreamParametersDeadLetterConfig {
  arn?: string;
}
export interface AwsPipesPipeArgsSourceParametersKinesisStreamParameters {
  maximum_retry_attempts?: number;
  on_partial_batch_item_failure?: string;
  starting_position: string;
  starting_position_timestamp?: string;
  dead_letter_config: AwsPipesPipeArgsSourceParametersKinesisStreamParametersDeadLetterConfig;
}
export interface AwsPipesPipeArgsSourceParametersManagedStreamingKafkaParametersCredentials {
  client_certificate_tls_auth?: string;
  sasl_scram_512_auth?: string;
}
export interface AwsPipesPipeArgsSourceParametersManagedStreamingKafkaParameters {
  consumer_group_id?: string;
  starting_position?: string;
  topic_name: string;
  credentials: AwsPipesPipeArgsSourceParametersManagedStreamingKafkaParametersCredentials;
}
export interface AwsPipesPipeArgsSourceParametersRabbitmqBrokerParametersCredentials {
  basic_auth: string;
}
export interface AwsPipesPipeArgsSourceParametersRabbitmqBrokerParameters {
  queue_name: string;
  virtual_host?: string;
  credentials: AwsPipesPipeArgsSourceParametersRabbitmqBrokerParametersCredentials;
}
export interface AwsPipesPipeArgsSourceParametersSelfManagedKafkaParametersCredentials {
  basic_auth?: string;
  client_certificate_tls_auth?: string;
  sasl_scram_256_auth?: string;
  sasl_scram_512_auth?: string;
}
export interface AwsPipesPipeArgsSourceParametersSelfManagedKafkaParametersVpc {
  security_groups?: string[];
  subnets?: string[];
}
export interface AwsPipesPipeArgsSourceParametersSelfManagedKafkaParameters {
  additional_bootstrap_servers?: string[];
  consumer_group_id?: string;
  server_root_ca_certificate?: string;
  starting_position?: string;
  topic_name: string;
  credentials: AwsPipesPipeArgsSourceParametersSelfManagedKafkaParametersCredentials;
  vpc: AwsPipesPipeArgsSourceParametersSelfManagedKafkaParametersVpc;
}
export interface AwsPipesPipeArgsSourceParametersSqsQueueParameters {}
export interface AwsPipesPipeArgsSourceParameters {
  activemq_broker_parameters: AwsPipesPipeArgsSourceParametersActivemqBrokerParameters;
  dynamodb_stream_parameters: AwsPipesPipeArgsSourceParametersDynamodbStreamParameters;
  filter_criteria: AwsPipesPipeArgsSourceParametersFilterCriteria;
  kinesis_stream_parameters: AwsPipesPipeArgsSourceParametersKinesisStreamParameters;
  managed_streaming_kafka_parameters: AwsPipesPipeArgsSourceParametersManagedStreamingKafkaParameters;
  rabbitmq_broker_parameters: AwsPipesPipeArgsSourceParametersRabbitmqBrokerParameters;
  self_managed_kafka_parameters: AwsPipesPipeArgsSourceParametersSelfManagedKafkaParameters;
  sqs_queue_parameters: AwsPipesPipeArgsSourceParametersSqsQueueParameters;
}
export interface AwsPipesPipeArgsTargetParametersBatchJobParametersArrayProperties {
  size?: number;
}
export interface AwsPipesPipeArgsTargetParametersBatchJobParametersContainerOverridesEnvironment {
  name?: string;
  value?: string;
}
export interface AwsPipesPipeArgsTargetParametersBatchJobParametersContainerOverridesResourceRequirement {
  type: string;
  value: string;
}
export interface AwsPipesPipeArgsTargetParametersBatchJobParametersContainerOverrides {
  command?: string[];
  instance_type?: string;
  environment: AwsPipesPipeArgsTargetParametersBatchJobParametersContainerOverridesEnvironment;
  resource_requirement: AwsPipesPipeArgsTargetParametersBatchJobParametersContainerOverridesResourceRequirement;
}
export interface AwsPipesPipeArgsTargetParametersBatchJobParametersDependsOn {
  job_id?: string;
  type?: string;
}
export interface AwsPipesPipeArgsTargetParametersBatchJobParametersRetryStrategy {
  attempts?: number;
}
export interface AwsPipesPipeArgsTargetParametersBatchJobParameters {
  job_definition: string;
  job_name: string;
  parameters?: {
    [key: string]: string;
  };
  array_properties: AwsPipesPipeArgsTargetParametersBatchJobParametersArrayProperties;
  container_overrides: AwsPipesPipeArgsTargetParametersBatchJobParametersContainerOverrides;
  depends_on: AwsPipesPipeArgsTargetParametersBatchJobParametersDependsOn;
  retry_strategy: AwsPipesPipeArgsTargetParametersBatchJobParametersRetryStrategy;
}
export interface AwsPipesPipeArgsTargetParametersCloudwatchLogsParameters {
  log_stream_name?: string;
  timestamp?: string;
}
export interface AwsPipesPipeArgsTargetParametersEcsTaskParametersCapacityProviderStrategy {
  base?: number;
  capacity_provider: string;
  weight?: number;
}
export interface AwsPipesPipeArgsTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration {
  assign_public_ip?: string;
  security_groups?: string[];
  subnets?: string[];
}
export interface AwsPipesPipeArgsTargetParametersEcsTaskParametersNetworkConfiguration {
  aws_vpc_configuration: AwsPipesPipeArgsTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration;
}
export interface AwsPipesPipeArgsTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment {
  name?: string;
  value?: string;
}
export interface AwsPipesPipeArgsTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile {
  type: string;
  value: string;
}
export interface AwsPipesPipeArgsTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement {
  type: string;
  value: string;
}
export interface AwsPipesPipeArgsTargetParametersEcsTaskParametersOverridesContainerOverride {
  command?: string[];
  cpu?: number;
  memory?: number;
  memory_reservation?: number;
  name?: string;
  environment: AwsPipesPipeArgsTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment;
  environment_file: AwsPipesPipeArgsTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile;
  resource_requirement: AwsPipesPipeArgsTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement;
}
export interface AwsPipesPipeArgsTargetParametersEcsTaskParametersOverridesEphemeralStorage {
  size_in_gib: number;
}
export interface AwsPipesPipeArgsTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride {
  device_name?: string;
  device_type?: string;
}
export interface AwsPipesPipeArgsTargetParametersEcsTaskParametersOverrides {
  cpu?: string;
  execution_role_arn?: string;
  memory?: string;
  task_role_arn?: string;
  container_override: AwsPipesPipeArgsTargetParametersEcsTaskParametersOverridesContainerOverride;
  ephemeral_storage: AwsPipesPipeArgsTargetParametersEcsTaskParametersOverridesEphemeralStorage;
  inference_accelerator_override: AwsPipesPipeArgsTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride;
}
export interface AwsPipesPipeArgsTargetParametersEcsTaskParametersPlacementConstraint {
  expression?: string;
  type?: string;
}
export interface AwsPipesPipeArgsTargetParametersEcsTaskParametersPlacementStrategy {
  field?: string;
  type?: string;
}
export interface AwsPipesPipeArgsTargetParametersEcsTaskParameters {
  enable_ecs_managed_tags?: boolean;
  enable_execute_command?: boolean;
  group?: string;
  launch_type?: string;
  platform_version?: string;
  propagate_tags?: string;
  reference_id?: string;
  tags?: {
    [key: string]: string;
  };
  task_count?: number;
  task_definition_arn: string;
  capacity_provider_strategy: AwsPipesPipeArgsTargetParametersEcsTaskParametersCapacityProviderStrategy;
  network_configuration: AwsPipesPipeArgsTargetParametersEcsTaskParametersNetworkConfiguration;
  overrides: AwsPipesPipeArgsTargetParametersEcsTaskParametersOverrides;
  placement_constraint: AwsPipesPipeArgsTargetParametersEcsTaskParametersPlacementConstraint;
  placement_strategy: AwsPipesPipeArgsTargetParametersEcsTaskParametersPlacementStrategy;
}
export interface AwsPipesPipeArgsTargetParametersEventbridgeEventBusParameters {
  detail_type?: string;
  endpoint_id?: string;
  resources?: string[];
  source?: string;
  time?: string;
}
export interface AwsPipesPipeArgsTargetParametersHttpParameters {
  header_parameters?: {
    [key: string]: string;
  };
  path_parameter_values?: string[];
  query_string_parameters?: {
    [key: string]: string;
  };
}
export interface AwsPipesPipeArgsTargetParametersKinesisStreamParameters {
  partition_key: string;
}
export interface AwsPipesPipeArgsTargetParametersLambdaFunctionParameters {
  invocation_type: string;
}
export interface AwsPipesPipeArgsTargetParametersRedshiftDataParameters {
  database: string;
  db_user?: string;
  secret_manager_arn?: string;
  sqls: string[];
  statement_name?: string;
  with_event?: boolean;
}
export interface AwsPipesPipeArgsTargetParametersSagemakerPipelineParametersPipelineParameter {
  name: string;
  value: string;
}
export interface AwsPipesPipeArgsTargetParametersSagemakerPipelineParameters {
  pipeline_parameter: AwsPipesPipeArgsTargetParametersSagemakerPipelineParametersPipelineParameter;
}
export interface AwsPipesPipeArgsTargetParametersSqsQueueParameters {
  message_deduplication_id?: string;
  message_group_id?: string;
}
export interface AwsPipesPipeArgsTargetParametersStepFunctionStateMachineParameters {
  invocation_type: string;
}
export interface AwsPipesPipeArgsTargetParameters {
  input_template?: string;
  batch_job_parameters: AwsPipesPipeArgsTargetParametersBatchJobParameters;
  cloudwatch_logs_parameters: AwsPipesPipeArgsTargetParametersCloudwatchLogsParameters;
  ecs_task_parameters: AwsPipesPipeArgsTargetParametersEcsTaskParameters;
  eventbridge_event_bus_parameters: AwsPipesPipeArgsTargetParametersEventbridgeEventBusParameters;
  http_parameters: AwsPipesPipeArgsTargetParametersHttpParameters;
  kinesis_stream_parameters: AwsPipesPipeArgsTargetParametersKinesisStreamParameters;
  lambda_function_parameters: AwsPipesPipeArgsTargetParametersLambdaFunctionParameters;
  redshift_data_parameters: AwsPipesPipeArgsTargetParametersRedshiftDataParameters;
  sagemaker_pipeline_parameters: AwsPipesPipeArgsTargetParametersSagemakerPipelineParameters;
  sqs_queue_parameters: AwsPipesPipeArgsTargetParametersSqsQueueParameters;
  step_function_state_machine_parameters: AwsPipesPipeArgsTargetParametersStepFunctionStateMachineParameters;
}
export interface AwsPipesPipeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsPipesPipeArgs {
  description?: string;
  desired_state?: string;
  enrichment?: string;
  role_arn: string;
  source: string;
  tags?: {
    [key: string]: string;
  };
  target: string;
  enrichment_parameters: AwsPipesPipeArgsEnrichmentParameters;
  log_configuration: AwsPipesPipeArgsLogConfiguration;
  source_parameters: AwsPipesPipeArgsSourceParameters;
  target_parameters: AwsPipesPipeArgsTargetParameters;
  timeouts?: AwsPipesPipeArgsTimeouts;
}
export class aws_pipes_pipe extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsPipesPipeArgs) {
    super(config, "resource", args, resourceName, "aws_pipes_pipe");
  }
}