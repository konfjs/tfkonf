import { TerraformConfig, TerraformResource } from "tfs";
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
  labels?: {
    [key: string]: string;
  };
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
export interface ManualLbConfig {
  enabled: boolean;
}
export interface PortConfig {
  control_plane_load_balancer_port: number;
}
export interface VipConfig {
  control_plane_vip: string;
}
export interface LoadBalancer {
  manual_lb_config: ManualLbConfig;
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
export interface NetworkConfig {
  island_mode_cidr: IslandModeCidr;
}
export interface NodeAccessConfig {
  login_user?: string;
}
export interface NodeConfig {
  max_pods_per_node?: number;
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
export interface GoogleGkeonpremBareMetalAdminClusterArgs {
  annotations?: {
    [key: string]: string;
  };
  bare_metal_version?: string;
  description?: string;
  location: string;
  name: string;
  cluster_operations: ClusterOperations;
  control_plane: ControlPlane;
  load_balancer: LoadBalancer;
  maintenance_config: MaintenanceConfig;
  network_config: NetworkConfig;
  node_access_config: NodeAccessConfig;
  node_config: NodeConfig;
  proxy: Proxy;
  security_config: SecurityConfig;
  storage: Storage;
  timeouts: Timeouts;
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