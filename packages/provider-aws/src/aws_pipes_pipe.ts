import { TerraformConfig, TerraformResource } from "tfs";
export interface HttpParameters {
  header_parameters?: {
    [key: string]: string;
  };
  path_parameter_values?: string[];
  query_string_parameters?: {
    [key: string]: string;
  };
}
export interface EnrichmentParameters {
  input_template?: string;
  http_parameters: HttpParameters;
}
export interface CloudwatchLogsLogDestination {
  log_group_arn: string;
}
export interface FirehoseLogDestination {
  delivery_stream_arn: string;
}
export interface S3LogDestination {
  bucket_name: string;
  bucket_owner: string;
  output_format?: string;
  prefix?: string;
}
export interface LogConfiguration {
  include_execution_data?: string[];
  level: string;
  cloudwatch_logs_log_destination: CloudwatchLogsLogDestination;
  firehose_log_destination: FirehoseLogDestination;
  s3_log_destination: S3LogDestination;
}
export interface Credentials {
  basic_auth: string;
}
export interface ActivemqBrokerParameters {
  queue_name: string;
  credentials: Credentials;
}
export interface DeadLetterConfig {
  arn?: string;
}
export interface DynamodbStreamParameters {
  maximum_retry_attempts?: number;
  on_partial_batch_item_failure?: string;
  starting_position: string;
  dead_letter_config: DeadLetterConfig;
}
export interface Filter {
  pattern: string;
}
export interface FilterCriteria {
  filter: Filter;
}
export interface DeadLetterConfig {
  arn?: string;
}
export interface KinesisStreamParameters {
  maximum_retry_attempts?: number;
  on_partial_batch_item_failure?: string;
  starting_position: string;
  starting_position_timestamp?: string;
  dead_letter_config: DeadLetterConfig;
}
export interface Credentials {
  client_certificate_tls_auth?: string;
  sasl_scram_512_auth?: string;
}
export interface ManagedStreamingKafkaParameters {
  consumer_group_id?: string;
  starting_position?: string;
  topic_name: string;
  credentials: Credentials;
}
export interface Credentials {
  basic_auth: string;
}
export interface RabbitmqBrokerParameters {
  queue_name: string;
  virtual_host?: string;
  credentials: Credentials;
}
export interface Credentials {
  basic_auth?: string;
  client_certificate_tls_auth?: string;
  sasl_scram_256_auth?: string;
  sasl_scram_512_auth?: string;
}
export interface Vpc {
  security_groups?: string[];
  subnets?: string[];
}
export interface SelfManagedKafkaParameters {
  additional_bootstrap_servers?: string[];
  consumer_group_id?: string;
  server_root_ca_certificate?: string;
  starting_position?: string;
  topic_name: string;
  credentials: Credentials;
  vpc: Vpc;
}
export interface SqsQueueParameters {}
export interface SourceParameters {
  activemq_broker_parameters: ActivemqBrokerParameters;
  dynamodb_stream_parameters: DynamodbStreamParameters;
  filter_criteria: FilterCriteria;
  kinesis_stream_parameters: KinesisStreamParameters;
  managed_streaming_kafka_parameters: ManagedStreamingKafkaParameters;
  rabbitmq_broker_parameters: RabbitmqBrokerParameters;
  self_managed_kafka_parameters: SelfManagedKafkaParameters;
  sqs_queue_parameters: SqsQueueParameters;
}
export interface ArrayProperties {
  size?: number;
}
export interface Environment {
  name?: string;
  value?: string;
}
export interface ResourceRequirement {
  type: string;
  value: string;
}
export interface ContainerOverrides {
  command?: string[];
  instance_type?: string;
  environment: Environment;
  resource_requirement: ResourceRequirement;
}
export interface DependsOn {
  job_id?: string;
  type?: string;
}
export interface RetryStrategy {
  attempts?: number;
}
export interface BatchJobParameters {
  job_definition: string;
  job_name: string;
  parameters?: {
    [key: string]: string;
  };
  array_properties: ArrayProperties;
  container_overrides: ContainerOverrides;
  depends_on: DependsOn;
  retry_strategy: RetryStrategy;
}
export interface CloudwatchLogsParameters {
  log_stream_name?: string;
  timestamp?: string;
}
export interface CapacityProviderStrategy {
  base?: number;
  capacity_provider: string;
  weight?: number;
}
export interface AwsVpcConfiguration {
  assign_public_ip?: string;
  security_groups?: string[];
  subnets?: string[];
}
export interface NetworkConfiguration {
  aws_vpc_configuration: AwsVpcConfiguration;
}
export interface Environment {
  name?: string;
  value?: string;
}
export interface EnvironmentFile {
  type: string;
  value: string;
}
export interface ResourceRequirement {
  type: string;
  value: string;
}
export interface ContainerOverride {
  command?: string[];
  cpu?: number;
  memory?: number;
  memory_reservation?: number;
  name?: string;
  environment: Environment;
  environment_file: EnvironmentFile;
  resource_requirement: ResourceRequirement;
}
export interface EphemeralStorage {
  size_in_gib: number;
}
export interface InferenceAcceleratorOverride {
  device_name?: string;
  device_type?: string;
}
export interface Overrides {
  cpu?: string;
  execution_role_arn?: string;
  memory?: string;
  task_role_arn?: string;
  container_override: ContainerOverride;
  ephemeral_storage: EphemeralStorage;
  inference_accelerator_override: InferenceAcceleratorOverride;
}
export interface PlacementConstraint {
  expression?: string;
  type?: string;
}
export interface PlacementStrategy {
  field?: string;
  type?: string;
}
export interface EcsTaskParameters {
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
  capacity_provider_strategy: CapacityProviderStrategy;
  network_configuration: NetworkConfiguration;
  overrides: Overrides;
  placement_constraint: PlacementConstraint;
  placement_strategy: PlacementStrategy;
}
export interface EventbridgeEventBusParameters {
  detail_type?: string;
  endpoint_id?: string;
  resources?: string[];
  source?: string;
  time?: string;
}
export interface HttpParameters {
  header_parameters?: {
    [key: string]: string;
  };
  path_parameter_values?: string[];
  query_string_parameters?: {
    [key: string]: string;
  };
}
export interface KinesisStreamParameters {
  partition_key: string;
}
export interface LambdaFunctionParameters {
  invocation_type: string;
}
export interface RedshiftDataParameters {
  database: string;
  db_user?: string;
  secret_manager_arn?: string;
  sqls: string[];
  statement_name?: string;
  with_event?: boolean;
}
export interface PipelineParameter {
  name: string;
  value: string;
}
export interface SagemakerPipelineParameters {
  pipeline_parameter: PipelineParameter;
}
export interface SqsQueueParameters {
  message_deduplication_id?: string;
  message_group_id?: string;
}
export interface StepFunctionStateMachineParameters {
  invocation_type: string;
}
export interface TargetParameters {
  input_template?: string;
  batch_job_parameters: BatchJobParameters;
  cloudwatch_logs_parameters: CloudwatchLogsParameters;
  ecs_task_parameters: EcsTaskParameters;
  eventbridge_event_bus_parameters: EventbridgeEventBusParameters;
  http_parameters: HttpParameters;
  kinesis_stream_parameters: KinesisStreamParameters;
  lambda_function_parameters: LambdaFunctionParameters;
  redshift_data_parameters: RedshiftDataParameters;
  sagemaker_pipeline_parameters: SagemakerPipelineParameters;
  sqs_queue_parameters: SqsQueueParameters;
  step_function_state_machine_parameters: StepFunctionStateMachineParameters;
}
export interface Timeouts {
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
  enrichment_parameters: EnrichmentParameters;
  log_configuration: LogConfiguration;
  source_parameters: SourceParameters;
  target_parameters: TargetParameters;
  timeouts: Timeouts;
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