import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleGkeonpremBareMetalAdminClusterArgsClusterOperations {
  enable_application_logs?: boolean;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneApiServerArgs {
  argument: string;
  value: string;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs {
  labels?: {
    [key: string]: string;
  };
  node_ip?: string;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints {
  effect?: string;
  key?: string;
  value?: string;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfig {
  labels?: {
    [key: string]: string;
  };
  operating_system?: string;
  node_configs: GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs;
  taints: GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneControlPlaneNodePoolConfig {
  node_pool_config: GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfig;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsControlPlane {
  api_server_args: GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneApiServerArgs;
  control_plane_node_pool_config: GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneControlPlaneNodePoolConfig;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsLoadBalancerManualLbConfig {
  enabled: boolean;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsLoadBalancerPortConfig {
  control_plane_load_balancer_port: number;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsLoadBalancerVipConfig {
  control_plane_vip: string;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsLoadBalancer {
  manual_lb_config: GoogleGkeonpremBareMetalAdminClusterArgsLoadBalancerManualLbConfig;
  port_config: GoogleGkeonpremBareMetalAdminClusterArgsLoadBalancerPortConfig;
  vip_config: GoogleGkeonpremBareMetalAdminClusterArgsLoadBalancerVipConfig;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsMaintenanceConfig {
  maintenance_address_cidr_blocks: string[];
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsNetworkConfigIslandModeCidr {
  pod_address_cidr_blocks: string[];
  service_address_cidr_blocks: string[];
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsNetworkConfig {
  island_mode_cidr: GoogleGkeonpremBareMetalAdminClusterArgsNetworkConfigIslandModeCidr;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsNodeAccessConfig {
  login_user?: string;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsNodeConfig {
  max_pods_per_node?: number;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsProxy {
  no_proxy?: string[];
  uri: string;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsSecurityConfigAuthorizationAdminUsers {
  username: string;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsSecurityConfigAuthorization {
  admin_users: GoogleGkeonpremBareMetalAdminClusterArgsSecurityConfigAuthorizationAdminUsers;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsSecurityConfig {
  authorization: GoogleGkeonpremBareMetalAdminClusterArgsSecurityConfigAuthorization;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsStorageLvpNodeMountsConfig {
  path: string;
  storage_class: string;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsStorageLvpShareConfigLvpConfig {
  path: string;
  storage_class: string;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsStorageLvpShareConfig {
  shared_path_pv_count?: number;
  lvp_config: GoogleGkeonpremBareMetalAdminClusterArgsStorageLvpShareConfigLvpConfig;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsStorage {
  lvp_node_mounts_config: GoogleGkeonpremBareMetalAdminClusterArgsStorageLvpNodeMountsConfig;
  lvp_share_config: GoogleGkeonpremBareMetalAdminClusterArgsStorageLvpShareConfig;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleGkeonpremBareMetalAdminClusterArgs {
  annotations?: {
    [key: string]: string;
  };
  bare_metal_version?: string;
  description?: string;
  location: string;
  name: string;
  cluster_operations: GoogleGkeonpremBareMetalAdminClusterArgsClusterOperations;
  control_plane: GoogleGkeonpremBareMetalAdminClusterArgsControlPlane;
  load_balancer: GoogleGkeonpremBareMetalAdminClusterArgsLoadBalancer;
  maintenance_config: GoogleGkeonpremBareMetalAdminClusterArgsMaintenanceConfig;
  network_config: GoogleGkeonpremBareMetalAdminClusterArgsNetworkConfig;
  node_access_config: GoogleGkeonpremBareMetalAdminClusterArgsNodeAccessConfig;
  node_config: GoogleGkeonpremBareMetalAdminClusterArgsNodeConfig;
  proxy: GoogleGkeonpremBareMetalAdminClusterArgsProxy;
  security_config: GoogleGkeonpremBareMetalAdminClusterArgsSecurityConfig;
  storage: GoogleGkeonpremBareMetalAdminClusterArgsStorage;
  timeouts: GoogleGkeonpremBareMetalAdminClusterArgsTimeouts;
}
export class google_gkeonprem_bare_metal_admin_cluster extends TerraformResource {
  readonly create_time!: string;
  readonly delete_time!: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly endpoint!: string;
  readonly etag!: string;
  readonly fleet!: any[];
  readonly id?: string;
  readonly local_name!: string;
  readonly project?: string;
  readonly reconciling!: boolean;
  readonly state!: string;
  readonly status!: any[];
  readonly uid!: string;
  readonly update_time!: string;
  readonly validation_check!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeonpremBareMetalAdminClusterArgs) {
    super(config, "resource", args, resourceName, "google_gkeonprem_bare_metal_admin_cluster");
  }
}