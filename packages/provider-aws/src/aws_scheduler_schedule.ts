import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSchedulerScheduleArgsFlexibleTimeWindow {
  maximum_window_in_minutes?: number;
  mode: string;
}
export interface AwsSchedulerScheduleArgstargetDeadLetterConfig {
  arn: string;
}
export interface AwsSchedulerScheduleArgstargetEcsParametersCapacityProviderStrategy {
  base?: number;
  capacity_provider: string;
  weight?: number;
}
export interface AwsSchedulerScheduleArgstargetEcsParametersNetworkConfiguration {
  assign_public_ip?: boolean;
  security_groups?: string[];
  subnets: string[];
}
export interface AwsSchedulerScheduleArgstargetEcsParametersPlacementConstraints {
  expression?: string;
  type: string;
}
export interface AwsSchedulerScheduleArgstargetEcsParametersPlacementStrategy {
  field?: string;
  type: string;
}
export interface AwsSchedulerScheduleArgstargetEcsParameters {
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
  capacity_provider_strategy: AwsSchedulerScheduleArgstargetEcsParametersCapacityProviderStrategy;
  network_configuration: AwsSchedulerScheduleArgstargetEcsParametersNetworkConfiguration;
  placement_constraints: AwsSchedulerScheduleArgstargetEcsParametersPlacementConstraints;
  placement_strategy: AwsSchedulerScheduleArgstargetEcsParametersPlacementStrategy;
}
export interface AwsSchedulerScheduleArgstargetEventbridgeParameters {
  detail_type: string;
  source: string;
}
export interface AwsSchedulerScheduleArgstargetKinesisParameters {
  partition_key: string;
}
export interface AwsSchedulerScheduleArgstargetRetryPolicy {
  maximum_event_age_in_seconds?: number;
  maximum_retry_attempts?: number;
}
export interface AwsSchedulerScheduleArgstargetSagemakerPipelineParametersPipelineParameter {
  name: string;
  value: string;
}
export interface AwsSchedulerScheduleArgstargetSagemakerPipelineParameters {
  pipeline_parameter: AwsSchedulerScheduleArgstargetSagemakerPipelineParametersPipelineParameter;
}
export interface AwsSchedulerScheduleArgstargetSqsParameters {
  message_group_id?: string;
}
export interface AwsSchedulerScheduleArgstarget {
  arn: string;
  input?: string;
  role_arn: string;
  dead_letter_config: AwsSchedulerScheduleArgstargetDeadLetterConfig;
  ecs_parameters: AwsSchedulerScheduleArgstargetEcsParameters;
  eventbridge_parameters: AwsSchedulerScheduleArgstargetEventbridgeParameters;
  kinesis_parameters: AwsSchedulerScheduleArgstargetKinesisParameters;
  retry_policy: AwsSchedulerScheduleArgstargetRetryPolicy;
  sagemaker_pipeline_parameters: AwsSchedulerScheduleArgstargetSagemakerPipelineParameters;
  sqs_parameters: AwsSchedulerScheduleArgstargetSqsParameters;
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
  target: AwsSchedulerScheduleArgstarget;
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