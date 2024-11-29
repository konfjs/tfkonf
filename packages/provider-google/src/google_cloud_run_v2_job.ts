import { TerraformConfig, TerraformResource } from "tfs";
export interface BinaryAuthorization {
  breakglass_justification?: string;
  policy?: string;
  use_default?: boolean;
}
export interface SecretKeyRef {
  secret: string;
  version: string;
}
export interface ValueSource {
  secret_key_ref: SecretKeyRef;
}
export interface Env {
  name: string;
  value?: string;
  value_source: ValueSource;
}
export interface Ports {
  container_port?: number;
  name?: string;
}
export interface Resources {}
export interface VolumeMounts {
  mount_path: string;
  name: string;
}
export interface Containers {
  args?: string[];
  command?: string[];
  image: string;
  name?: string;
  working_dir?: string;
  env: Env;
  ports: Ports;
  resources: Resources;
  volume_mounts: VolumeMounts;
}
export interface CloudSqlInstance {
  instances?: string[];
}
export interface EmptyDir {
  medium?: string;
  size_limit?: string;
}
export interface Gcs {
  bucket: string;
  read_only?: boolean;
}
export interface Nfs {
  path?: string;
  read_only?: boolean;
  server: string;
}
export interface Items {
  mode?: number;
  path: string;
  version: string;
}
export interface Secret {
  default_mode?: number;
  secret: string;
  items: Items;
}
export interface Volumes {
  name: string;
  cloud_sql_instance: CloudSqlInstance;
  empty_dir: EmptyDir;
  gcs: Gcs;
  nfs: Nfs;
  secret: Secret;
}
export interface NetworkInterfaces {
  tags?: string[];
}
export interface VpcAccess {
  connector?: string;
  network_interfaces: NetworkInterfaces;
}
export interface Template {
  encryption_key?: string;
  max_retries?: number;
  containers: Containers;
  volumes: Volumes;
  vpc_access: VpcAccess;
}
export interface Template {
  annotations?: {
    [key: string]: string;
  };
  labels?: {
    [key: string]: string;
  };
  template: Template;
}
export interface Timeouts {
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
  binary_authorization: BinaryAuthorization;
  template: Template;
  timeouts: Timeouts;
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