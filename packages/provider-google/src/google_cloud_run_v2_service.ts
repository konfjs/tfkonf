import { TerraformConfig, TerraformResource } from "tfs";
export interface BinaryAuthorization {
  breakglass_justification?: string;
  policy?: string;
  use_default?: boolean;
}
export interface Scaling {
  min_instance_count?: number;
}
export interface SecretKeyRef {
  secret: string;
  version?: string;
}
export interface ValueSource {
  secret_key_ref: SecretKeyRef;
}
export interface Env {
  name: string;
  value?: string;
  value_source: ValueSource;
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
export interface TcpSocket {
  port: number;
}
export interface LivenessProbe {
  failure_threshold?: number;
  initial_delay_seconds?: number;
  period_seconds?: number;
  timeout_seconds?: number;
  grpc: Grpc;
  http_get: HttpGet;
  tcp_socket: TcpSocket;
}
export interface Ports {
  container_port?: number;
}
export interface Resources {
  cpu_idle?: boolean;
  startup_cpu_boost?: boolean;
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
  depends_on?: string[];
  image: string;
  name?: string;
  working_dir?: string;
  env: Env;
  liveness_probe: LivenessProbe;
  ports: Ports;
  resources: Resources;
  startup_probe: StartupProbe;
  volume_mounts: VolumeMounts;
}
export interface Scaling {
  max_instance_count?: number;
  min_instance_count?: number;
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
  path: string;
  read_only?: boolean;
  server: string;
}
export interface Items {
  mode?: number;
  path: string;
  version?: string;
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
  annotations?: {
    [key: string]: string;
  };
  encryption_key?: string;
  execution_environment?: string;
  labels?: {
    [key: string]: string;
  };
  revision?: string;
  session_affinity?: boolean;
  containers: Containers;
  scaling: Scaling;
  volumes: Volumes;
  vpc_access: VpcAccess;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface Traffic {
  revision?: string;
  tag?: string;
  type?: string;
}
export interface GoogleCloudRunV2ServiceArgs {
  annotations?: {
    [key: string]: string;
  };
  client?: string;
  client_version?: string;
  custom_audiences?: string[];
  deletion_protection?: boolean;
  description?: string;
  invoker_iam_disabled?: boolean;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  binary_authorization: BinaryAuthorization;
  scaling: Scaling;
  template: Template;
  timeouts: Timeouts;
  traffic: Traffic;
}
export class google_cloud_run_v2_service extends TerraformResource {
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
  readonly expire_time!: string;
  readonly generation!: string;
  readonly id?: string;
  readonly ingress?: string;
  readonly last_modifier!: string;
  readonly latest_created_revision!: string;
  readonly latest_ready_revision!: string;
  readonly launch_stage?: string;
  readonly observed_generation!: string;
  readonly project?: string;
  readonly reconciling!: boolean;
  readonly terminal_condition!: any[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly traffic_statuses!: any[];
  readonly uid!: string;
  readonly update_time!: string;
  readonly uri!: string;
  readonly urls!: string[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudRunV2ServiceArgs) {
    super(config, "resource", args, resourceName, "google_cloud_run_v2_service");
  }
}