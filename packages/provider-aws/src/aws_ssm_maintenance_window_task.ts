import { TerraformConfig, TerraformResource } from "tfs";
export interface Targets {
  key: string;
  values: string[];
}
export interface Parameter {
  name: string;
  values: string[];
}
export interface AutomationParameters {
  document_version?: string;
  parameter: Parameter;
}
export interface LambdaParameters {
  client_context?: string;
  payload?: string;
  qualifier?: string;
}
export interface CloudwatchConfig {
  cloudwatch_output_enabled?: boolean;
}
export interface NotificationConfig {
  notification_arn?: string;
  notification_events?: string[];
  notification_type?: string;
}
export interface Parameter {
  name: string;
  values: string[];
}
export interface RunCommandParameters {
  comment?: string;
  document_hash?: string;
  document_hash_type?: string;
  document_version?: string;
  output_s3_bucket?: string;
  output_s3_key_prefix?: string;
  service_role_arn?: string;
  timeout_seconds?: number;
  cloudwatch_config: CloudwatchConfig;
  notification_config: NotificationConfig;
  parameter: Parameter;
}
export interface StepFunctionsParameters {
  input?: string;
  name?: string;
}
export interface TaskInvocationParameters {
  automation_parameters: AutomationParameters;
  lambda_parameters: LambdaParameters;
  run_command_parameters: RunCommandParameters;
  step_functions_parameters: StepFunctionsParameters;
}
export interface AwsSsmMaintenanceWindowTaskArgs {
  cutoff_behavior?: string;
  description?: string;
  name?: string;
  priority?: number;
  task_arn: string;
  task_type: string;
  window_id: string;
  targets: Targets;
  task_invocation_parameters: TaskInvocationParameters;
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