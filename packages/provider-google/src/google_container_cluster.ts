import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleContainerClusterArgsAddonsConfigCloudrunConfig {
  disabled: boolean;
  load_balancer_type?: string;
}
export interface GoogleContainerClusterArgsAddonsConfigConfigConnectorConfig {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsAddonsConfigDnsCacheConfig {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsAddonsConfigGcePersistentDiskCsiDriverConfig {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsAddonsConfigGcpFilestoreCsiDriverConfig {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsAddonsConfigGcsFuseCsiDriverConfig {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsAddonsConfigGkeBackupAgentConfig {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsAddonsConfigHorizontalPodAutoscaling {
  disabled: boolean;
}
export interface GoogleContainerClusterArgsAddonsConfigHttpLoadBalancing {
  disabled: boolean;
}
export interface GoogleContainerClusterArgsAddonsConfigNetworkPolicyConfig {
  disabled: boolean;
}
export interface GoogleContainerClusterArgsAddonsConfigParallelstoreCsiDriverConfig {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsAddonsConfigRayOperatorConfigRayClusterLoggingConfig {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsAddonsConfigRayOperatorConfigRayClusterMonitoringConfig {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsAddonsConfigRayOperatorConfig {
  enabled: boolean;
  ray_cluster_logging_config: GoogleContainerClusterArgsAddonsConfigRayOperatorConfigRayClusterLoggingConfig;
  ray_cluster_monitoring_config: GoogleContainerClusterArgsAddonsConfigRayOperatorConfigRayClusterMonitoringConfig;
}
export interface GoogleContainerClusterArgsAddonsConfigStatefulHaConfig {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsAddonsConfig {
  cloudrun_config: GoogleContainerClusterArgsAddonsConfigCloudrunConfig;
  config_connector_config: GoogleContainerClusterArgsAddonsConfigConfigConnectorConfig;
  dns_cache_config: GoogleContainerClusterArgsAddonsConfigDnsCacheConfig;
  gce_persistent_disk_csi_driver_config: GoogleContainerClusterArgsAddonsConfigGcePersistentDiskCsiDriverConfig;
  gcp_filestore_csi_driver_config: GoogleContainerClusterArgsAddonsConfigGcpFilestoreCsiDriverConfig;
  gcs_fuse_csi_driver_config: GoogleContainerClusterArgsAddonsConfigGcsFuseCsiDriverConfig;
  gke_backup_agent_config: GoogleContainerClusterArgsAddonsConfigGkeBackupAgentConfig;
  horizontal_pod_autoscaling: GoogleContainerClusterArgsAddonsConfigHorizontalPodAutoscaling;
  http_load_balancing: GoogleContainerClusterArgsAddonsConfigHttpLoadBalancing;
  network_policy_config: GoogleContainerClusterArgsAddonsConfigNetworkPolicyConfig;
  parallelstore_csi_driver_config: GoogleContainerClusterArgsAddonsConfigParallelstoreCsiDriverConfig;
  ray_operator_config: GoogleContainerClusterArgsAddonsConfigRayOperatorConfig;
  stateful_ha_config: GoogleContainerClusterArgsAddonsConfigStatefulHaConfig;
}
export interface GoogleContainerClusterArgsAuthenticatorGroupsConfig {
  security_group: string;
}
export interface GoogleContainerClusterArgsBinaryAuthorization {
  enabled?: boolean;
}
export interface GoogleContainerClusterArgsClusterAutoscalingAutoProvisioningDefaultsManagement {}
export interface GoogleContainerClusterArgsClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
}
export interface GoogleContainerClusterArgsClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {
  batch_soak_duration?: string;
}
export interface GoogleContainerClusterArgsClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings {
  standard_rollout_policy: GoogleContainerClusterArgsClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
}
export interface GoogleContainerClusterArgsClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings {
  max_surge?: number;
  max_unavailable?: number;
  blue_green_settings: GoogleContainerClusterArgsClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings;
}
export interface GoogleContainerClusterArgsClusterAutoscalingAutoProvisioningDefaults {
  boot_disk_kms_key?: string;
  disk_size?: number;
  disk_type?: string;
  image_type?: string;
  min_cpu_platform?: string;
  service_account?: string;
  management: GoogleContainerClusterArgsClusterAutoscalingAutoProvisioningDefaultsManagement;
  shielded_instance_config: GoogleContainerClusterArgsClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig;
  upgrade_settings: GoogleContainerClusterArgsClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings;
}
export interface GoogleContainerClusterArgsClusterAutoscalingResourceLimits {
  maximum?: number;
  minimum?: number;
  resource_type: string;
}
export interface GoogleContainerClusterArgsClusterAutoscaling {
  autoscaling_profile?: string;
  auto_provisioning_defaults: GoogleContainerClusterArgsClusterAutoscalingAutoProvisioningDefaults;
  resource_limits: GoogleContainerClusterArgsClusterAutoscalingResourceLimits;
}
export interface GoogleContainerClusterArgsConfidentialNodes {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsControlPlaneEndpointsConfigDnsEndpointConfig {
  allow_external_traffic?: boolean;
}
export interface GoogleContainerClusterArgsControlPlaneEndpointsConfig {
  dns_endpoint_config: GoogleContainerClusterArgsControlPlaneEndpointsConfigDnsEndpointConfig;
}
export interface GoogleContainerClusterArgsCostManagementConfig {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsDatabaseEncryption {
  key_name?: string;
  state: string;
}
export interface GoogleContainerClusterArgsDefaultSnatStatus {
  disabled: boolean;
}
export interface GoogleContainerClusterArgsDnsConfig {
  additive_vpc_scope_dns_domain?: string;
  cluster_dns?: string;
  cluster_dns_domain?: string;
  cluster_dns_scope?: string;
}
export interface GoogleContainerClusterArgsEnableK8sBetaApis {
  enabled_apis: string[];
}
export interface GoogleContainerClusterArgsFleet {
  project?: string;
}
export interface GoogleContainerClusterArgsGatewayApiConfig {
  channel: string;
}
export interface GoogleContainerClusterArgsIdentityServiceConfig {
  enabled?: boolean;
}
export interface GoogleContainerClusterArgsIpAllocationPolicyAdditionalPodRangesConfig {
  pod_range_names: string[];
}
export interface GoogleContainerClusterArgsIpAllocationPolicyPodCidrOverprovisionConfig {
  disabled: boolean;
}
export interface GoogleContainerClusterArgsIpAllocationPolicy {
  stack_type?: string;
  additional_pod_ranges_config: GoogleContainerClusterArgsIpAllocationPolicyAdditionalPodRangesConfig;
  pod_cidr_overprovision_config: GoogleContainerClusterArgsIpAllocationPolicyPodCidrOverprovisionConfig;
}
export interface GoogleContainerClusterArgsLoggingConfig {
  enable_components: string[];
}
export interface GoogleContainerClusterArgsMaintenancePolicyDailyMaintenanceWindow {
  start_time: string;
}
export interface GoogleContainerClusterArgsMaintenancePolicyMaintenanceExclusionExclusionOptions {
  scope: string;
}
export interface GoogleContainerClusterArgsMaintenancePolicyMaintenanceExclusion {
  end_time: string;
  exclusion_name: string;
  start_time: string;
  exclusion_options: GoogleContainerClusterArgsMaintenancePolicyMaintenanceExclusionExclusionOptions;
}
export interface GoogleContainerClusterArgsMaintenancePolicyRecurringWindow {
  end_time: string;
  recurrence: string;
  start_time: string;
}
export interface GoogleContainerClusterArgsMaintenancePolicy {
  daily_maintenance_window: GoogleContainerClusterArgsMaintenancePolicyDailyMaintenanceWindow;
  maintenance_exclusion: GoogleContainerClusterArgsMaintenancePolicyMaintenanceExclusion;
  recurring_window: GoogleContainerClusterArgsMaintenancePolicyRecurringWindow;
}
export interface GoogleContainerClusterArgsMasterAuthClientCertificateConfig {
  issue_client_certificate: boolean;
}
export interface GoogleContainerClusterArgsMasterAuth {
  client_certificate_config: GoogleContainerClusterArgsMasterAuthClientCertificateConfig;
}
export interface GoogleContainerClusterArgsMasterAuthorizedNetworksConfigCidrBlocks {
  cidr_block: string;
  display_name?: string;
}
export interface GoogleContainerClusterArgsMasterAuthorizedNetworksConfig {
  cidr_blocks: GoogleContainerClusterArgsMasterAuthorizedNetworksConfigCidrBlocks;
}
export interface GoogleContainerClusterArgsMeshCertificates {
  enable_certificates: boolean;
}
export interface GoogleContainerClusterArgsMonitoringConfigAdvancedDatapathObservabilityConfig {
  enable_metrics: boolean;
  enable_relay: boolean;
}
export interface GoogleContainerClusterArgsMonitoringConfigManagedPrometheus {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsMonitoringConfig {
  advanced_datapath_observability_config: GoogleContainerClusterArgsMonitoringConfigAdvancedDatapathObservabilityConfig;
  managed_prometheus: GoogleContainerClusterArgsMonitoringConfigManagedPrometheus;
}
export interface GoogleContainerClusterArgsNetworkPolicy {
  enabled: boolean;
  provider?: string;
}
export interface GoogleContainerClusterArgsNodeConfigAdvancedMachineFeatures {
  enable_nested_virtualization?: boolean;
  threads_per_core: number;
}
export interface GoogleContainerClusterArgsNodeConfigConfidentialNodes {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig {
  secret_uri: string;
}
export interface GoogleContainerClusterArgsNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig {
  fqdns: string[];
  gcp_secret_manager_certificate_config: GoogleContainerClusterArgsNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig;
}
export interface GoogleContainerClusterArgsNodeConfigContainerdConfigPrivateRegistryAccessConfig {
  enabled: boolean;
  certificate_authority_domain_config: GoogleContainerClusterArgsNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig;
}
export interface GoogleContainerClusterArgsNodeConfigContainerdConfig {
  private_registry_access_config: GoogleContainerClusterArgsNodeConfigContainerdConfigPrivateRegistryAccessConfig;
}
export interface GoogleContainerClusterArgsNodeConfigEphemeralStorageLocalSsdConfig {
  local_ssd_count: number;
}
export interface GoogleContainerClusterArgsNodeConfigFastSocket {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsNodeConfigGcfsConfig {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
  gpu_driver_version: string;
}
export interface GoogleContainerClusterArgsNodeConfigGuestAcceleratorGpuSharingConfig {
  gpu_sharing_strategy: string;
  max_shared_clients_per_gpu: number;
}
export interface GoogleContainerClusterArgsNodeConfigGuestAccelerator {
  count: number;
  gpu_partition_size?: string;
  type: string;
  gpu_driver_installation_config: GoogleContainerClusterArgsNodeConfigGuestAcceleratorGpuDriverInstallationConfig;
  gpu_sharing_config: GoogleContainerClusterArgsNodeConfigGuestAcceleratorGpuSharingConfig;
}
export interface GoogleContainerClusterArgsNodeConfigGvnic {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsNodeConfigHostMaintenancePolicy {
  maintenance_interval: string;
}
export interface GoogleContainerClusterArgsNodeConfigKubeletConfig {
  cpu_cfs_quota?: boolean;
  cpu_cfs_quota_period?: string;
  cpu_manager_policy?: string;
  pod_pids_limit?: number;
}
export interface GoogleContainerClusterArgsNodeConfigLinuxNodeConfigHugepagesConfig {
  hugepage_size_1g?: number;
  hugepage_size_2m?: number;
}
export interface GoogleContainerClusterArgsNodeConfigLinuxNodeConfig {
  sysctls?: {
    [key: string]: string;
  };
  hugepages_config: GoogleContainerClusterArgsNodeConfigLinuxNodeConfigHugepagesConfig;
}
export interface GoogleContainerClusterArgsNodeConfigLocalNvmeSsdBlockConfig {
  local_ssd_count: number;
}
export interface GoogleContainerClusterArgsNodeConfigReservationAffinity {
  consume_reservation_type: string;
  key?: string;
  values?: string[];
}
export interface GoogleContainerClusterArgsNodeConfigSecondaryBootDisks {
  disk_image: string;
  mode?: string;
}
export interface GoogleContainerClusterArgsNodeConfigShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
}
export interface GoogleContainerClusterArgsNodeConfigSoleTenantConfigNodeAffinity {
  key: string;
  operator: string;
  values: string[];
}
export interface GoogleContainerClusterArgsNodeConfigSoleTenantConfig {
  node_affinity: GoogleContainerClusterArgsNodeConfigSoleTenantConfigNodeAffinity;
}
export interface GoogleContainerClusterArgsNodeConfigTaint {
  effect: string;
  key: string;
  value: string;
}
export interface GoogleContainerClusterArgsNodeConfigWorkloadMetadataConfig {
  mode: string;
}
export interface GoogleContainerClusterArgsNodeConfig {
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
  advanced_machine_features: GoogleContainerClusterArgsNodeConfigAdvancedMachineFeatures;
  confidential_nodes: GoogleContainerClusterArgsNodeConfigConfidentialNodes;
  containerd_config: GoogleContainerClusterArgsNodeConfigContainerdConfig;
  ephemeral_storage_local_ssd_config: GoogleContainerClusterArgsNodeConfigEphemeralStorageLocalSsdConfig;
  fast_socket: GoogleContainerClusterArgsNodeConfigFastSocket;
  gcfs_config: GoogleContainerClusterArgsNodeConfigGcfsConfig;
  guest_accelerator: GoogleContainerClusterArgsNodeConfigGuestAccelerator;
  gvnic: GoogleContainerClusterArgsNodeConfigGvnic;
  host_maintenance_policy: GoogleContainerClusterArgsNodeConfigHostMaintenancePolicy;
  kubelet_config: GoogleContainerClusterArgsNodeConfigKubeletConfig;
  linux_node_config: GoogleContainerClusterArgsNodeConfigLinuxNodeConfig;
  local_nvme_ssd_block_config: GoogleContainerClusterArgsNodeConfigLocalNvmeSsdBlockConfig;
  reservation_affinity: GoogleContainerClusterArgsNodeConfigReservationAffinity;
  secondary_boot_disks: GoogleContainerClusterArgsNodeConfigSecondaryBootDisks;
  shielded_instance_config: GoogleContainerClusterArgsNodeConfigShieldedInstanceConfig;
  sole_tenant_config: GoogleContainerClusterArgsNodeConfigSoleTenantConfig;
  taint: GoogleContainerClusterArgsNodeConfigTaint;
  workload_metadata_config: GoogleContainerClusterArgsNodeConfigWorkloadMetadataConfig;
}
export interface GoogleContainerClusterArgsNodePoolAutoscaling {
  max_node_count?: number;
  min_node_count?: number;
  total_max_node_count?: number;
  total_min_node_count?: number;
}
export interface GoogleContainerClusterArgsNodePoolManagement {
  auto_repair?: boolean;
  auto_upgrade?: boolean;
}
export interface GoogleContainerClusterArgsNodePoolNetworkConfigAdditionalNodeNetworkConfigs {
  network?: string;
  subnetwork?: string;
}
export interface GoogleContainerClusterArgsNodePoolNetworkConfigAdditionalPodNetworkConfigs {
  secondary_pod_range?: string;
  subnetwork?: string;
}
export interface GoogleContainerClusterArgsNodePoolNetworkConfigNetworkPerformanceConfig {
  total_egress_bandwidth_tier: string;
}
export interface GoogleContainerClusterArgsNodePoolNetworkConfigPodCidrOverprovisionConfig {
  disabled: boolean;
}
export interface GoogleContainerClusterArgsNodePoolNetworkConfig {
  create_pod_range?: boolean;
  additional_node_network_configs: GoogleContainerClusterArgsNodePoolNetworkConfigAdditionalNodeNetworkConfigs;
  additional_pod_network_configs: GoogleContainerClusterArgsNodePoolNetworkConfigAdditionalPodNetworkConfigs;
  network_performance_config: GoogleContainerClusterArgsNodePoolNetworkConfigNetworkPerformanceConfig;
  pod_cidr_overprovision_config: GoogleContainerClusterArgsNodePoolNetworkConfigPodCidrOverprovisionConfig;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigAdvancedMachineFeatures {
  enable_nested_virtualization?: boolean;
  threads_per_core: number;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigConfidentialNodes {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig {
  secret_uri: string;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig {
  fqdns: string[];
  gcp_secret_manager_certificate_config: GoogleContainerClusterArgsNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig {
  enabled: boolean;
  certificate_authority_domain_config: GoogleContainerClusterArgsNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigContainerdConfig {
  private_registry_access_config: GoogleContainerClusterArgsNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigEphemeralStorageLocalSsdConfig {
  local_ssd_count: number;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigFastSocket {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigGcfsConfig {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
  gpu_driver_version: string;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigGuestAcceleratorGpuSharingConfig {
  gpu_sharing_strategy: string;
  max_shared_clients_per_gpu: number;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigGuestAccelerator {
  count: number;
  gpu_partition_size?: string;
  type: string;
  gpu_driver_installation_config: GoogleContainerClusterArgsNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig;
  gpu_sharing_config: GoogleContainerClusterArgsNodePoolNodeConfigGuestAcceleratorGpuSharingConfig;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigGvnic {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigHostMaintenancePolicy {
  maintenance_interval: string;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigKubeletConfig {
  cpu_cfs_quota?: boolean;
  cpu_cfs_quota_period?: string;
  cpu_manager_policy?: string;
  pod_pids_limit?: number;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigLinuxNodeConfigHugepagesConfig {
  hugepage_size_1g?: number;
  hugepage_size_2m?: number;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigLinuxNodeConfig {
  sysctls?: {
    [key: string]: string;
  };
  hugepages_config: GoogleContainerClusterArgsNodePoolNodeConfigLinuxNodeConfigHugepagesConfig;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigLocalNvmeSsdBlockConfig {
  local_ssd_count: number;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigReservationAffinity {
  consume_reservation_type: string;
  key?: string;
  values?: string[];
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigSecondaryBootDisks {
  disk_image: string;
  mode?: string;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigSoleTenantConfigNodeAffinity {
  key: string;
  operator: string;
  values: string[];
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigSoleTenantConfig {
  node_affinity: GoogleContainerClusterArgsNodePoolNodeConfigSoleTenantConfigNodeAffinity;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigTaint {
  effect: string;
  key: string;
  value: string;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfigWorkloadMetadataConfig {
  mode: string;
}
export interface GoogleContainerClusterArgsNodePoolNodeConfig {
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
  advanced_machine_features: GoogleContainerClusterArgsNodePoolNodeConfigAdvancedMachineFeatures;
  confidential_nodes: GoogleContainerClusterArgsNodePoolNodeConfigConfidentialNodes;
  containerd_config: GoogleContainerClusterArgsNodePoolNodeConfigContainerdConfig;
  ephemeral_storage_local_ssd_config: GoogleContainerClusterArgsNodePoolNodeConfigEphemeralStorageLocalSsdConfig;
  fast_socket: GoogleContainerClusterArgsNodePoolNodeConfigFastSocket;
  gcfs_config: GoogleContainerClusterArgsNodePoolNodeConfigGcfsConfig;
  guest_accelerator: GoogleContainerClusterArgsNodePoolNodeConfigGuestAccelerator;
  gvnic: GoogleContainerClusterArgsNodePoolNodeConfigGvnic;
  host_maintenance_policy: GoogleContainerClusterArgsNodePoolNodeConfigHostMaintenancePolicy;
  kubelet_config: GoogleContainerClusterArgsNodePoolNodeConfigKubeletConfig;
  linux_node_config: GoogleContainerClusterArgsNodePoolNodeConfigLinuxNodeConfig;
  local_nvme_ssd_block_config: GoogleContainerClusterArgsNodePoolNodeConfigLocalNvmeSsdBlockConfig;
  reservation_affinity: GoogleContainerClusterArgsNodePoolNodeConfigReservationAffinity;
  secondary_boot_disks: GoogleContainerClusterArgsNodePoolNodeConfigSecondaryBootDisks;
  shielded_instance_config: GoogleContainerClusterArgsNodePoolNodeConfigShieldedInstanceConfig;
  sole_tenant_config: GoogleContainerClusterArgsNodePoolNodeConfigSoleTenantConfig;
  taint: GoogleContainerClusterArgsNodePoolNodeConfigTaint;
  workload_metadata_config: GoogleContainerClusterArgsNodePoolNodeConfigWorkloadMetadataConfig;
}
export interface GoogleContainerClusterArgsNodePoolPlacementPolicy {
  policy_name?: string;
  tpu_topology?: string;
  type: string;
}
export interface GoogleContainerClusterArgsNodePoolQueuedProvisioning {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {}
export interface GoogleContainerClusterArgsNodePoolUpgradeSettingsBlueGreenSettings {
  standard_rollout_policy: GoogleContainerClusterArgsNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
}
export interface GoogleContainerClusterArgsNodePoolUpgradeSettings {
  strategy?: string;
  blue_green_settings: GoogleContainerClusterArgsNodePoolUpgradeSettingsBlueGreenSettings;
}
export interface GoogleContainerClusterArgsNodePool {
  autoscaling: GoogleContainerClusterArgsNodePoolAutoscaling;
  management: GoogleContainerClusterArgsNodePoolManagement;
  network_config: GoogleContainerClusterArgsNodePoolNetworkConfig;
  node_config: GoogleContainerClusterArgsNodePoolNodeConfig;
  placement_policy: GoogleContainerClusterArgsNodePoolPlacementPolicy;
  queued_provisioning: GoogleContainerClusterArgsNodePoolQueuedProvisioning;
  upgrade_settings: GoogleContainerClusterArgsNodePoolUpgradeSettings;
}
export interface GoogleContainerClusterArgsNodePoolAutoConfigNetworkTags {
  tags?: string[];
}
export interface GoogleContainerClusterArgsNodePoolAutoConfigNodeKubeletConfig {}
export interface GoogleContainerClusterArgsNodePoolAutoConfig {
  resource_manager_tags?: {
    [key: string]: string;
  };
  network_tags: GoogleContainerClusterArgsNodePoolAutoConfigNetworkTags;
  node_kubelet_config: GoogleContainerClusterArgsNodePoolAutoConfigNodeKubeletConfig;
}
export interface GoogleContainerClusterArgsNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig {
  secret_uri: string;
}
export interface GoogleContainerClusterArgsNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig {
  fqdns: string[];
  gcp_secret_manager_certificate_config: GoogleContainerClusterArgsNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig;
}
export interface GoogleContainerClusterArgsNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig {
  enabled: boolean;
  certificate_authority_domain_config: GoogleContainerClusterArgsNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig;
}
export interface GoogleContainerClusterArgsNodePoolDefaultsNodeConfigDefaultsContainerdConfig {
  private_registry_access_config: GoogleContainerClusterArgsNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig;
}
export interface GoogleContainerClusterArgsNodePoolDefaultsNodeConfigDefaultsGcfsConfig {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsNodePoolDefaultsNodeConfigDefaults {
  containerd_config: GoogleContainerClusterArgsNodePoolDefaultsNodeConfigDefaultsContainerdConfig;
  gcfs_config: GoogleContainerClusterArgsNodePoolDefaultsNodeConfigDefaultsGcfsConfig;
}
export interface GoogleContainerClusterArgsNodePoolDefaults {
  node_config_defaults: GoogleContainerClusterArgsNodePoolDefaultsNodeConfigDefaults;
}
export interface GoogleContainerClusterArgsNotificationConfigPubsubFilter {
  event_type: string[];
}
export interface GoogleContainerClusterArgsNotificationConfigPubsub {
  enabled: boolean;
  topic?: string;
  filter: GoogleContainerClusterArgsNotificationConfigPubsubFilter;
}
export interface GoogleContainerClusterArgsNotificationConfig {
  pubsub: GoogleContainerClusterArgsNotificationConfigPubsub;
}
export interface GoogleContainerClusterArgsPrivateClusterConfigMasterGlobalAccessConfig {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsPrivateClusterConfig {
  enable_private_endpoint?: boolean;
  enable_private_nodes?: boolean;
  private_endpoint_subnetwork?: string;
  master_global_access_config: GoogleContainerClusterArgsPrivateClusterConfigMasterGlobalAccessConfig;
}
export interface GoogleContainerClusterArgsReleaseChannel {
  channel: string;
}
export interface GoogleContainerClusterArgsResourceUsageExportConfigBigqueryDestination {
  dataset_id: string;
}
export interface GoogleContainerClusterArgsResourceUsageExportConfig {
  enable_network_egress_metering?: boolean;
  enable_resource_consumption_metering?: boolean;
  bigquery_destination: GoogleContainerClusterArgsResourceUsageExportConfigBigqueryDestination;
}
export interface GoogleContainerClusterArgsSecretManagerConfig {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsSecurityPostureConfig {}
export interface GoogleContainerClusterArgsServiceExternalIpsConfig {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface GoogleContainerClusterArgsUserManagedKeysConfig {
  aggregation_ca?: string;
  cluster_ca?: string;
  control_plane_disk_encryption_key?: string;
  etcd_api_ca?: string;
  etcd_peer_ca?: string;
  gkeops_etcd_backup_encryption_key?: string;
  service_account_signing_keys?: string[];
  service_account_verification_keys?: string[];
}
export interface GoogleContainerClusterArgsVerticalPodAutoscaling {
  enabled: boolean;
}
export interface GoogleContainerClusterArgsWorkloadIdentityConfig {
  workload_pool?: string;
}
export interface GoogleContainerClusterArgs {
  allow_net_admin?: boolean;
  deletion_protection?: boolean;
  description?: string;
  enable_autopilot?: boolean;
  enable_cilium_clusterwide_network_policy?: boolean;
  enable_kubernetes_alpha?: boolean;
  enable_l4_ilb_subsetting?: boolean;
  enable_legacy_abac?: boolean;
  enable_multi_networking?: boolean;
  enable_shielded_nodes?: boolean;
  enable_tpu?: boolean;
  initial_node_count?: number;
  min_master_version?: string;
  name: string;
  network?: string;
  remove_default_node_pool?: boolean;
  resource_labels?: {
    [key: string]: string;
  };
  addons_config: GoogleContainerClusterArgsAddonsConfig;
  authenticator_groups_config: GoogleContainerClusterArgsAuthenticatorGroupsConfig;
  binary_authorization: GoogleContainerClusterArgsBinaryAuthorization;
  cluster_autoscaling: GoogleContainerClusterArgsClusterAutoscaling;
  confidential_nodes: GoogleContainerClusterArgsConfidentialNodes;
  control_plane_endpoints_config: GoogleContainerClusterArgsControlPlaneEndpointsConfig;
  cost_management_config: GoogleContainerClusterArgsCostManagementConfig;
  database_encryption: GoogleContainerClusterArgsDatabaseEncryption;
  default_snat_status: GoogleContainerClusterArgsDefaultSnatStatus;
  dns_config: GoogleContainerClusterArgsDnsConfig;
  enable_k8s_beta_apis: GoogleContainerClusterArgsEnableK8sBetaApis;
  fleet: GoogleContainerClusterArgsFleet;
  gateway_api_config: GoogleContainerClusterArgsGatewayApiConfig;
  identity_service_config: GoogleContainerClusterArgsIdentityServiceConfig;
  ip_allocation_policy: GoogleContainerClusterArgsIpAllocationPolicy;
  logging_config: GoogleContainerClusterArgsLoggingConfig;
  maintenance_policy: GoogleContainerClusterArgsMaintenancePolicy;
  master_auth: GoogleContainerClusterArgsMasterAuth;
  master_authorized_networks_config: GoogleContainerClusterArgsMasterAuthorizedNetworksConfig;
  mesh_certificates: GoogleContainerClusterArgsMeshCertificates;
  monitoring_config: GoogleContainerClusterArgsMonitoringConfig;
  network_policy: GoogleContainerClusterArgsNetworkPolicy;
  node_config: GoogleContainerClusterArgsNodeConfig;
  node_pool: GoogleContainerClusterArgsNodePool;
  node_pool_auto_config: GoogleContainerClusterArgsNodePoolAutoConfig;
  node_pool_defaults: GoogleContainerClusterArgsNodePoolDefaults;
  notification_config: GoogleContainerClusterArgsNotificationConfig;
  private_cluster_config: GoogleContainerClusterArgsPrivateClusterConfig;
  release_channel: GoogleContainerClusterArgsReleaseChannel;
  resource_usage_export_config: GoogleContainerClusterArgsResourceUsageExportConfig;
  secret_manager_config: GoogleContainerClusterArgsSecretManagerConfig;
  security_posture_config: GoogleContainerClusterArgsSecurityPostureConfig;
  service_external_ips_config: GoogleContainerClusterArgsServiceExternalIpsConfig;
  timeouts: GoogleContainerClusterArgsTimeouts;
  user_managed_keys_config: GoogleContainerClusterArgsUserManagedKeysConfig;
  vertical_pod_autoscaling: GoogleContainerClusterArgsVerticalPodAutoscaling;
  workload_identity_config: GoogleContainerClusterArgsWorkloadIdentityConfig;
}
export class google_container_cluster extends TerraformResource {
  readonly cluster_ipv4_cidr?: string;
  readonly datapath_provider?: string;
  readonly default_max_pods_per_node?: number;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly enable_intranode_visibility?: boolean;
  readonly endpoint!: string;
  readonly id?: string;
  readonly label_fingerprint!: string;
  readonly location?: string;
  readonly logging_service?: string;
  readonly master_version!: string;
  readonly monitoring_service?: string;
  readonly networking_mode?: string;
  readonly node_locations?: string[];
  readonly node_version?: string;
  readonly operation!: string;
  readonly private_ipv6_google_access?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly services_ipv4_cidr!: string;
  readonly subnetwork?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly tpu_ipv4_cidr_block!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleContainerClusterArgs) {
    super(config, "resource", args, resourceName, "google_container_cluster");
  }
}