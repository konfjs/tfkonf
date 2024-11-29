import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudRunV2ServiceArgsBinaryAuthorization {
  breakglass_justification?: string;
  policy?: string;
  use_default?: boolean;
}
export interface GoogleCloudRunV2ServiceArgsscaling {
  min_instance_count?: number;
}
export interface GoogleCloudRunV2ServiceArgstemplatecontainersenvValueSourceSecretKeyRef {
  secret: string;
  version?: string;
}
export interface GoogleCloudRunV2ServiceArgstemplatecontainersenvValueSource {
  secret_key_ref: GoogleCloudRunV2ServiceArgstemplatecontainersenvValueSourceSecretKeyRef;
}
export interface GoogleCloudRunV2ServiceArgstemplatecontainersenv {
  name: string;
  value?: string;
  value_source: GoogleCloudRunV2ServiceArgstemplatecontainersenvValueSource;
}
export interface GoogleCloudRunV2ServiceArgstemplatecontainersLivenessProbegrpc {
  service?: string;
}
export interface GoogleCloudRunV2ServiceArgstemplatecontainersLivenessProbeHttpGetHttpHeaders {
  name: string;
  value?: string;
}
export interface GoogleCloudRunV2ServiceArgstemplatecontainersLivenessProbeHttpGet {
  path?: string;
  http_headers: GoogleCloudRunV2ServiceArgstemplatecontainersLivenessProbeHttpGetHttpHeaders;
}
export interface GoogleCloudRunV2ServiceArgstemplatecontainersLivenessProbeTcpSocket {
  port: number;
}
export interface GoogleCloudRunV2ServiceArgstemplatecontainersLivenessProbe {
  failure_threshold?: number;
  initial_delay_seconds?: number;
  period_seconds?: number;
  timeout_seconds?: number;
  grpc: GoogleCloudRunV2ServiceArgstemplatecontainersLivenessProbegrpc;
  http_get: GoogleCloudRunV2ServiceArgstemplatecontainersLivenessProbeHttpGet;
  tcp_socket: GoogleCloudRunV2ServiceArgstemplatecontainersLivenessProbeTcpSocket;
}
export interface GoogleCloudRunV2ServiceArgstemplatecontainersports {
  container_port?: number;
}
export interface GoogleCloudRunV2ServiceArgstemplatecontainersresources {
  cpu_idle?: boolean;
  startup_cpu_boost?: boolean;
}
export interface GoogleCloudRunV2ServiceArgstemplatecontainersStartupProbegrpc {
  service?: string;
}
export interface GoogleCloudRunV2ServiceArgstemplatecontainersStartupProbeHttpGetHttpHeaders {
  name: string;
  value?: string;
}
export interface GoogleCloudRunV2ServiceArgstemplatecontainersStartupProbeHttpGet {
  path?: string;
  http_headers: GoogleCloudRunV2ServiceArgstemplatecontainersStartupProbeHttpGetHttpHeaders;
}
export interface GoogleCloudRunV2ServiceArgstemplatecontainersStartupProbeTcpSocket {}
export interface GoogleCloudRunV2ServiceArgstemplatecontainersStartupProbe {
  failure_threshold?: number;
  initial_delay_seconds?: number;
  period_seconds?: number;
  timeout_seconds?: number;
  grpc: GoogleCloudRunV2ServiceArgstemplatecontainersStartupProbegrpc;
  http_get: GoogleCloudRunV2ServiceArgstemplatecontainersStartupProbeHttpGet;
  tcp_socket: GoogleCloudRunV2ServiceArgstemplatecontainersStartupProbeTcpSocket;
}
export interface GoogleCloudRunV2ServiceArgstemplatecontainersVolumeMounts {
  mount_path: string;
  name: string;
}
export interface GoogleCloudRunV2ServiceArgstemplatecontainers {
  args?: string[];
  command?: string[];
  depends_on?: string[];
  image: string;
  name?: string;
  working_dir?: string;
  env: GoogleCloudRunV2ServiceArgstemplatecontainersenv;
  liveness_probe: GoogleCloudRunV2ServiceArgstemplatecontainersLivenessProbe;
  ports: GoogleCloudRunV2ServiceArgstemplatecontainersports;
  resources: GoogleCloudRunV2ServiceArgstemplatecontainersresources;
  startup_probe: GoogleCloudRunV2ServiceArgstemplatecontainersStartupProbe;
  volume_mounts: GoogleCloudRunV2ServiceArgstemplatecontainersVolumeMounts;
}
export interface GoogleCloudRunV2ServiceArgstemplatescaling {
  max_instance_count?: number;
  min_instance_count?: number;
}
export interface GoogleCloudRunV2ServiceArgstemplatevolumesCloudSqlInstance {
  instances?: string[];
}
export interface GoogleCloudRunV2ServiceArgstemplatevolumesEmptyDir {
  medium?: string;
  size_limit?: string;
}
export interface GoogleCloudRunV2ServiceArgstemplatevolumesgcs {
  bucket: string;
  read_only?: boolean;
}
export interface GoogleCloudRunV2ServiceArgstemplatevolumesnfs {
  path: string;
  read_only?: boolean;
  server: string;
}
export interface GoogleCloudRunV2ServiceArgstemplatevolumessecretitems {
  mode?: number;
  path: string;
  version?: string;
}
export interface GoogleCloudRunV2ServiceArgstemplatevolumessecret {
  default_mode?: number;
  secret: string;
  items: GoogleCloudRunV2ServiceArgstemplatevolumessecretitems;
}
export interface GoogleCloudRunV2ServiceArgstemplatevolumes {
  name: string;
  cloud_sql_instance: GoogleCloudRunV2ServiceArgstemplatevolumesCloudSqlInstance;
  empty_dir: GoogleCloudRunV2ServiceArgstemplatevolumesEmptyDir;
  gcs: GoogleCloudRunV2ServiceArgstemplatevolumesgcs;
  nfs: GoogleCloudRunV2ServiceArgstemplatevolumesnfs;
  secret: GoogleCloudRunV2ServiceArgstemplatevolumessecret;
}
export interface GoogleCloudRunV2ServiceArgstemplateVpcAccessNetworkInterfaces {
  tags?: string[];
}
export interface GoogleCloudRunV2ServiceArgstemplateVpcAccess {
  connector?: string;
  network_interfaces: GoogleCloudRunV2ServiceArgstemplateVpcAccessNetworkInterfaces;
}
export interface GoogleCloudRunV2ServiceArgstemplate {
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
  containers: GoogleCloudRunV2ServiceArgstemplatecontainers;
  scaling: GoogleCloudRunV2ServiceArgstemplatescaling;
  volumes: GoogleCloudRunV2ServiceArgstemplatevolumes;
  vpc_access: GoogleCloudRunV2ServiceArgstemplateVpcAccess;
}
export interface GoogleCloudRunV2ServiceArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudRunV2ServiceArgstraffic {
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
  scaling: GoogleCloudRunV2ServiceArgsscaling;
  template: GoogleCloudRunV2ServiceArgstemplate;
  timeouts: GoogleCloudRunV2ServiceArgstimeouts;
  traffic: GoogleCloudRunV2ServiceArgstraffic;
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