import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudRunServiceArgsmetadata {
  annotations?: {
    [key: string]: string;
  };
  labels?: {
    [key: string]: string;
  };
}
export interface GoogleCloudRunServiceArgstemplatemetadata {}
export interface GoogleCloudRunServiceArgstemplatespeccontainersenvValueFromSecretKeyRef {
  key: string;
  name: string;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersenvValueFrom {
  secret_key_ref: GoogleCloudRunServiceArgstemplatespeccontainersenvValueFromSecretKeyRef;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersenv {
  name?: string;
  value?: string;
  value_from: GoogleCloudRunServiceArgstemplatespeccontainersenvValueFrom;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersEnvFromConfigMapRefLocalObjectReference {
  name: string;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersEnvFromConfigMapRef {
  optional?: boolean;
  local_object_reference: GoogleCloudRunServiceArgstemplatespeccontainersEnvFromConfigMapRefLocalObjectReference;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersEnvFromSecretRefLocalObjectReference {
  name: string;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersEnvFromSecretRef {
  optional?: boolean;
  local_object_reference: GoogleCloudRunServiceArgstemplatespeccontainersEnvFromSecretRefLocalObjectReference;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersEnvFrom {
  prefix?: string;
  config_map_ref: GoogleCloudRunServiceArgstemplatespeccontainersEnvFromConfigMapRef;
  secret_ref: GoogleCloudRunServiceArgstemplatespeccontainersEnvFromSecretRef;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersLivenessProbegrpc {
  service?: string;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersLivenessProbeHttpGetHttpHeaders {
  name: string;
  value?: string;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersLivenessProbeHttpGet {
  path?: string;
  http_headers: GoogleCloudRunServiceArgstemplatespeccontainersLivenessProbeHttpGetHttpHeaders;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersLivenessProbe {
  failure_threshold?: number;
  initial_delay_seconds?: number;
  period_seconds?: number;
  timeout_seconds?: number;
  grpc: GoogleCloudRunServiceArgstemplatespeccontainersLivenessProbegrpc;
  http_get: GoogleCloudRunServiceArgstemplatespeccontainersLivenessProbeHttpGet;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersports {
  container_port?: number;
  protocol?: string;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersresources {
  requests?: {
    [key: string]: string;
  };
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersStartupProbegrpc {
  service?: string;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersStartupProbeHttpGetHttpHeaders {
  name: string;
  value?: string;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersStartupProbeHttpGet {
  path?: string;
  http_headers: GoogleCloudRunServiceArgstemplatespeccontainersStartupProbeHttpGetHttpHeaders;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersStartupProbeTcpSocket {}
export interface GoogleCloudRunServiceArgstemplatespeccontainersStartupProbe {
  failure_threshold?: number;
  initial_delay_seconds?: number;
  period_seconds?: number;
  timeout_seconds?: number;
  grpc: GoogleCloudRunServiceArgstemplatespeccontainersStartupProbegrpc;
  http_get: GoogleCloudRunServiceArgstemplatespeccontainersStartupProbeHttpGet;
  tcp_socket: GoogleCloudRunServiceArgstemplatespeccontainersStartupProbeTcpSocket;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainersVolumeMounts {
  mount_path: string;
  name: string;
}
export interface GoogleCloudRunServiceArgstemplatespeccontainers {
  args?: string[];
  command?: string[];
  image: string;
  working_dir?: string;
  env: GoogleCloudRunServiceArgstemplatespeccontainersenv;
  env_from: GoogleCloudRunServiceArgstemplatespeccontainersEnvFrom;
  liveness_probe: GoogleCloudRunServiceArgstemplatespeccontainersLivenessProbe;
  ports: GoogleCloudRunServiceArgstemplatespeccontainersports;
  resources: GoogleCloudRunServiceArgstemplatespeccontainersresources;
  startup_probe: GoogleCloudRunServiceArgstemplatespeccontainersStartupProbe;
  volume_mounts: GoogleCloudRunServiceArgstemplatespeccontainersVolumeMounts;
}
export interface GoogleCloudRunServiceArgstemplatespecvolumescsi {
  driver: string;
  volume_attributes?: {
    [key: string]: string;
  };
}
export interface GoogleCloudRunServiceArgstemplatespecvolumesEmptyDir {
  medium?: string;
  size_limit?: string;
}
export interface GoogleCloudRunServiceArgstemplatespecvolumesnfs {
  path: string;
  read_only?: boolean;
  server: string;
}
export interface GoogleCloudRunServiceArgstemplatespecvolumessecretitems {
  key: string;
  mode?: number;
  path: string;
}
export interface GoogleCloudRunServiceArgstemplatespecvolumessecret {
  default_mode?: number;
  secret_name: string;
  items: GoogleCloudRunServiceArgstemplatespecvolumessecretitems;
}
export interface GoogleCloudRunServiceArgstemplatespecvolumes {
  name: string;
  csi: GoogleCloudRunServiceArgstemplatespecvolumescsi;
  empty_dir: GoogleCloudRunServiceArgstemplatespecvolumesEmptyDir;
  nfs: GoogleCloudRunServiceArgstemplatespecvolumesnfs;
  secret: GoogleCloudRunServiceArgstemplatespecvolumessecret;
}
export interface GoogleCloudRunServiceArgstemplatespec {
  containers: GoogleCloudRunServiceArgstemplatespeccontainers;
  volumes: GoogleCloudRunServiceArgstemplatespecvolumes;
}
export interface GoogleCloudRunServiceArgstemplate {
  metadata: GoogleCloudRunServiceArgstemplatemetadata;
  spec: GoogleCloudRunServiceArgstemplatespec;
}
export interface GoogleCloudRunServiceArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudRunServiceArgstraffic {
  latest_revision?: boolean;
  percent: number;
  revision_name?: string;
  tag?: string;
}
export interface GoogleCloudRunServiceArgs {
  autogenerate_revision_name?: boolean;
  location: string;
  name: string;
  metadata: GoogleCloudRunServiceArgsmetadata;
  template: GoogleCloudRunServiceArgstemplate;
  timeouts: GoogleCloudRunServiceArgstimeouts;
  traffic: GoogleCloudRunServiceArgstraffic;
}
export class google_cloud_run_service extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly status!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudRunServiceArgs) {
    super(config, "resource", args, resourceName, "google_cloud_run_service");
  }
}