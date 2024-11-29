import { TerraformConfig, TerraformResource } from "tfs";
export interface LogConfiguration {
  cloud_watch_encryption_enabled?: boolean;
  cloud_watch_log_group_name?: string;
  s3_bucket_encryption_enabled?: boolean;
  s3_bucket_name?: string;
  s3_key_prefix?: string;
}
export interface ExecuteCommandConfiguration {
  kms_key_id?: string;
  logging?: string;
  log_configuration: LogConfiguration;
}
export interface ManagedStorageConfiguration {
  fargate_ephemeral_storage_kms_key_id?: string;
  kms_key_id?: string;
}
export interface Configuration {
  execute_command_configuration: ExecuteCommandConfiguration;
  managed_storage_configuration: ManagedStorageConfiguration;
}
export interface ServiceConnectDefaults {
  namespace: string;
}
export interface Setting {
  name: string;
  value: string;
}
export interface AwsEcsClusterArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  configuration: Configuration;
  service_connect_defaults: ServiceConnectDefaults;
  setting: Setting;
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