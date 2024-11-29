import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSchedulerScheduleArgsFlexibleTimeWindow {
  maximum_window_in_minutes?: number;
  mode: string;
}
export interface AwsSchedulerScheduleArgsTargetDeadLetterConfig {
  arn: string;
}
export interface AwsSchedulerScheduleArgsTargetEcsParametersCapacityProviderStrategy {
  base?: number;
  capacity_provider: string;
  weight?: number;
}
export interface AwsSchedulerScheduleArgsTargetEcsParametersNetworkConfiguration {
  assign_public_ip?: boolean;
  security_groups?: string[];
  subnets: string[];
}
export interface AwsSchedulerScheduleArgsTargetEcsParametersPlacementConstraints {
  expression?: string;
  type: string;
}
export interface AwsSchedulerScheduleArgsTargetEcsParametersPlacementStrategy {
  field?: string;
  type: string;
}
export interface AwsSchedulerScheduleArgsTargetEcsParameters {
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
  capacity_provider_strategy: AwsSchedulerScheduleArgsTargetEcsParametersCapacityProviderStrategy;
  network_configuration: AwsSchedulerScheduleArgsTargetEcsParametersNetworkConfiguration;
  placement_constraints: AwsSchedulerScheduleArgsTargetEcsParametersPlacementConstraints;
  placement_strategy: AwsSchedulerScheduleArgsTargetEcsParametersPlacementStrategy;
}
export interface AwsSchedulerScheduleArgsTargetEventbridgeParameters {
  detail_type: string;
  source: string;
}
export interface AwsSchedulerScheduleArgsTargetKinesisParameters {
  partition_key: string;
}
export interface AwsSchedulerScheduleArgsTargetRetryPolicy {
  maximum_event_age_in_seconds?: number;
  maximum_retry_attempts?: number;
}
export interface AwsSchedulerScheduleArgsTargetSagemakerPipelineParametersPipelineParameter {
  name: string;
  value: string;
}
export interface AwsSchedulerScheduleArgsTargetSagemakerPipelineParameters {
  pipeline_parameter: AwsSchedulerScheduleArgsTargetSagemakerPipelineParametersPipelineParameter;
}
export interface AwsSchedulerScheduleArgsTargetSqsParameters {
  message_group_id?: string;
}
export interface AwsSchedulerScheduleArgsTarget {
  arn: string;
  input?: string;
  role_arn: string;
  dead_letter_config: AwsSchedulerScheduleArgsTargetDeadLetterConfig;
  ecs_parameters: AwsSchedulerScheduleArgsTargetEcsParameters;
  eventbridge_parameters: AwsSchedulerScheduleArgsTargetEventbridgeParameters;
  kinesis_parameters: AwsSchedulerScheduleArgsTargetKinesisParameters;
  retry_policy: AwsSchedulerScheduleArgsTargetRetryPolicy;
  sagemaker_pipeline_parameters: AwsSchedulerScheduleArgsTargetSagemakerPipelineParameters;
  sqs_parameters: AwsSchedulerScheduleArgsTargetSqsParameters;
}
export interface AwsSchedulerScheduleArgs {
  description?: string;
  end_date?: string;
  kms_key_arn?: string;
  schedule_expression: string;
  schedule_expression_timezone?: string;
  start_date?: string;
  state?: string;
  flexible_time_window: AwsSchedulerScheduleArgsFlexibleTimeWindow;
  target: AwsSchedulerScheduleArgsTarget;
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