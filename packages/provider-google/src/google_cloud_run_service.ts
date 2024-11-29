import { TerraformConfig, TerraformResource } from "tfs";
export interface Metadata {
  annotations?: {
    [key: string]: string;
  };
  labels?: {
    [key: string]: string;
  };
}
export interface Metadata {}
export interface SecretKeyRef {
  key: string;
  name: string;
}
export interface ValueFrom {
  secret_key_ref: SecretKeyRef;
}
export interface Env {
  name?: string;
  value?: string;
  value_from: ValueFrom;
}
export interface LocalObjectReference {
  name: string;
}
export interface ConfigMapRef {
  optional?: boolean;
  local_object_reference: LocalObjectReference;
}
export interface LocalObjectReference {
  name: string;
}
export interface SecretRef {
  optional?: boolean;
  local_object_reference: LocalObjectReference;
}
export interface EnvFrom {
  prefix?: string;
  config_map_ref: ConfigMapRef;
  secret_ref: SecretRef;
}
export interface Grpc {
  service?: string;
}
export interface HttpHeaders {
  name: string;
  value?: string;
}
export interface HttpGet {
  path?: string;
  http_headers: HttpHeaders;
}
export interface LivenessProbe {
  failure_threshold?: number;
  initial_delay_seconds?: number;
  period_seconds?: number;
  timeout_seconds?: number;
  grpc: Grpc;
  http_get: HttpGet;
}
export interface Ports {
  container_port?: number;
  protocol?: string;
}
export interface Resources {
  requests?: {
    [key: string]: string;
  };
}
export interface Grpc {
  service?: string;
}
export interface HttpHeaders {
  name: string;
  value?: string;
}
export interface HttpGet {
  path?: string;
  http_headers: HttpHeaders;
}
export interface TcpSocket {}
export interface StartupProbe {
  failure_threshold?: number;
  initial_delay_seconds?: number;
  period_seconds?: number;
  timeout_seconds?: number;
  grpc: Grpc;
  http_get: HttpGet;
  tcp_socket: TcpSocket;
}
export interface VolumeMounts {
  mount_path: string;
  name: string;
}
export interface Containers {
  args?: string[];
  command?: string[];
  image: string;
  working_dir?: string;
  env: Env;
  env_from: EnvFrom;
  liveness_probe: LivenessProbe;
  ports: Ports;
  resources: Resources;
  startup_probe: StartupProbe;
  volume_mounts: VolumeMounts;
}
export interface Csi {
  driver: string;
  volume_attributes?: {
    [key: string]: string;
  };
}
export interface EmptyDir {
  medium?: string;
  size_limit?: string;
}
export interface Nfs {
  path: string;
  read_only?: boolean;
  server: string;
}
export interface Items {
  key: string;
  mode?: number;
  path: string;
}
export interface Secret {
  default_mode?: number;
  secret_name: string;
  items: Items;
}
export interface Volumes {
  name: string;
  csi: Csi;
  empty_dir: EmptyDir;
  nfs: Nfs;
  secret: Secret;
}
export interface Spec {
  containers: Containers;
  volumes: Volumes;
}
export interface Template {
  metadata: Metadata;
  spec: Spec;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface Traffic {
  latest_revision?: boolean;
  percent: number;
  revision_name?: string;
  tag?: string;
}
export interface GoogleCloudRunServiceArgs {
  autogenerate_revision_name?: boolean;
  location: string;
  name: string;
  metadata: Metadata;
  template: Template;
  timeouts: Timeouts;
  traffic: Traffic;
}
export class google_cloud_run_service extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly status!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudRunServiceArgs) {
    super(config, "resource", args, resourceName, "google_cloud_run_service");
  }
}