import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleContainerNodePoolArgsautoscaling {
  max_node_count?: number;
  min_node_count?: number;
  total_max_node_count?: number;
  total_min_node_count?: number;
}
export interface GoogleContainerNodePoolArgsmanagement {
  auto_repair?: boolean;
  auto_upgrade?: boolean;
}
export interface GoogleContainerNodePoolArgsNetworkConfigAdditionalNodeNetworkConfigs {
  network?: string;
  subnetwork?: string;
}
export interface GoogleContainerNodePoolArgsNetworkConfigAdditionalPodNetworkConfigs {
  secondary_pod_range?: string;
  subnetwork?: string;
}
export interface GoogleContainerNodePoolArgsNetworkConfigNetworkPerformanceConfig {
  total_egress_bandwidth_tier: string;
}
export interface GoogleContainerNodePoolArgsNetworkConfigPodCidrOverprovisionConfig {
  disabled: boolean;
}
export interface GoogleContainerNodePoolArgsNetworkConfig {
  create_pod_range?: boolean;
  additional_node_network_configs: GoogleContainerNodePoolArgsNetworkConfigAdditionalNodeNetworkConfigs;
  additional_pod_network_configs: GoogleContainerNodePoolArgsNetworkConfigAdditionalPodNetworkConfigs;
  network_performance_config: GoogleContainerNodePoolArgsNetworkConfigNetworkPerformanceConfig;
  pod_cidr_overprovision_config: GoogleContainerNodePoolArgsNetworkConfigPodCidrOverprovisionConfig;
}
export interface GoogleContainerNodePoolArgsNodeConfigAdvancedMachineFeatures {
  enable_nested_virtualization?: boolean;
  threads_per_core: number;
}
export interface GoogleContainerNodePoolArgsNodeConfigConfidentialNodes {
  enabled: boolean;
}
export interface GoogleContainerNodePoolArgsNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig {
  secret_uri: string;
}
export interface GoogleContainerNodePoolArgsNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig {
  fqdns: string[];
  gcp_secret_manager_certificate_config: GoogleContainerNodePoolArgsNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig;
}
export interface GoogleContainerNodePoolArgsNodeConfigContainerdConfigPrivateRegistryAccessConfig {
  enabled: boolean;
  certificate_authority_domain_config: GoogleContainerNodePoolArgsNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig;
}
export interface GoogleContainerNodePoolArgsNodeConfigContainerdConfig {
  private_registry_access_config: GoogleContainerNodePoolArgsNodeConfigContainerdConfigPrivateRegistryAccessConfig;
}
export interface GoogleContainerNodePoolArgsNodeConfigEphemeralStorageLocalSsdConfig {
  local_ssd_count: number;
}
export interface GoogleContainerNodePoolArgsNodeConfigFastSocket {
  enabled: boolean;
}
export interface GoogleContainerNodePoolArgsNodeConfigGcfsConfig {
  enabled: boolean;
}
export interface GoogleContainerNodePoolArgsNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
  gpu_driver_version: string;
}
export interface GoogleContainerNodePoolArgsNodeConfigGuestAcceleratorGpuSharingConfig {
  gpu_sharing_strategy: string;
  max_shared_clients_per_gpu: number;
}
export interface GoogleContainerNodePoolArgsNodeConfigGuestAccelerator {
  count: number;
  gpu_partition_size?: string;
  type: string;
  gpu_driver_installation_config: GoogleContainerNodePoolArgsNodeConfigGuestAcceleratorGpuDriverInstallationConfig;
  gpu_sharing_config: GoogleContainerNodePoolArgsNodeConfigGuestAcceleratorGpuSharingConfig;
}
export interface GoogleContainerNodePoolArgsNodeConfiggvnic {
  enabled: boolean;
}
export interface GoogleContainerNodePoolArgsNodeConfigHostMaintenancePolicy {
  maintenance_interval: string;
}
export interface GoogleContainerNodePoolArgsNodeConfigKubeletConfig {
  cpu_cfs_quota?: boolean;
  cpu_cfs_quota_period?: string;
  cpu_manager_policy?: string;
  pod_pids_limit?: number;
}
export interface GoogleContainerNodePoolArgsNodeConfigLinuxNodeConfigHugepagesConfig {
  hugepage_size_1g?: number;
  hugepage_size_2m?: number;
}
export interface GoogleContainerNodePoolArgsNodeConfigLinuxNodeConfig {
  sysctls?: {
    [key: string]: string;
  };
  hugepages_config: GoogleContainerNodePoolArgsNodeConfigLinuxNodeConfigHugepagesConfig;
}
export interface GoogleContainerNodePoolArgsNodeConfigLocalNvmeSsdBlockConfig {
  local_ssd_count: number;
}
export interface GoogleContainerNodePoolArgsNodeConfigReservationAffinity {
  consume_reservation_type: string;
  key?: string;
  values?: string[];
}
export interface GoogleContainerNodePoolArgsNodeConfigSecondaryBootDisks {
  disk_image: string;
  mode?: string;
}
export interface GoogleContainerNodePoolArgsNodeConfigShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
}
export interface GoogleContainerNodePoolArgsNodeConfigSoleTenantConfigNodeAffinity {
  key: string;
  operator: string;
  values: string[];
}
export interface GoogleContainerNodePoolArgsNodeConfigSoleTenantConfig {
  node_affinity: GoogleContainerNodePoolArgsNodeConfigSoleTenantConfigNodeAffinity;
}
export interface GoogleContainerNodePoolArgsNodeConfigtaint {
  effect: string;
  key: string;
  value: string;
}
export interface GoogleContainerNodePoolArgsNodeConfigWorkloadMetadataConfig {
  mode: string;
}
export interface GoogleContainerNodePoolArgsNodeConfig {
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
  advanced_machine_features: GoogleContainerNodePoolArgsNodeConfigAdvancedMachineFeatures;
  confidential_nodes: GoogleContainerNodePoolArgsNodeConfigConfidentialNodes;
  containerd_config: GoogleContainerNodePoolArgsNodeConfigContainerdConfig;
  ephemeral_storage_local_ssd_config: GoogleContainerNodePoolArgsNodeConfigEphemeralStorageLocalSsdConfig;
  fast_socket: GoogleContainerNodePoolArgsNodeConfigFastSocket;
  gcfs_config: GoogleContainerNodePoolArgsNodeConfigGcfsConfig;
  guest_accelerator: GoogleContainerNodePoolArgsNodeConfigGuestAccelerator;
  gvnic: GoogleContainerNodePoolArgsNodeConfiggvnic;
  host_maintenance_policy: GoogleContainerNodePoolArgsNodeConfigHostMaintenancePolicy;
  kubelet_config: GoogleContainerNodePoolArgsNodeConfigKubeletConfig;
  linux_node_config: GoogleContainerNodePoolArgsNodeConfigLinuxNodeConfig;
  local_nvme_ssd_block_config: GoogleContainerNodePoolArgsNodeConfigLocalNvmeSsdBlockConfig;
  reservation_affinity: GoogleContainerNodePoolArgsNodeConfigReservationAffinity;
  secondary_boot_disks: GoogleContainerNodePoolArgsNodeConfigSecondaryBootDisks;
  shielded_instance_config: GoogleContainerNodePoolArgsNodeConfigShieldedInstanceConfig;
  sole_tenant_config: GoogleContainerNodePoolArgsNodeConfigSoleTenantConfig;
  taint: GoogleContainerNodePoolArgsNodeConfigtaint;
  workload_metadata_config: GoogleContainerNodePoolArgsNodeConfigWorkloadMetadataConfig;
}
export interface GoogleContainerNodePoolArgsPlacementPolicy {
  policy_name?: string;
  tpu_topology?: string;
  type: string;
}
export interface GoogleContainerNodePoolArgsQueuedProvisioning {
  enabled: boolean;
}
export interface GoogleContainerNodePoolArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleContainerNodePoolArgsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {}
export interface GoogleContainerNodePoolArgsUpgradeSettingsBlueGreenSettings {
  standard_rollout_policy: GoogleContainerNodePoolArgsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
}
export interface GoogleContainerNodePoolArgsUpgradeSettings {
  strategy?: string;
  blue_green_settings: GoogleContainerNodePoolArgsUpgradeSettingsBlueGreenSettings;
}
export interface GoogleContainerNodePoolArgs {
  cluster: string;
  autoscaling: GoogleContainerNodePoolArgsautoscaling;
  management: GoogleContainerNodePoolArgsmanagement;
  network_config: GoogleContainerNodePoolArgsNetworkConfig;
  node_config: GoogleContainerNodePoolArgsNodeConfig;
  placement_policy: GoogleContainerNodePoolArgsPlacementPolicy;
  queued_provisioning: GoogleContainerNodePoolArgsQueuedProvisioning;
  timeouts: GoogleContainerNodePoolArgstimeouts;
  upgrade_settings: GoogleContainerNodePoolArgsUpgradeSettings;
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