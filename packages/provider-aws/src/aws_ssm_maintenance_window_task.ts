import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSsmMaintenanceWindowTaskArgsTargets {
  key: string;
  values: string[];
}
export interface AwsSsmMaintenanceWindowTaskArgsTaskInvocationParametersAutomationParametersParameter {
  name: string;
  values: string[];
}
export interface AwsSsmMaintenanceWindowTaskArgsTaskInvocationParametersAutomationParameters {
  document_version?: string;
  parameter: AwsSsmMaintenanceWindowTaskArgsTaskInvocationParametersAutomationParametersParameter;
}
export interface AwsSsmMaintenanceWindowTaskArgsTaskInvocationParametersLambdaParameters {
  client_context?: string;
  payload?: string;
  qualifier?: string;
}
export interface AwsSsmMaintenanceWindowTaskArgsTaskInvocationParametersRunCommandParametersCloudwatchConfig {
  cloudwatch_output_enabled?: boolean;
}
export interface AwsSsmMaintenanceWindowTaskArgsTaskInvocationParametersRunCommandParametersNotificationConfig {
  notification_arn?: string;
  notification_events?: string[];
  notification_type?: string;
}
export interface AwsSsmMaintenanceWindowTaskArgsTaskInvocationParametersRunCommandParametersParameter {
  name: string;
  values: string[];
}
export interface AwsSsmMaintenanceWindowTaskArgsTaskInvocationParametersRunCommandParameters {
  comment?: string;
  document_hash?: string;
  document_hash_type?: string;
  document_version?: string;
  output_s3_bucket?: string;
  output_s3_key_prefix?: string;
  service_role_arn?: string;
  timeout_seconds?: number;
  cloudwatch_config: AwsSsmMaintenanceWindowTaskArgsTaskInvocationParametersRunCommandParametersCloudwatchConfig;
  notification_config: AwsSsmMaintenanceWindowTaskArgsTaskInvocationParametersRunCommandParametersNotificationConfig;
  parameter: AwsSsmMaintenanceWindowTaskArgsTaskInvocationParametersRunCommandParametersParameter;
}
export interface AwsSsmMaintenanceWindowTaskArgsTaskInvocationParametersStepFunctionsParameters {
  input?: string;
  name?: string;
}
export interface AwsSsmMaintenanceWindowTaskArgsTaskInvocationParameters {
  automation_parameters: AwsSsmMaintenanceWindowTaskArgsTaskInvocationParametersAutomationParameters;
  lambda_parameters: AwsSsmMaintenanceWindowTaskArgsTaskInvocationParametersLambdaParameters;
  run_command_parameters: AwsSsmMaintenanceWindowTaskArgsTaskInvocationParametersRunCommandParameters;
  step_functions_parameters: AwsSsmMaintenanceWindowTaskArgsTaskInvocationParametersStepFunctionsParameters;
}
export interface AwsSsmMaintenanceWindowTaskArgs {
  cutoff_behavior?: string;
  description?: string;
  name?: string;
  priority?: number;
  task_arn: string;
  task_type: string;
  window_id: string;
  targets: AwsSsmMaintenanceWindowTaskArgsTargets;
  task_invocation_parameters: AwsSsmMaintenanceWindowTaskArgsTaskInvocationParameters;
}
export class aws_ssm_maintenance_window_task extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly max_concurrency?: string;
  readonly max_errors?: string;
  readonly service_role_arn?: string;
  readonly window_task_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmMaintenanceWindowTaskArgs) {
    super(config, "resource", args, resourceName, "aws_ssm_maintenance_window_task");
  }
}