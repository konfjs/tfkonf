import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEcsTaskDefinitionArgsEphemeralStorage {
  size_in_gib: number;
}
export interface AwsEcsTaskDefinitionArgsInferenceAccelerator {
  device_name: string;
  device_type: string;
}
export interface AwsEcsTaskDefinitionArgsPlacementConstraints {
  expression?: string;
  type: string;
}
export interface AwsEcsTaskDefinitionArgsProxyConfiguration {
  container_name: string;
  properties?: {
    [key: string]: string;
  };
  type?: string;
}
export interface AwsEcsTaskDefinitionArgsRuntimePlatform {
  cpu_architecture?: string;
  operating_system_family?: string;
}
export interface AwsEcsTaskDefinitionArgsvolumeDockerVolumeConfiguration {
  autoprovision?: boolean;
  driver?: string;
  driver_opts?: {
    [key: string]: string;
  };
  labels?: {
    [key: string]: string;
  };
}
export interface AwsEcsTaskDefinitionArgsvolumeEfsVolumeConfigurationAuthorizationConfig {
  access_point_id?: string;
  iam?: string;
}
export interface AwsEcsTaskDefinitionArgsvolumeEfsVolumeConfiguration {
  file_system_id: string;
  root_directory?: string;
  transit_encryption?: string;
  transit_encryption_port?: number;
  authorization_config: AwsEcsTaskDefinitionArgsvolumeEfsVolumeConfigurationAuthorizationConfig;
}
export interface AwsEcsTaskDefinitionArgsvolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig {
  credentials_parameter: string;
  domain: string;
}
export interface AwsEcsTaskDefinitionArgsvolumeFsxWindowsFileServerVolumeConfiguration {
  file_system_id: string;
  root_directory: string;
  authorization_config: AwsEcsTaskDefinitionArgsvolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig;
}
export interface AwsEcsTaskDefinitionArgsvolume {
  host_path?: string;
  name: string;
  docker_volume_configuration: AwsEcsTaskDefinitionArgsvolumeDockerVolumeConfiguration;
  efs_volume_configuration: AwsEcsTaskDefinitionArgsvolumeEfsVolumeConfiguration;
  fsx_windows_file_server_volume_configuration: AwsEcsTaskDefinitionArgsvolumeFsxWindowsFileServerVolumeConfiguration;
}
export interface AwsEcsTaskDefinitionArgs {
  container_definitions: string;
  cpu?: string;
  execution_role_arn?: string;
  family: string;
  ipc_mode?: string;
  memory?: string;
  pid_mode?: string;
  requires_compatibilities?: string[];
  skip_destroy?: boolean;
  tags?: {
    [key: string]: string;
  };
  task_role_arn?: string;
  track_latest?: boolean;
  ephemeral_storage: AwsEcsTaskDefinitionArgsEphemeralStorage;
  inference_accelerator: AwsEcsTaskDefinitionArgsInferenceAccelerator;
  placement_constraints: AwsEcsTaskDefinitionArgsPlacementConstraints;
  proxy_configuration: AwsEcsTaskDefinitionArgsProxyConfiguration;
  runtime_platform: AwsEcsTaskDefinitionArgsRuntimePlatform;
  volume: AwsEcsTaskDefinitionArgsvolume;
}
export class aws_ecs_task_definition extends TerraformResource {
  readonly arn!: string;
  readonly arn_without_revision!: string;
  readonly id?: string;
  readonly network_mode?: string;
  readonly revision!: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcsTaskDefinitionArgs) {
    super(config, "resource", args, resourceName, "aws_ecs_task_definition");
  }
}