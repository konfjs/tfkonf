import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiescontainersenv {
  name: string;
  value: string;
}
export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiescontainersresources {
  limits?: {
    [key: string]: string;
  };
  requests?: {
    [key: string]: string;
  };
}
export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiescontainersSecurityContext {
  privileged?: boolean;
  read_only_root_file_system?: boolean;
  run_as_group?: number;
  run_as_non_root?: boolean;
  run_as_user?: number;
}
export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiescontainersVolumeMounts {
  mount_path: string;
  name: string;
  read_only?: boolean;
}
export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiescontainers {
  args?: string[];
  command?: string[];
  image: string;
  image_pull_policy?: string;
  name?: string;
  env: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiescontainersenv;
  resources: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiescontainersresources;
  security_context: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiescontainersSecurityContext;
  volume_mounts: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiescontainersVolumeMounts;
}
export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesImagePullSecret {
  name: string;
}
export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainersenv {
  name: string;
  value: string;
}
export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainersresources {
  limits?: {
    [key: string]: string;
  };
  requests?: {
    [key: string]: string;
  };
}
export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainersSecurityContext {
  privileged?: boolean;
  read_only_root_file_system?: boolean;
  run_as_group?: number;
  run_as_non_root?: boolean;
  run_as_user?: number;
}
export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainersVolumeMounts {
  mount_path: string;
  name: string;
  read_only?: boolean;
}
export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainers {
  args?: string[];
  command?: string[];
  image: string;
  image_pull_policy?: string;
  name?: string;
  env: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainersenv;
  resources: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainersresources;
  security_context: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainersSecurityContext;
  volume_mounts: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainersVolumeMounts;
}
export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesmetadata {
  labels?: {
    [key: string]: string;
  };
}
export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesvolumesEmptyDir {
  medium?: string;
  size_limit: string;
}
export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesvolumesHostPath {
  path: string;
}
export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesvolumessecret {
  optional?: boolean;
  secret_name: string;
}
export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesvolumes {
  name?: string;
  empty_dir: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesvolumesEmptyDir;
  host_path: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesvolumesHostPath;
  secret: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesvolumessecret;
}
export interface AwsBatchJobDefinitionArgsEksPropertiesPodProperties {
  dns_policy?: string;
  host_network?: boolean;
  service_account_name?: string;
  share_process_namespace?: boolean;
  containers: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiescontainers;
  image_pull_secret: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesImagePullSecret;
  init_containers: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainers;
  metadata: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesmetadata;
  volumes: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesvolumes;
}
export interface AwsBatchJobDefinitionArgsEksProperties {
  pod_properties: AwsBatchJobDefinitionArgsEksPropertiesPodProperties;
}
export interface AwsBatchJobDefinitionArgsRetryStrategyEvaluateOnExit {
  action: string;
  on_exit_code?: string;
  on_reason?: string;
  on_status_reason?: string;
}
export interface AwsBatchJobDefinitionArgsRetryStrategy {
  attempts?: number;
  evaluate_on_exit: AwsBatchJobDefinitionArgsRetryStrategyEvaluateOnExit;
}
export interface AwsBatchJobDefinitionArgstimeout {
  attempt_duration_seconds?: number;
}
export interface AwsBatchJobDefinitionArgs {
  container_properties?: string;
  deregister_on_new_revision?: boolean;
  ecs_properties?: string;
  name: string;
  node_properties?: string;
  parameters?: {
    [key: string]: string;
  };
  platform_capabilities?: string[];
  propagate_tags?: boolean;
  scheduling_priority?: number;
  tags?: {
    [key: string]: string;
  };
  type: string;
  eks_properties: AwsBatchJobDefinitionArgsEksProperties;
  retry_strategy: AwsBatchJobDefinitionArgsRetryStrategy;
  timeout: AwsBatchJobDefinitionArgstimeout;
}
export class aws_batch_job_definition extends TerraformResource {
  readonly arn!: string;
  readonly arn_prefix!: string;
  readonly id?: string;
  readonly revision!: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsBatchJobDefinitionArgs) {
    super(config, "resource", args, resourceName, "aws_batch_job_definition");
  }
}