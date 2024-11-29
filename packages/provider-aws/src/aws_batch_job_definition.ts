import { TerraformConfig, TerraformResource } from "tfs";
export interface Env {
  name: string;
  value: string;
}
export interface Resources {
  limits?: {
    [key: string]: string;
  };
  requests?: {
    [key: string]: string;
  };
}
export interface SecurityContext {
  privileged?: boolean;
  read_only_root_file_system?: boolean;
  run_as_group?: number;
  run_as_non_root?: boolean;
  run_as_user?: number;
}
export interface VolumeMounts {
  mount_path: string;
  name: string;
  read_only?: boolean;
}
export interface Containers {
  args?: string[];
  command?: string[];
  image: string;
  image_pull_policy?: string;
  name?: string;
  env: Env;
  resources: Resources;
  security_context: SecurityContext;
  volume_mounts: VolumeMounts;
}
export interface ImagePullSecret {
  name: string;
}
export interface Env {
  name: string;
  value: string;
}
export interface Resources {
  limits?: {
    [key: string]: string;
  };
  requests?: {
    [key: string]: string;
  };
}
export interface SecurityContext {
  privileged?: boolean;
  read_only_root_file_system?: boolean;
  run_as_group?: number;
  run_as_non_root?: boolean;
  run_as_user?: number;
}
export interface VolumeMounts {
  mount_path: string;
  name: string;
  read_only?: boolean;
}
export interface InitContainers {
  args?: string[];
  command?: string[];
  image: string;
  image_pull_policy?: string;
  name?: string;
  env: Env;
  resources: Resources;
  security_context: SecurityContext;
  volume_mounts: VolumeMounts;
}
export interface Metadata {
  labels?: {
    [key: string]: string;
  };
}
export interface EmptyDir {
  medium?: string;
  size_limit: string;
}
export interface HostPath {
  path: string;
}
export interface Secret {
  optional?: boolean;
  secret_name: string;
}
export interface Volumes {
  name?: string;
  empty_dir: EmptyDir;
  host_path: HostPath;
  secret: Secret;
}
export interface PodProperties {
  dns_policy?: string;
  host_network?: boolean;
  service_account_name?: string;
  share_process_namespace?: boolean;
  containers: Containers;
  image_pull_secret: ImagePullSecret;
  init_containers: InitContainers;
  metadata: Metadata;
  volumes: Volumes;
}
export interface EksProperties {
  pod_properties: PodProperties;
}
export interface EvaluateOnExit {
  action: string;
  on_exit_code?: string;
  on_reason?: string;
  on_status_reason?: string;
}
export interface RetryStrategy {
  attempts?: number;
  evaluate_on_exit: EvaluateOnExit;
}
export interface Timeout {
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
  eks_properties: EksProperties;
  retry_strategy: RetryStrategy;
  timeout: Timeout;
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