import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsMwaaEnvironmentArgsLoggingConfigurationDagProcessingLogs {}
export interface AwsMwaaEnvironmentArgsLoggingConfigurationSchedulerLogs {}
export interface AwsMwaaEnvironmentArgsLoggingConfigurationTaskLogs {}
export interface AwsMwaaEnvironmentArgsLoggingConfigurationWebserverLogs {}
export interface AwsMwaaEnvironmentArgsLoggingConfigurationWorkerLogs {}
export interface AwsMwaaEnvironmentArgsLoggingConfiguration {
  dag_processing_logs: AwsMwaaEnvironmentArgsLoggingConfigurationDagProcessingLogs;
  scheduler_logs: AwsMwaaEnvironmentArgsLoggingConfigurationSchedulerLogs;
  task_logs: AwsMwaaEnvironmentArgsLoggingConfigurationTaskLogs;
  webserver_logs: AwsMwaaEnvironmentArgsLoggingConfigurationWebserverLogs;
  worker_logs: AwsMwaaEnvironmentArgsLoggingConfigurationWorkerLogs;
}
export interface AwsMwaaEnvironmentArgsNetworkConfiguration {
  security_group_ids: string[];
  subnet_ids: string[];
}
export interface AwsMwaaEnvironmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsMwaaEnvironmentArgs {
  airflow_configuration_options?: {
    [key: string]: string;
  };
  dag_s3_path: string;
  execution_role_arn: string;
  kms_key?: string;
  name: string;
  plugins_s3_path?: string;
  requirements_s3_path?: string;
  source_bucket_arn: string;
  startup_script_s3_path?: string;
  tags?: {
    [key: string]: string;
  };
  logging_configuration: AwsMwaaEnvironmentArgsLoggingConfiguration;
  network_configuration: AwsMwaaEnvironmentArgsNetworkConfiguration;
  timeouts: AwsMwaaEnvironmentArgsTimeouts;
}
export class aws_mwaa_environment extends TerraformResource {
  readonly airflow_version?: string;
  readonly arn!: string;
  readonly created_at!: string;
  readonly database_vpc_endpoint_service!: string;
  readonly endpoint_management?: string;
  readonly environment_class?: string;
  readonly id?: string;
  readonly last_updated!: any[];
  readonly max_webservers?: number;
  readonly max_workers?: number;
  readonly min_webservers?: number;
  readonly min_workers?: number;
  readonly plugins_s3_object_version?: string;
  readonly requirements_s3_object_version?: string;
  readonly schedulers?: number;
  readonly service_role_arn!: string;
  readonly startup_script_s3_object_version?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly webserver_access_mode?: string;
  readonly webserver_url!: string;
  readonly webserver_vpc_endpoint_service!: string;
  readonly weekly_maintenance_window_start?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsMwaaEnvironmentArgs) {
    super(config, "resource", args, resourceName, "aws_mwaa_environment");
  }
}