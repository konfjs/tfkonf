import { TerraformConfig, TerraformResource } from "tfs";
export interface EphemeralStorage {
  size_in_gib: number;
}
export interface InferenceAccelerator {
  device_name: string;
  device_type: string;
}
export interface PlacementConstraints {
  expression?: string;
  type: string;
}
export interface ProxyConfiguration {
  container_name: string;
  properties?: {
    [key: string]: string;
  };
  type?: string;
}
export interface RuntimePlatform {
  cpu_architecture?: string;
  operating_system_family?: string;
}
export interface DockerVolumeConfiguration {
  autoprovision?: boolean;
  driver?: string;
  driver_opts?: {
    [key: string]: string;
  };
  labels?: {
    [key: string]: string;
  };
}
export interface AuthorizationConfig {
  access_point_id?: string;
  iam?: string;
}
export interface EfsVolumeConfiguration {
  file_system_id: string;
  root_directory?: string;
  transit_encryption?: string;
  transit_encryption_port?: number;
  authorization_config: AuthorizationConfig;
}
export interface AuthorizationConfig {
  credentials_parameter: string;
  domain: string;
}
export interface FsxWindowsFileServerVolumeConfiguration {
  file_system_id: string;
  root_directory: string;
  authorization_config: AuthorizationConfig;
}
export interface Volume {
  host_path?: string;
  name: string;
  docker_volume_configuration: DockerVolumeConfiguration;
  efs_volume_configuration: EfsVolumeConfiguration;
  fsx_windows_file_server_volume_configuration: FsxWindowsFileServerVolumeConfiguration;
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
  ephemeral_storage: EphemeralStorage;
  inference_accelerator: InferenceAccelerator;
  placement_constraints: PlacementConstraints;
  proxy_configuration: ProxyConfiguration;
  runtime_platform: RuntimePlatform;
  volume: Volume;
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