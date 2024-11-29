import { TerraformConfig, TerraformResource } from "tfs";
export interface Configurations {
  classification?: string;
  properties?: {
    [key: string]: string;
  };
}
export interface ApplicationConfiguration {
  classification: string;
  properties?: {
    [key: string]: string;
  };
  configurations: Configurations;
}
export interface CloudWatchMonitoringConfiguration {
  log_group_name: string;
  log_stream_name_prefix?: string;
}
export interface S3MonitoringConfiguration {
  log_uri: string;
}
export interface MonitoringConfiguration {
  persistent_app_ui?: string;
  cloud_watch_monitoring_configuration: CloudWatchMonitoringConfiguration;
  s3_monitoring_configuration: S3MonitoringConfiguration;
}
export interface ConfigurationOverrides {
  application_configuration: ApplicationConfiguration;
  monitoring_configuration: MonitoringConfiguration;
}
export interface SparkSqlJobDriver {
  entry_point?: string;
  spark_sql_parameters?: string;
}
export interface SparkSubmitJobDriver {
  entry_point: string;
  entry_point_arguments?: string[];
  spark_submit_parameters?: string;
}
export interface JobDriver {
  spark_sql_job_driver: SparkSqlJobDriver;
  spark_submit_job_driver: SparkSubmitJobDriver;
}
export interface JobTemplateData {
  execution_role_arn: string;
  job_tags?: {
    [key: string]: string;
  };
  release_label: string;
  configuration_overrides: ConfigurationOverrides;
  job_driver: JobDriver;
}
export interface Timeouts {
  delete?: string;
}
export interface AwsEmrcontainersJobTemplateArgs {
  kms_key_arn?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  job_template_data: JobTemplateData;
  timeouts: Timeouts;
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