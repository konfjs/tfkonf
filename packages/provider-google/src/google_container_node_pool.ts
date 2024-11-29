import { TerraformConfig, TerraformResource } from "tfs";
export interface Autoscaling {
  max_node_count?: number;
  min_node_count?: number;
  total_max_node_count?: number;
  total_min_node_count?: number;
}
export interface Management {
  auto_repair?: boolean;
  auto_upgrade?: boolean;
}
export interface AdditionalNodeNetworkConfigs {
  network?: string;
  subnetwork?: string;
}
export interface AdditionalPodNetworkConfigs {
  secondary_pod_range?: string;
  subnetwork?: string;
}
export interface NetworkPerformanceConfig {
  total_egress_bandwidth_tier: string;
}
export interface PodCidrOverprovisionConfig {
  disabled: boolean;
}
export interface NetworkConfig {
  create_pod_range?: boolean;
  additional_node_network_configs: AdditionalNodeNetworkConfigs;
  additional_pod_network_configs: AdditionalPodNetworkConfigs;
  network_performance_config: NetworkPerformanceConfig;
  pod_cidr_overprovision_config: PodCidrOverprovisionConfig;
}
export interface AdvancedMachineFeatures {
  enable_nested_virtualization?: boolean;
  threads_per_core: number;
}
export interface ConfidentialNodes {
  enabled: boolean;
}
export interface GcpSecretManagerCertificateConfig {
  secret_uri: string;
}
export interface CertificateAuthorityDomainConfig {
  fqdns: string[];
  gcp_secret_manager_certificate_config: GcpSecretManagerCertificateConfig;
}
export interface PrivateRegistryAccessConfig {
  enabled: boolean;
  certificate_authority_domain_config: CertificateAuthorityDomainConfig;
}
export interface ContainerdConfig {
  private_registry_access_config: PrivateRegistryAccessConfig;
}
export interface EphemeralStorageLocalSsdConfig {
  local_ssd_count: number;
}
export interface FastSocket {
  enabled: boolean;
}
export interface GcfsConfig {
  enabled: boolean;
}
export interface GpuDriverInstallationConfig {
  gpu_driver_version: string;
}
export interface GpuSharingConfig {
  gpu_sharing_strategy: string;
  max_shared_clients_per_gpu: number;
}
export interface GuestAccelerator {
  count: number;
  gpu_partition_size?: string;
  type: string;
  gpu_driver_installation_config: GpuDriverInstallationConfig;
  gpu_sharing_config: GpuSharingConfig;
}
export interface Gvnic {
  enabled: boolean;
}
export interface HostMaintenancePolicy {
  maintenance_interval: string;
}
export interface KubeletConfig {
  cpu_cfs_quota?: boolean;
  cpu_cfs_quota_period?: string;
  cpu_manager_policy?: string;
  pod_pids_limit?: number;
}
export interface HugepagesConfig {
  hugepage_size_1g?: number;
  hugepage_size_2m?: number;
}
export interface LinuxNodeConfig {
  sysctls?: {
    [key: string]: string;
  };
  hugepages_config: HugepagesConfig;
}
export interface LocalNvmeSsdBlockConfig {
  local_ssd_count: number;
}
export interface ReservationAffinity {
  consume_reservation_type: string;
  key?: string;
  values?: string[];
}
export interface SecondaryBootDisks {
  disk_image: string;
  mode?: string;
}
export interface ShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
}
export interface NodeAffinity {
  key: string;
  operator: string;
  values: string[];
}
export interface SoleTenantConfig {
  node_affinity: NodeAffinity;
}
export interface Taint {
  effect: string;
  key: string;
  value: string;
}
export interface WorkloadMetadataConfig {
  mode: string;
}
export interface NodeConfig {
  boot_disk_kms_key?: string;
  enable_confidential_storage?: boolean;
  node_group?: string;
  preemptible?: boolean;
  resource_labels?: {
    [key: string]: string;
  };
  resource_manager_tags?: {
    [key: string]: string;
  };
  spot?: boolean;
  storage_pools?: string[];
  tags?: string[];
  advanced_machine_features: AdvancedMachineFeatures;
  confidential_nodes: ConfidentialNodes;
  containerd_config: ContainerdConfig;
  ephemeral_storage_local_ssd_config: EphemeralStorageLocalSsdConfig;
  fast_socket: FastSocket;
  gcfs_config: GcfsConfig;
  guest_accelerator: GuestAccelerator;
  gvnic: Gvnic;
  host_maintenance_policy: HostMaintenancePolicy;
  kubelet_config: KubeletConfig;
  linux_node_config: LinuxNodeConfig;
  local_nvme_ssd_block_config: LocalNvmeSsdBlockConfig;
  reservation_affinity: ReservationAffinity;
  secondary_boot_disks: SecondaryBootDisks;
  shielded_instance_config: ShieldedInstanceConfig;
  sole_tenant_config: SoleTenantConfig;
  taint: Taint;
  workload_metadata_config: WorkloadMetadataConfig;
}
export interface PlacementPolicy {
  policy_name?: string;
  tpu_topology?: string;
  type: string;
}
export interface QueuedProvisioning {
  enabled: boolean;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface StandardRolloutPolicy {}
export interface BlueGreenSettings {
  standard_rollout_policy: StandardRolloutPolicy;
}
export interface UpgradeSettings {
  strategy?: string;
  blue_green_settings: BlueGreenSettings;
}
export interface GoogleContainerNodePoolArgs {
  cluster: string;
  autoscaling: Autoscaling;
  management: Management;
  network_config: NetworkConfig;
  node_config: NodeConfig;
  placement_policy: PlacementPolicy;
  queued_provisioning: QueuedProvisioning;
  timeouts: Timeouts;
  upgrade_settings: UpgradeSettings;
}
export class google_container_node_pool extends TerraformResource {
  readonly id?: string;
  readonly initial_node_count?: number;
  readonly instance_group_urls!: string[];
  readonly location?: string;
  readonly managed_instance_group_urls!: string[];
  readonly max_pods_per_node?: number;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly node_count?: number;
  readonly node_locations?: string[];
  readonly operation!: string;
  readonly project?: string;
  readonly version?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleContainerNodePoolArgs) {
    super(config, "resource", args, resourceName, "google_container_node_pool");
  }
}