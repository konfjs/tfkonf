import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleCloudRunV2JobArgsBinaryAuthorization {
  breakglass_justification?: string;
  policy?: string;
  use_default?: boolean;
}
export interface GoogleCloudRunV2JobArgsTemplateTemplateContainersEnvValueSourceSecretKeyRef {
  secret: string;
  version: string;
}
export interface GoogleCloudRunV2JobArgsTemplateTemplateContainersEnvValueSource {
  secret_key_ref: GoogleCloudRunV2JobArgsTemplateTemplateContainersEnvValueSourceSecretKeyRef;
}
export interface GoogleCloudRunV2JobArgsTemplateTemplateContainersEnv {
  name: string;
  value?: string;
  value_source: GoogleCloudRunV2JobArgsTemplateTemplateContainersEnvValueSource;
}
export interface GoogleCloudRunV2JobArgsTemplateTemplateContainersPorts {
  container_port?: number;
  name?: string;
}
export interface GoogleCloudRunV2JobArgsTemplateTemplateContainersResources {}
export interface GoogleCloudRunV2JobArgsTemplateTemplateContainersVolumeMounts {
  mount_path: string;
  name: string;
}
export interface GoogleCloudRunV2JobArgsTemplateTemplateContainers {
  args?: string[];
  command?: string[];
  image: string;
  name?: string;
  working_dir?: string;
  env: GoogleCloudRunV2JobArgsTemplateTemplateContainersEnv;
  ports: GoogleCloudRunV2JobArgsTemplateTemplateContainersPorts;
  resources: GoogleCloudRunV2JobArgsTemplateTemplateContainersResources;
  volume_mounts: GoogleCloudRunV2JobArgsTemplateTemplateContainersVolumeMounts;
}
export interface GoogleCloudRunV2JobArgsTemplateTemplateVolumesCloudSqlInstance {
  instances?: string[];
}
export interface GoogleCloudRunV2JobArgsTemplateTemplateVolumesEmptyDir {
  medium?: string;
  size_limit?: string;
}
export interface GoogleCloudRunV2JobArgsTemplateTemplateVolumesGcs {
  bucket: string;
  read_only?: boolean;
}
export interface GoogleCloudRunV2JobArgsTemplateTemplateVolumesNfs {
  path?: string;
  read_only?: boolean;
  server: string;
}
export interface GoogleCloudRunV2JobArgsTemplateTemplateVolumesSecretItems {
  mode?: number;
  path: string;
  version: string;
}
export interface GoogleCloudRunV2JobArgsTemplateTemplateVolumesSecret {
  default_mode?: number;
  secret: string;
  items: GoogleCloudRunV2JobArgsTemplateTemplateVolumesSecretItems;
}
export interface GoogleCloudRunV2JobArgsTemplateTemplateVolumes {
  name: string;
  cloud_sql_instance: GoogleCloudRunV2JobArgsTemplateTemplateVolumesCloudSqlInstance;
  empty_dir: GoogleCloudRunV2JobArgsTemplateTemplateVolumesEmptyDir;
  gcs: GoogleCloudRunV2JobArgsTemplateTemplateVolumesGcs;
  nfs: GoogleCloudRunV2JobArgsTemplateTemplateVolumesNfs;
  secret: GoogleCloudRunV2JobArgsTemplateTemplateVolumesSecret;
}
export interface GoogleCloudRunV2JobArgsTemplateTemplateVpcAccessNetworkInterfaces {
  tags?: string[];
}
export interface GoogleCloudRunV2JobArgsTemplateTemplateVpcAccess {
  connector?: string;
  network_interfaces: GoogleCloudRunV2JobArgsTemplateTemplateVpcAccessNetworkInterfaces;
}
export interface GoogleCloudRunV2JobArgsTemplateTemplate {
  encryption_key?: string;
  max_retries?: number;
  containers: GoogleCloudRunV2JobArgsTemplateTemplateContainers;
  volumes: GoogleCloudRunV2JobArgsTemplateTemplateVolumes;
  vpc_access: GoogleCloudRunV2JobArgsTemplateTemplateVpcAccess;
}
export interface GoogleCloudRunV2JobArgsTemplate {
  annotations?: {
    [key: string]: string;
  };
  labels?: {
    [key: string]: string;
  };
  template: GoogleCloudRunV2JobArgsTemplateTemplate;
}
export interface GoogleCloudRunV2JobArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudRunV2JobArgs {
  annotations?: {
    [key: string]: string;
  };
  client?: string;
  client_version?: string;
  deletion_protection?: boolean;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  binary_authorization: GoogleCloudRunV2JobArgsBinaryAuthorization;
  template: GoogleCloudRunV2JobArgsTemplate;
  timeouts: GoogleCloudRunV2JobArgsTimeouts;
}
export class google_cloud_run_v2_job extends TerraformResource {
  readonly conditions!: any[];
  readonly create_time!: string;
  readonly creator!: string;
  readonly delete_time!: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly execution_count!: number;
  readonly expire_time!: string;
  readonly generation!: string;
  readonly id?: string;
  readonly last_modifier!: string;
  readonly latest_created_execution!: any[];
  readonly launch_stage?: string;
  readonly observed_generation!: string;
  readonly project?: string;
  readonly reconciling!: boolean;
  readonly terminal_condition!: any[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudRunV2JobArgs) {
    super(config, "resource", args, resourceName, "google_cloud_run_v2_job");
  }
}