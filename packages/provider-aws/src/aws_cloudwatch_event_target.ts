import { TerraformConfig, TerraformResource } from "tfs";
export interface AppsyncTarget {
  graphql_operation?: string;
}
export interface BatchTarget {
  array_size?: number;
  job_attempts?: number;
  job_definition: string;
  job_name: string;
}
export interface DeadLetterConfig {
  arn?: string;
}
export interface CapacityProviderStrategy {
  base?: number;
  capacity_provider: string;
  weight?: number;
}
export interface NetworkConfiguration {
  assign_public_ip?: boolean;
  security_groups?: string[];
  subnets: string[];
}
export interface OrderedPlacementStrategy {
  field?: string;
  type: string;
}
export interface PlacementConstraint {
  expression?: string;
  type: string;
}
export interface EcsTarget {
  enable_ecs_managed_tags?: boolean;
  enable_execute_command?: boolean;
  group?: string;
  launch_type?: string;
  platform_version?: string;
  propagate_tags?: string;
  tags?: {
    [key: string]: string;
  };
  task_count?: number;
  task_definition_arn: string;
  capacity_provider_strategy: CapacityProviderStrategy;
  network_configuration: NetworkConfiguration;
  ordered_placement_strategy: OrderedPlacementStrategy;
  placement_constraint: PlacementConstraint;
}
export interface HttpTarget {
  header_parameters?: {
    [key: string]: string;
  };
  path_parameter_values?: string[];
  query_string_parameters?: {
    [key: string]: string;
  };
}
export interface InputTransformer {
  input_paths?: {
    [key: string]: string;
  };
  input_template: string;
}
export interface KinesisTarget {
  partition_key_path?: string;
}
export interface RedshiftTarget {
  database: string;
  db_user?: string;
  secrets_manager_arn?: string;
  sql?: string;
  statement_name?: string;
  with_event?: boolean;
}
export interface RetryPolicy {
  maximum_event_age_in_seconds?: number;
  maximum_retry_attempts?: number;
}
export interface RunCommandTargets {
  key: string;
  values: string[];
}
export interface PipelineParameterList {
  name: string;
  value: string;
}
export interface SagemakerPipelineTarget {
  pipeline_parameter_list: PipelineParameterList;
}
export interface SqsTarget {
  message_group_id?: string;
}
export interface AwsCloudwatchEventTargetArgs {
  arn: string;
  event_bus_name?: string;
  force_destroy?: boolean;
  input?: string;
  input_path?: string;
  role_arn?: string;
  rule: string;
  appsync_target: AppsyncTarget;
  batch_target: BatchTarget;
  dead_letter_config: DeadLetterConfig;
  ecs_target: EcsTarget;
  http_target: HttpTarget;
  input_transformer: InputTransformer;
  kinesis_target: KinesisTarget;
  redshift_target: RedshiftTarget;
  retry_policy: RetryPolicy;
  run_command_targets: RunCommandTargets;
  sagemaker_pipeline_target: SagemakerPipelineTarget;
  sqs_target: SqsTarget;
}
export class aws_cloudwatch_event_target extends TerraformResource {
  readonly id?: string;
  readonly target_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchEventTargetArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_event_target");
  }
}