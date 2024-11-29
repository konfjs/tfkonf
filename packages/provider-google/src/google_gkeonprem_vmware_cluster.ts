import { TerraformConfig, TerraformResource } from "tfs";
export interface AntiAffinityGroups {
  aag_config_disabled: boolean;
}
export interface AdminUsers {
  username: string;
}
export interface Authorization {
  admin_users: AdminUsers;
}
export interface AutoRepairConfig {
  enabled: boolean;
}
export interface AutoResizeConfig {
  enabled: boolean;
}
export interface ControlPlaneNode {
  cpus?: number;
  memory?: number;
  replicas?: number;
  auto_resize_config: AutoResizeConfig;
}
export interface DataplaneV2 {
  advanced_networking?: boolean;
  dataplane_v2_enabled?: boolean;
  windows_dataplane_v2_enabled?: boolean;
}
export interface F5Config {
  address?: string;
  partition?: string;
}
export interface ManualLbConfig {}
export interface AddressPools {
  addresses: string[];
  pool: string;
}
export interface MetalLbConfig {
  address_pools: AddressPools;
}
export interface VipConfig {
  control_plane_vip?: string;
  ingress_vip?: string;
}
export interface LoadBalancer {
  f5_config: F5Config;
  manual_lb_config: ManualLbConfig;
  metal_lb_config: MetalLbConfig;
  vip_config: VipConfig;
}
export interface Ips {
  ip?: string;
}
export interface ControlPlaneIpBlock {
  gateway?: string;
  netmask?: string;
  ips: Ips;
}
export interface ControlPlaneV2Config {
  control_plane_ip_block: ControlPlaneIpBlock;
}
export interface DhcpIpConfig {
  enabled: boolean;
}
export interface HostConfig {
  dns_search_domains?: string[];
  dns_servers?: string[];
  ntp_servers?: string[];
}
export interface Ips {
  ip: string;
}
export interface IpBlocks {
  gateway: string;
  netmask: string;
  ips: Ips;
}
export interface StaticIpConfig {
  ip_blocks: IpBlocks;
}
export interface NetworkConfig {
  pod_address_cidr_blocks: string[];
  service_address_cidr_blocks: string[];
  control_plane_v2_config: ControlPlaneV2Config;
  dhcp_ip_config: DhcpIpConfig;
  host_config: HostConfig;
  static_ip_config: StaticIpConfig;
}
export interface Storage {
  vsphere_csi_disabled: boolean;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface UpgradePolicy {
  control_plane_only?: boolean;
}
export interface Vcenter {
  ca_cert_data?: string;
  cluster?: string;
  datacenter?: string;
  datastore?: string;
  folder?: string;
  resource_pool?: string;
  storage_policy_name?: string;
}
export interface GoogleGkeonpremVmwareClusterArgs {
  admin_cluster_membership: string;
  annotations?: {
    [key: string]: string;
  };
  description?: string;
  disable_bundled_ingress?: boolean;
  enable_control_plane_v2?: boolean;
  location: string;
  name: string;
  on_prem_version: string;
  anti_affinity_groups: AntiAffinityGroups;
  authorization: Authorization;
  auto_repair_config: AutoRepairConfig;
  control_plane_node: ControlPlaneNode;
  dataplane_v2: DataplaneV2;
  load_balancer: LoadBalancer;
  network_config: NetworkConfig;
  storage: Storage;
  timeouts: Timeouts;
  upgrade_policy: UpgradePolicy;
  vcenter: Vcenter;
}
export class google_gkeonprem_vmware_cluster extends TerraformResource {
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
  readonly vm_tracking_enabled?: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeonpremVmwareClusterArgs) {
    super(config, "resource", args, resourceName, "google_gkeonprem_vmware_cluster");
  }
}