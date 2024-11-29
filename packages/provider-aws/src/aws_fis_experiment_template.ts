import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsFisExperimentTemplateArgsactionparameter {
  key: string;
  value: string;
}
export interface AwsFisExperimentTemplateArgsactiontarget {
  key: string;
  value: string;
}
export interface AwsFisExperimentTemplateArgsaction {
  action_id: string;
  description?: string;
  name: string;
  start_after?: string[];
  parameter: AwsFisExperimentTemplateArgsactionparameter;
  target: AwsFisExperimentTemplateArgsactiontarget;
}
export interface AwsFisExperimentTemplateArgsExperimentOptions {
  account_targeting?: string;
  empty_target_resolution_mode?: string;
}
export interface AwsFisExperimentTemplateArgsLogConfigurationCloudwatchLogsConfiguration {
  log_group_arn: string;
}
export interface AwsFisExperimentTemplateArgsLogConfigurationS3Configuration {
  bucket_name: string;
  prefix?: string;
}
export interface AwsFisExperimentTemplateArgsLogConfiguration {
  log_schema_version: number;
  cloudwatch_logs_configuration: AwsFisExperimentTemplateArgsLogConfigurationCloudwatchLogsConfiguration;
  s3_configuration: AwsFisExperimentTemplateArgsLogConfigurationS3Configuration;
}
export interface AwsFisExperimentTemplateArgsStopCondition {
  source: string;
  value?: string;
}
export interface AwsFisExperimentTemplateArgstargetfilter {
  path: string;
  values: string[];
}
export interface AwsFisExperimentTemplateArgstargetResourceTag {
  key: string;
  value: string;
}
export interface AwsFisExperimentTemplateArgstarget {
  name: string;
  parameters?: {
    [key: string]: string;
  };
  resource_arns?: string[];
  resource_type: string;
  selection_mode: string;
  filter: AwsFisExperimentTemplateArgstargetfilter;
  resource_tag: AwsFisExperimentTemplateArgstargetResourceTag;
}
export interface AwsFisExperimentTemplateArgstimeouts {
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
  action: AwsFisExperimentTemplateArgsaction;
  experiment_options: AwsFisExperimentTemplateArgsExperimentOptions;
  log_configuration: AwsFisExperimentTemplateArgsLogConfiguration;
  stop_condition: AwsFisExperimentTemplateArgsStopCondition;
  target: AwsFisExperimentTemplateArgstarget;
  timeouts: AwsFisExperimentTemplateArgstimeouts;
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