import { TerraformConfig, TerraformResource } from "tfs";
export interface Parameter {
  key: string;
  value: string;
}
export interface Target {
  key: string;
  value: string;
}
export interface Action {
  action_id: string;
  description?: string;
  name: string;
  start_after?: string[];
  parameter: Parameter;
  target: Target;
}
export interface ExperimentOptions {
  account_targeting?: string;
  empty_target_resolution_mode?: string;
}
export interface CloudwatchLogsConfiguration {
  log_group_arn: string;
}
export interface S3Configuration {
  bucket_name: string;
  prefix?: string;
}
export interface LogConfiguration {
  log_schema_version: number;
  cloudwatch_logs_configuration: CloudwatchLogsConfiguration;
  s3_configuration: S3Configuration;
}
export interface StopCondition {
  source: string;
  value?: string;
}
export interface Filter {
  path: string;
  values: string[];
}
export interface ResourceTag {
  key: string;
  value: string;
}
export interface Target {
  name: string;
  parameters?: {
    [key: string]: string;
  };
  resource_arns?: string[];
  resource_type: string;
  selection_mode: string;
  filter: Filter;
  resource_tag: ResourceTag;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFisExperimentTemplateArgs {
  description: string;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  action: Action;
  experiment_options: ExperimentOptions;
  log_configuration: LogConfiguration;
  stop_condition: StopCondition;
  target: Target;
  timeouts: Timeouts;
}
export class aws_fis_experiment_template extends TerraformResource {
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsFisExperimentTemplateArgs) {
    super(config, "resource", args, resourceName, "aws_fis_experiment_template");
  }
}