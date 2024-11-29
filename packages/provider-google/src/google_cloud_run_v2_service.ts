import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudRunV2ServiceArgsBinaryAuthorization {
  breakglass_justification?: string;
  policy?: string;
  use_default?: boolean;
}
export interface GoogleCloudRunV2ServiceArgsScaling {
  min_instance_count?: number;
}
export interface GoogleCloudRunV2ServiceArgsTemplateContainersEnvValueSourceSecretKeyRef {
  secret: string;
  version?: string;
}
export interface GoogleCloudRunV2ServiceArgsTemplateContainersEnvValueSource {
  secret_key_ref: GoogleCloudRunV2ServiceArgsTemplateContainersEnvValueSourceSecretKeyRef;
}
export interface GoogleCloudRunV2ServiceArgsTemplateContainersEnv {
  name: string;
  value?: string;
  value_source: GoogleCloudRunV2ServiceArgsTemplateContainersEnvValueSource;
}
export interface GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbeGrpc {
  service?: string;
}
export interface GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbeHttpGetHttpHeaders {
  name: string;
  value?: string;
}
export interface GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbeHttpGet {
  path?: string;
  http_headers: GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbeHttpGetHttpHeaders;
}
export interface GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbeTcpSocket {
  port: number;
}
export interface GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbe {
  failure_threshold?: number;
  initial_delay_seconds?: number;
  period_seconds?: number;
  timeout_seconds?: number;
  grpc: GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbeGrpc;
  http_get: GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbeHttpGet;
  tcp_socket: GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbeTcpSocket;
}
export interface GoogleCloudRunV2ServiceArgsTemplateContainersPorts {
  container_port?: number;
}
export interface GoogleCloudRunV2ServiceArgsTemplateContainersResources {
  cpu_idle?: boolean;
  startup_cpu_boost?: boolean;
}
export interface GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbeGrpc {
  service?: string;
}
export interface GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbeHttpGetHttpHeaders {
  name: string;
  value?: string;
}
export interface GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbeHttpGet {
  path?: string;
  http_headers: GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbeHttpGetHttpHeaders;
}
export interface GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbeTcpSocket {}
export interface GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbe {
  failure_threshold?: number;
  initial_delay_seconds?: number;
  period_seconds?: number;
  timeout_seconds?: number;
  grpc: GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbeGrpc;
  http_get: GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbeHttpGet;
  tcp_socket: GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbeTcpSocket;
}
export interface GoogleCloudRunV2ServiceArgsTemplateContainersVolumeMounts {
  mount_path: string;
  name: string;
}
export interface GoogleCloudRunV2ServiceArgsTemplateContainers {
  args?: string[];
  command?: string[];
  depends_on?: string[];
  image: string;
  name?: string;
  working_dir?: string;
  env: GoogleCloudRunV2ServiceArgsTemplateContainersEnv;
  liveness_probe: GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbe;
  ports: GoogleCloudRunV2ServiceArgsTemplateContainersPorts;
  resources: GoogleCloudRunV2ServiceArgsTemplateContainersResources;
  startup_probe: GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbe;
  volume_mounts: GoogleCloudRunV2ServiceArgsTemplateContainersVolumeMounts;
}
export interface GoogleCloudRunV2ServiceArgsTemplateScaling {
  max_instance_count?: number;
  min_instance_count?: number;
}
export interface GoogleCloudRunV2ServiceArgsTemplateVolumesCloudSqlInstance {
  instances?: string[];
}
export interface GoogleCloudRunV2ServiceArgsTemplateVolumesEmptyDir {
  medium?: string;
  size_limit?: string;
}
export interface GoogleCloudRunV2ServiceArgsTemplateVolumesGcs {
  bucket: string;
  read_only?: boolean;
}
export interface GoogleCloudRunV2ServiceArgsTemplateVolumesNfs {
  path: string;
  read_only?: boolean;
  server: string;
}
export interface GoogleCloudRunV2ServiceArgsTemplateVolumesSecretItems {
  mode?: number;
  path: string;
  version?: string;
}
export interface GoogleCloudRunV2ServiceArgsTemplateVolumesSecret {
  default_mode?: number;
  secret: string;
  items: GoogleCloudRunV2ServiceArgsTemplateVolumesSecretItems;
}
export interface GoogleCloudRunV2ServiceArgsTemplateVolumes {
  name: string;
  cloud_sql_instance: GoogleCloudRunV2ServiceArgsTemplateVolumesCloudSqlInstance;
  empty_dir: GoogleCloudRunV2ServiceArgsTemplateVolumesEmptyDir;
  gcs: GoogleCloudRunV2ServiceArgsTemplateVolumesGcs;
  nfs: GoogleCloudRunV2ServiceArgsTemplateVolumesNfs;
  secret: GoogleCloudRunV2ServiceArgsTemplateVolumesSecret;
}
export interface GoogleCloudRunV2ServiceArgsTemplateVpcAccessNetworkInterfaces {
  tags?: string[];
}
export interface GoogleCloudRunV2ServiceArgsTemplateVpcAccess {
  connector?: string;
  network_interfaces: GoogleCloudRunV2ServiceArgsTemplateVpcAccessNetworkInterfaces;
}
export interface GoogleCloudRunV2ServiceArgsTemplate {
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
  containers: GoogleCloudRunV2ServiceArgsTemplateContainers;
  scaling: GoogleCloudRunV2ServiceArgsTemplateScaling;
  volumes: GoogleCloudRunV2ServiceArgsTemplateVolumes;
  vpc_access: GoogleCloudRunV2ServiceArgsTemplateVpcAccess;
}
export interface GoogleCloudRunV2ServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudRunV2ServiceArgsTraffic {
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
  binary_authorization: GoogleCloudRunV2ServiceArgsBinaryAuthorization;
  scaling: GoogleCloudRunV2ServiceArgsScaling;
  template: GoogleCloudRunV2ServiceArgsTemplate;
  timeouts: GoogleCloudRunV2ServiceArgsTimeouts;
  traffic: GoogleCloudRunV2ServiceArgsTraffic;
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