import { TerraformConfig, TerraformResource } from "tfs";
export interface Authorization {
  admin_groups?: string[];
  admin_users?: string[];
}
export interface BinaryAuthorization {
  evaluation_mode?: string;
}
export interface Fleet {
  project: string;
}
export interface ComponentConfig {
  enable_components?: string[];
}
export interface LoggingConfig {
  component_config: ComponentConfig;
}
export interface ManagedPrometheusConfig {
  enabled?: boolean;
}
export interface MonitoringConfig {
  managed_prometheus_config: ManagedPrometheusConfig;
}
export interface OidcConfig {
  issuer_url: string;
  jwks?: string;
}
export interface KubernetesSecret {
  name: string;
  namespace: string;
}
export interface ProxyConfig {
  kubernetes_secret: KubernetesSecret;
}
export interface SecurityPostureConfig {
  vulnerability_mode: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleContainerAttachedClusterArgs {
  annotations?: {
    [key: string]: string;
  };
  deletion_policy?: string;
  description?: string;
  distribution: string;
  location: string;
  name: string;
  platform_version: string;
  authorization: Authorization;
  binary_authorization: BinaryAuthorization;
  fleet: Fleet;
  logging_config: LoggingConfig;
  monitoring_config: MonitoringConfig;
  oidc_config: OidcConfig;
  proxy_config: ProxyConfig;
  security_posture_config: SecurityPostureConfig;
  timeouts: Timeouts;
}
export class google_container_attached_cluster extends TerraformResource {
  readonly cluster_region!: string;
  readonly create_time!: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly errors!: any[];
  readonly id?: string;
  readonly kubernetes_version!: string;
  readonly project?: string;
  readonly reconciling!: boolean;
  readonly state!: string;
  readonly uid!: string;
  readonly update_time!: string;
  readonly workload_identity_config!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleContainerAttachedClusterArgs) {
    super(config, "resource", args, resourceName, "google_container_attached_cluster");
  }
}