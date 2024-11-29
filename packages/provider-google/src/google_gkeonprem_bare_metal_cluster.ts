import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleGkeonpremBareMetalClusterArgsBinaryAuthorization {
  evaluation_mode?: string;
}
export interface GoogleGkeonpremBareMetalClusterArgsClusterOperations {
  enable_application_logs?: boolean;
}
export interface GoogleGkeonpremBareMetalClusterArgsControlPlaneApiServerArgs {
  argument: string;
  value: string;
}
export interface GoogleGkeonpremBareMetalClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs {
  labels?: {
    [key: string]: string;
  };
  node_ip?: string;
}
export interface GoogleGkeonpremBareMetalClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints {
  effect?: string;
  key?: string;
  value?: string;
}
export interface GoogleGkeonpremBareMetalClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfig {
  operating_system?: string;
  node_configs: GoogleGkeonpremBareMetalClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs;
  taints: GoogleGkeonpremBareMetalClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints;
}
export interface GoogleGkeonpremBareMetalClusterArgsControlPlaneControlPlaneNodePoolConfig {
  node_pool_config: GoogleGkeonpremBareMetalClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfig;
}
export interface GoogleGkeonpremBareMetalClusterArgsControlPlane {
  api_server_args: GoogleGkeonpremBareMetalClusterArgsControlPlaneApiServerArgs;
  control_plane_node_pool_config: GoogleGkeonpremBareMetalClusterArgsControlPlaneControlPlaneNodePoolConfig;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigAddressPools {
  addresses: string[];
  avoid_buggy_ips?: boolean;
  manual_assign?: string;
  pool: string;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigBgpPeerConfigs {
  asn: number;
  control_plane_nodes?: string[];
  ip_address: string;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig {
  registry_burst?: number;
  registry_pull_qps?: number;
  serialize_image_pulls_disabled?: boolean;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs {
  labels?: {
    [key: string]: string;
  };
  node_ip?: string;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints {
  effect?: string;
  key?: string;
  value?: string;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig {
  labels?: {
    [key: string]: string;
  };
  operating_system?: string;
  kubelet_config: GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig;
  node_configs: GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs;
  taints: GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig {
  node_pool_config: GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfig {
  asn: number;
  address_pools: GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigAddressPools;
  bgp_peer_configs: GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigBgpPeerConfigs;
  load_balancer_node_pool_config: GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerManualLbConfig {
  enabled: boolean;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigAddressPools {
  addresses: string[];
  avoid_buggy_ips?: boolean;
  manual_assign?: boolean;
  pool: string;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs {
  labels?: {
    [key: string]: string;
  };
  node_ip?: string;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints {
  effect?: string;
  key?: string;
  value?: string;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig {
  node_configs: GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs;
  taints: GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig {
  node_pool_config: GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfig {
  address_pools: GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigAddressPools;
  load_balancer_node_pool_config: GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerPortConfig {
  control_plane_load_balancer_port: number;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerVipConfig {
  control_plane_vip: string;
  ingress_vip: string;
}
export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancer {
  bgp_lb_config: GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfig;
  manual_lb_config: GoogleGkeonpremBareMetalClusterArgsLoadBalancerManualLbConfig;
  metal_lb_config: GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfig;
  port_config: GoogleGkeonpremBareMetalClusterArgsLoadBalancerPortConfig;
  vip_config: GoogleGkeonpremBareMetalClusterArgsLoadBalancerVipConfig;
}
export interface GoogleGkeonpremBareMetalClusterArgsMaintenanceConfig {
  maintenance_address_cidr_blocks: string[];
}
export interface GoogleGkeonpremBareMetalClusterArgsNetworkConfigIslandModeCidr {
  pod_address_cidr_blocks: string[];
  service_address_cidr_blocks: string[];
}
export interface GoogleGkeonpremBareMetalClusterArgsNetworkConfigMultipleNetworkInterfacesConfig {
  enabled?: boolean;
}
export interface GoogleGkeonpremBareMetalClusterArgsNetworkConfigSrIovConfig {
  enabled?: boolean;
}
export interface GoogleGkeonpremBareMetalClusterArgsNetworkConfig {
  advanced_networking?: boolean;
  island_mode_cidr: GoogleGkeonpremBareMetalClusterArgsNetworkConfigIslandModeCidr;
  multiple_network_interfaces_config: GoogleGkeonpremBareMetalClusterArgsNetworkConfigMultipleNetworkInterfacesConfig;
  sr_iov_config: GoogleGkeonpremBareMetalClusterArgsNetworkConfigSrIovConfig;
}
export interface GoogleGkeonpremBareMetalClusterArgsNodeAccessConfig {}
export interface GoogleGkeonpremBareMetalClusterArgsNodeConfig {}
export interface GoogleGkeonpremBareMetalClusterArgsOsEnvironmentConfig {
  package_repo_excluded: boolean;
}
export interface GoogleGkeonpremBareMetalClusterArgsProxy {
  no_proxy?: string[];
  uri: string;
}
export interface GoogleGkeonpremBareMetalClusterArgsSecurityConfigAuthorizationAdminUsers {
  username: string;
}
export interface GoogleGkeonpremBareMetalClusterArgsSecurityConfigAuthorization {
  admin_users: GoogleGkeonpremBareMetalClusterArgsSecurityConfigAuthorizationAdminUsers;
}
export interface GoogleGkeonpremBareMetalClusterArgsSecurityConfig {
  authorization: GoogleGkeonpremBareMetalClusterArgsSecurityConfigAuthorization;
}
export interface GoogleGkeonpremBareMetalClusterArgsStorageLvpNodeMountsConfig {
  path: string;
  storage_class: string;
}
export interface GoogleGkeonpremBareMetalClusterArgsStorageLvpShareConfigLvpConfig {
  path: string;
  storage_class: string;
}
export interface GoogleGkeonpremBareMetalClusterArgsStorageLvpShareConfig {
  shared_path_pv_count?: number;
  lvp_config: GoogleGkeonpremBareMetalClusterArgsStorageLvpShareConfigLvpConfig;
}
export interface GoogleGkeonpremBareMetalClusterArgsStorage {
  lvp_node_mounts_config: GoogleGkeonpremBareMetalClusterArgsStorageLvpNodeMountsConfig;
  lvp_share_config: GoogleGkeonpremBareMetalClusterArgsStorageLvpShareConfig;
}
export interface GoogleGkeonpremBareMetalClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleGkeonpremBareMetalClusterArgsUpgradePolicy {
  policy?: string;
}
export interface GoogleGkeonpremBareMetalClusterArgs {
  admin_cluster_membership: string;
  annotations?: {
    [key: string]: string;
  };
  bare_metal_version: string;
  description?: string;
  location: string;
  name: string;
  binary_authorization: GoogleGkeonpremBareMetalClusterArgsBinaryAuthorization;
  cluster_operations: GoogleGkeonpremBareMetalClusterArgsClusterOperations;
  control_plane: GoogleGkeonpremBareMetalClusterArgsControlPlane;
  load_balancer: GoogleGkeonpremBareMetalClusterArgsLoadBalancer;
  maintenance_config: GoogleGkeonpremBareMetalClusterArgsMaintenanceConfig;
  network_config: GoogleGkeonpremBareMetalClusterArgsNetworkConfig;
  node_access_config: GoogleGkeonpremBareMetalClusterArgsNodeAccessConfig;
  node_config: GoogleGkeonpremBareMetalClusterArgsNodeConfig;
  os_environment_config: GoogleGkeonpremBareMetalClusterArgsOsEnvironmentConfig;
  proxy: GoogleGkeonpremBareMetalClusterArgsProxy;
  security_config: GoogleGkeonpremBareMetalClusterArgsSecurityConfig;
  storage: GoogleGkeonpremBareMetalClusterArgsStorage;
  timeouts: GoogleGkeonpremBareMetalClusterArgsTimeouts;
  upgrade_policy: GoogleGkeonpremBareMetalClusterArgsUpgradePolicy;
}
export class google_gkeonprem_bare_metal_cluster extends TerraformResource {
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
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeonpremBareMetalClusterArgs) {
    super(config, "resource", args, resourceName, "google_gkeonprem_bare_metal_cluster");
  }
}