import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleContainerAttachedClusterArgsauthorization {
  admin_groups?: string[];
  admin_users?: string[];
}
export interface GoogleContainerAttachedClusterArgsBinaryAuthorization {
  evaluation_mode?: string;
}
export interface GoogleContainerAttachedClusterArgsfleet {
  project: string;
}
export interface GoogleContainerAttachedClusterArgsLoggingConfigComponentConfig {
  enable_components?: string[];
}
export interface GoogleContainerAttachedClusterArgsLoggingConfig {
  component_config: GoogleContainerAttachedClusterArgsLoggingConfigComponentConfig;
}
export interface GoogleContainerAttachedClusterArgsMonitoringConfigManagedPrometheusConfig {
  enabled?: boolean;
}
export interface GoogleContainerAttachedClusterArgsMonitoringConfig {
  managed_prometheus_config: GoogleContainerAttachedClusterArgsMonitoringConfigManagedPrometheusConfig;
}
export interface GoogleContainerAttachedClusterArgsOidcConfig {
  issuer_url: string;
  jwks?: string;
}
export interface GoogleContainerAttachedClusterArgsProxyConfigKubernetesSecret {
  name: string;
  namespace: string;
}
export interface GoogleContainerAttachedClusterArgsProxyConfig {
  kubernetes_secret: GoogleContainerAttachedClusterArgsProxyConfigKubernetesSecret;
}
export interface GoogleContainerAttachedClusterArgsSecurityPostureConfig {
  vulnerability_mode: string;
}
export interface GoogleContainerAttachedClusterArgstimeouts {
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
  authorization: GoogleContainerAttachedClusterArgsauthorization;
  binary_authorization: GoogleContainerAttachedClusterArgsBinaryAuthorization;
  fleet: GoogleContainerAttachedClusterArgsfleet;
  logging_config: GoogleContainerAttachedClusterArgsLoggingConfig;
  monitoring_config: GoogleContainerAttachedClusterArgsMonitoringConfig;
  oidc_config: GoogleContainerAttachedClusterArgsOidcConfig;
  proxy_config: GoogleContainerAttachedClusterArgsProxyConfig;
  security_posture_config: GoogleContainerAttachedClusterArgsSecurityPostureConfig;
  timeouts: GoogleContainerAttachedClusterArgstimeouts;
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