import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesApplicationConfigurationconfigurations {
  classification?: string;
  properties?: {
    [key: string]: string;
  };
}
export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesApplicationConfiguration {
  classification: string;
  properties?: {
    [key: string]: string;
  };
  configurations: AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesApplicationConfigurationconfigurations;
}
export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration {
  log_group_name: string;
  log_stream_name_prefix?: string;
}
export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration {
  log_uri: string;
}
export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesMonitoringConfiguration {
  persistent_app_ui?: string;
  cloud_watch_monitoring_configuration: AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration;
  s3_monitoring_configuration: AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration;
}
export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverrides {
  application_configuration: AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesApplicationConfiguration;
  monitoring_configuration: AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesMonitoringConfiguration;
}
export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataJobDriverSparkSqlJobDriver {
  entry_point?: string;
  spark_sql_parameters?: string;
}
export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataJobDriverSparkSubmitJobDriver {
  entry_point: string;
  entry_point_arguments?: string[];
  spark_submit_parameters?: string;
}
export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataJobDriver {
  spark_sql_job_driver: AwsEmrcontainersJobTemplateArgsJobTemplateDataJobDriverSparkSqlJobDriver;
  spark_submit_job_driver: AwsEmrcontainersJobTemplateArgsJobTemplateDataJobDriverSparkSubmitJobDriver;
}
export interface AwsEmrcontainersJobTemplateArgsJobTemplateData {
  execution_role_arn: string;
  job_tags?: {
    [key: string]: string;
  };
  release_label: string;
  configuration_overrides: AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverrides;
  job_driver: AwsEmrcontainersJobTemplateArgsJobTemplateDataJobDriver;
}
export interface AwsEmrcontainersJobTemplateArgstimeouts {
  delete?: string;
}
export interface AwsEmrcontainersJobTemplateArgs {
  kms_key_arn?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  job_template_data: AwsEmrcontainersJobTemplateArgsJobTemplateData;
  timeouts: AwsEmrcontainersJobTemplateArgstimeouts;
}
export class aws_emrcontainers_job_template extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEmrcontainersJobTemplateArgs) {
    super(config, "resource", args, resourceName, "aws_emrcontainers_job_template");
  }
}