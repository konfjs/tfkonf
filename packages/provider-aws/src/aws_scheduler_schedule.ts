import { TerraformConfig, TerraformResource } from "tfs";
export interface FlexibleTimeWindow {
  maximum_window_in_minutes?: number;
  mode: string;
}
export interface DeadLetterConfig {
  arn: string;
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
export interface PlacementConstraints {
  expression?: string;
  type: string;
}
export interface PlacementStrategy {
  field?: string;
  type: string;
}
export interface EcsParameters {
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
  placement_constraints: PlacementConstraints;
  placement_strategy: PlacementStrategy;
}
export interface EventbridgeParameters {
  detail_type: string;
  source: string;
}
export interface KinesisParameters {
  partition_key: string;
}
export interface RetryPolicy {
  maximum_event_age_in_seconds?: number;
  maximum_retry_attempts?: number;
}
export interface PipelineParameter {
  name: string;
  value: string;
}
export interface SagemakerPipelineParameters {
  pipeline_parameter: PipelineParameter;
}
export interface SqsParameters {
  message_group_id?: string;
}
export interface Target {
  arn: string;
  input?: string;
  role_arn: string;
  dead_letter_config: DeadLetterConfig;
  ecs_parameters: EcsParameters;
  eventbridge_parameters: EventbridgeParameters;
  kinesis_parameters: KinesisParameters;
  retry_policy: RetryPolicy;
  sagemaker_pipeline_parameters: SagemakerPipelineParameters;
  sqs_parameters: SqsParameters;
}
export interface AwsSchedulerScheduleArgs {
  description?: string;
  end_date?: string;
  kms_key_arn?: string;
  schedule_expression: string;
  schedule_expression_timezone?: string;
  start_date?: string;
  state?: string;
  flexible_time_window: FlexibleTimeWindow;
  target: Target;
}
export class aws_scheduler_schedule extends TerraformResource {
  readonly arn!: string;
  readonly group_name?: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSchedulerScheduleArgs) {
    super(config, "resource", args, resourceName, "aws_scheduler_schedule");
  }
}