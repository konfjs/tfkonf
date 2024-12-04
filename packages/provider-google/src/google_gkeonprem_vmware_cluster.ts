import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeonpremVmwareClusterArgsAntiAffinityGroups {
  aag_config_disabled: boolean;
}

export interface GoogleGkeonpremVmwareClusterArgsAuthorizationAdminUsers {
  username: string;
}

export interface GoogleGkeonpremVmwareClusterArgsAuthorization {
  admin_users: GoogleGkeonpremVmwareClusterArgsAuthorizationAdminUsers;
}

export interface GoogleGkeonpremVmwareClusterArgsAutoRepairConfig {
  enabled: boolean;
}

export interface GoogleGkeonpremVmwareClusterArgsControlPlaneNodeAutoResizeConfig {
  enabled: boolean;
}

export interface GoogleGkeonpremVmwareClusterArgsControlPlaneNode {
  cpus?: number;
  memory?: number;
  replicas?: number;
  auto_resize_config: GoogleGkeonpremVmwareClusterArgsControlPlaneNodeAutoResizeConfig;
}

export interface GoogleGkeonpremVmwareClusterArgsDataplaneV2 {
  advanced_networking?: boolean;
  dataplane_v2_enabled?: boolean;
  windows_dataplane_v2_enabled?: boolean;
}

export interface GoogleGkeonpremVmwareClusterArgsLoadBalancerF5Config {
  address?: string;
  partition?: string;
}

export interface GoogleGkeonpremVmwareClusterArgsLoadBalancerManualLbConfig {
}

export interface GoogleGkeonpremVmwareClusterArgsLoadBalancerMetalLbConfigAddressPools {
  addresses: string[];
  pool: string;
}

export interface GoogleGkeonpremVmwareClusterArgsLoadBalancerMetalLbConfig {
  address_pools: GoogleGkeonpremVmwareClusterArgsLoadBalancerMetalLbConfigAddressPools;
}

export interface GoogleGkeonpremVmwareClusterArgsLoadBalancerVipConfig {
  control_plane_vip?: string;
  ingress_vip?: string;
}

export interface GoogleGkeonpremVmwareClusterArgsLoadBalancer {
  f5_config: GoogleGkeonpremVmwareClusterArgsLoadBalancerF5Config;
  manual_lb_config: GoogleGkeonpremVmwareClusterArgsLoadBalancerManualLbConfig;
  metal_lb_config: GoogleGkeonpremVmwareClusterArgsLoadBalancerMetalLbConfig;
  vip_config: GoogleGkeonpremVmwareClusterArgsLoadBalancerVipConfig;
}

export interface GoogleGkeonpremVmwareClusterArgsNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps {
  ip?: string;
}

export interface GoogleGkeonpremVmwareClusterArgsNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock {
  gateway?: string;
  netmask?: string;
  ips: GoogleGkeonpremVmwareClusterArgsNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps;
}

export interface GoogleGkeonpremVmwareClusterArgsNetworkConfigControlPlaneV2Config {
  control_plane_ip_block: GoogleGkeonpremVmwareClusterArgsNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock;
}

export interface GoogleGkeonpremVmwareClusterArgsNetworkConfigDhcpIpConfig {
  enabled: boolean;
}

export interface GoogleGkeonpremVmwareClusterArgsNetworkConfigHostConfig {
  dns_search_domains?: string[];
  dns_servers?: string[];
  ntp_servers?: string[];
}

export interface GoogleGkeonpremVmwareClusterArgsNetworkConfigStaticIpConfigIpBlocksIps {
  ip: string;
}

export interface GoogleGkeonpremVmwareClusterArgsNetworkConfigStaticIpConfigIpBlocks {
  gateway: string;
  netmask: string;
  ips: GoogleGkeonpremVmwareClusterArgsNetworkConfigStaticIpConfigIpBlocksIps;
}

export interface GoogleGkeonpremVmwareClusterArgsNetworkConfigStaticIpConfig {
  ip_blocks: GoogleGkeonpremVmwareClusterArgsNetworkConfigStaticIpConfigIpBlocks;
}

export interface GoogleGkeonpremVmwareClusterArgsNetworkConfig {
  pod_address_cidr_blocks: string[];
  service_address_cidr_blocks: string[];
  control_plane_v2_config: GoogleGkeonpremVmwareClusterArgsNetworkConfigControlPlaneV2Config;
  dhcp_ip_config: GoogleGkeonpremVmwareClusterArgsNetworkConfigDhcpIpConfig;
  host_config: GoogleGkeonpremVmwareClusterArgsNetworkConfigHostConfig;
  static_ip_config: GoogleGkeonpremVmwareClusterArgsNetworkConfigStaticIpConfig;
}

export interface GoogleGkeonpremVmwareClusterArgsStorage {
  vsphere_csi_disabled: boolean;
}

export interface GoogleGkeonpremVmwareClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleGkeonpremVmwareClusterArgsUpgradePolicy {
  control_plane_only?: boolean;
}

export interface GoogleGkeonpremVmwareClusterArgsVcenter {
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
  annotations?: { [key: string]: string };
  description?: string;
  disable_bundled_ingress?: boolean;
  enable_control_plane_v2?: boolean;
  location: string;
  name: string;
  on_prem_version: string;
  anti_affinity_groups: GoogleGkeonpremVmwareClusterArgsAntiAffinityGroups;
  authorization: GoogleGkeonpremVmwareClusterArgsAuthorization;
  auto_repair_config: GoogleGkeonpremVmwareClusterArgsAutoRepairConfig;
  control_plane_node: GoogleGkeonpremVmwareClusterArgsControlPlaneNode;
  dataplane_v2: GoogleGkeonpremVmwareClusterArgsDataplaneV2;
  load_balancer: GoogleGkeonpremVmwareClusterArgsLoadBalancer;
  network_config: GoogleGkeonpremVmwareClusterArgsNetworkConfig;
  storage: GoogleGkeonpremVmwareClusterArgsStorage;
  timeouts?: GoogleGkeonpremVmwareClusterArgsTimeouts;
  upgrade_policy: GoogleGkeonpremVmwareClusterArgsUpgradePolicy;
  vcenter: GoogleGkeonpremVmwareClusterArgsVcenter;
}

export class google_gkeonprem_vmware_cluster extends TerraformResource {
  readonly create_time!: string;
  readonly delete_time!: string;
  readonly effective_annotations!: { [key: string]: string };
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
