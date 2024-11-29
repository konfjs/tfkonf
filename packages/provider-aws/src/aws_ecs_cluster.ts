import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEcsClusterArgsConfigurationExecuteCommandConfigurationLogConfiguration {
  cloud_watch_encryption_enabled?: boolean;
  cloud_watch_log_group_name?: string;
  s3_bucket_encryption_enabled?: boolean;
  s3_bucket_name?: string;
  s3_key_prefix?: string;
}
export interface AwsEcsClusterArgsConfigurationExecuteCommandConfiguration {
  kms_key_id?: string;
  logging?: string;
  log_configuration: AwsEcsClusterArgsConfigurationExecuteCommandConfigurationLogConfiguration;
}
export interface AwsEcsClusterArgsConfigurationManagedStorageConfiguration {
  fargate_ephemeral_storage_kms_key_id?: string;
  kms_key_id?: string;
}
export interface AwsEcsClusterArgsConfiguration {
  execute_command_configuration: AwsEcsClusterArgsConfigurationExecuteCommandConfiguration;
  managed_storage_configuration: AwsEcsClusterArgsConfigurationManagedStorageConfiguration;
}
export interface AwsEcsClusterArgsServiceConnectDefaults {
  namespace: string;
}
export interface AwsEcsClusterArgsSetting {
  name: string;
  value: string;
}
export interface AwsEcsClusterArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  configuration: AwsEcsClusterArgsConfiguration;
  service_connect_defaults: AwsEcsClusterArgsServiceConnectDefaults;
  setting: AwsEcsClusterArgsSetting;
}
export class aws_ecs_cluster extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcsClusterArgs) {
    super(config, "resource", args, resourceName, "aws_ecs_cluster");
  }
}