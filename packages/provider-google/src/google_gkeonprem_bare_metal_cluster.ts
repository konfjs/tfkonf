import { TerraformConfig, TerraformResource } from "tfs";
export interface BinaryAuthorization {
  evaluation_mode?: string;
}
export interface ClusterOperations {
  enable_application_logs?: boolean;
}
export interface ApiServerArgs {
  argument: string;
  value: string;
}
export interface NodeConfigs {
  labels?: {
    [key: string]: string;
  };
  node_ip?: string;
}
export interface Taints {
  effect?: string;
  key?: string;
  value?: string;
}
export interface NodePoolConfig {
  operating_system?: string;
  node_configs: NodeConfigs;
  taints: Taints;
}
export interface ControlPlaneNodePoolConfig {
  node_pool_config: NodePoolConfig;
}
export interface ControlPlane {
  api_server_args: ApiServerArgs;
  control_plane_node_pool_config: ControlPlaneNodePoolConfig;
}
export interface AddressPools {
  addresses: string[];
  avoid_buggy_ips?: boolean;
  manual_assign?: string;
  pool: string;
}
export interface BgpPeerConfigs {
  asn: number;
  control_plane_nodes?: string[];
  ip_address: string;
}
export interface KubeletConfig {
  registry_burst?: number;
  registry_pull_qps?: number;
  serialize_image_pulls_disabled?: boolean;
}
export interface NodeConfigs {
  labels?: {
    [key: string]: string;
  };
  node_ip?: string;
}
export interface Taints {
  effect?: string;
  key?: string;
  value?: string;
}
export interface NodePoolConfig {
  labels?: {
    [key: string]: string;
  };
  operating_system?: string;
  kubelet_config: KubeletConfig;
  node_configs: NodeConfigs;
  taints: Taints;
}
export interface LoadBalancerNodePoolConfig {
  node_pool_config: NodePoolConfig;
}
export interface BgpLbConfig {
  asn: number;
  address_pools: AddressPools;
  bgp_peer_configs: BgpPeerConfigs;
  load_balancer_node_pool_config: LoadBalancerNodePoolConfig;
}
export interface ManualLbConfig {
  enabled: boolean;
}
export interface AddressPools {
  addresses: string[];
  avoid_buggy_ips?: boolean;
  manual_assign?: boolean;
  pool: string;
}
export interface NodeConfigs {
  labels?: {
    [key: string]: string;
  };
  node_ip?: string;
}
export interface Taints {
  effect?: string;
  key?: string;
  value?: string;
}
export interface NodePoolConfig {
  node_configs: NodeConfigs;
  taints: Taints;
}
export interface LoadBalancerNodePoolConfig {
  node_pool_config: NodePoolConfig;
}
export interface MetalLbConfig {
  address_pools: AddressPools;
  load_balancer_node_pool_config: LoadBalancerNodePoolConfig;
}
export interface PortConfig {
  control_plane_load_balancer_port: number;
}
export interface VipConfig {
  control_plane_vip: string;
  ingress_vip: string;
}
export interface LoadBalancer {
  bgp_lb_config: BgpLbConfig;
  manual_lb_config: ManualLbConfig;
  metal_lb_config: MetalLbConfig;
  port_config: PortConfig;
  vip_config: VipConfig;
}
export interface MaintenanceConfig {
  maintenance_address_cidr_blocks: string[];
}
export interface IslandModeCidr {
  pod_address_cidr_blocks: string[];
  service_address_cidr_blocks: string[];
}
export interface MultipleNetworkInterfacesConfig {
  enabled?: boolean;
}
export interface SrIovConfig {
  enabled?: boolean;
}
export interface NetworkConfig {
  advanced_networking?: boolean;
  island_mode_cidr: IslandModeCidr;
  multiple_network_interfaces_config: MultipleNetworkInterfacesConfig;
  sr_iov_config: SrIovConfig;
}
export interface NodeAccessConfig {}
export interface NodeConfig {}
export interface OsEnvironmentConfig {
  package_repo_excluded: boolean;
}
export interface Proxy {
  no_proxy?: string[];
  uri: string;
}
export interface AdminUsers {
  username: string;
}
export interface Authorization {
  admin_users: AdminUsers;
}
export interface SecurityConfig {
  authorization: Authorization;
}
export interface LvpNodeMountsConfig {
  path: string;
  storage_class: string;
}
export interface LvpConfig {
  path: string;
  storage_class: string;
}
export interface LvpShareConfig {
  shared_path_pv_count?: number;
  lvp_config: LvpConfig;
}
export interface Storage {
  lvp_node_mounts_config: LvpNodeMountsConfig;
  lvp_share_config: LvpShareConfig;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface UpgradePolicy {
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
  binary_authorization: BinaryAuthorization;
  cluster_operations: ClusterOperations;
  control_plane: ControlPlane;
  load_balancer: LoadBalancer;
  maintenance_config: MaintenanceConfig;
  network_config: NetworkConfig;
  node_access_config: NodeAccessConfig;
  node_config: NodeConfig;
  os_environment_config: OsEnvironmentConfig;
  proxy: Proxy;
  security_config: SecurityConfig;
  storage: Storage;
  timeouts: Timeouts;
  upgrade_policy: UpgradePolicy;
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