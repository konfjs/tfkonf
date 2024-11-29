import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEcsClusterArgsconfigurationExecuteCommandConfigurationLogConfiguration {
  cloud_watch_encryption_enabled?: boolean;
  cloud_watch_log_group_name?: string;
  s3_bucket_encryption_enabled?: boolean;
  s3_bucket_name?: string;
  s3_key_prefix?: string;
}
export interface AwsEcsClusterArgsconfigurationExecuteCommandConfiguration {
  kms_key_id?: string;
  logging?: string;
  log_configuration: AwsEcsClusterArgsconfigurationExecuteCommandConfigurationLogConfiguration;
}
export interface AwsEcsClusterArgsconfigurationManagedStorageConfiguration {
  fargate_ephemeral_storage_kms_key_id?: string;
  kms_key_id?: string;
}
export interface AwsEcsClusterArgsconfiguration {
  execute_command_configuration: AwsEcsClusterArgsconfigurationExecuteCommandConfiguration;
  managed_storage_configuration: AwsEcsClusterArgsconfigurationManagedStorageConfiguration;
}
export interface AwsEcsClusterArgsServiceConnectDefaults {
  namespace: string;
}
export interface AwsEcsClusterArgssetting {
  name: string;
  value: string;
}
export interface AwsEcsClusterArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  configuration: AwsEcsClusterArgsconfiguration;
  service_connect_defaults: AwsEcsClusterArgsServiceConnectDefaults;
  setting: AwsEcsClusterArgssetting;
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