import { TerraformConfig, TerraformResource } from "tfs";
export interface CloudrunConfig {
  disabled: boolean;
  load_balancer_type?: string;
}
export interface ConfigConnectorConfig {
  enabled: boolean;
}
export interface DnsCacheConfig {
  enabled: boolean;
}
export interface GcePersistentDiskCsiDriverConfig {
  enabled: boolean;
}
export interface GcpFilestoreCsiDriverConfig {
  enabled: boolean;
}
export interface GcsFuseCsiDriverConfig {
  enabled: boolean;
}
export interface GkeBackupAgentConfig {
  enabled: boolean;
}
export interface HorizontalPodAutoscaling {
  disabled: boolean;
}
export interface HttpLoadBalancing {
  disabled: boolean;
}
export interface NetworkPolicyConfig {
  disabled: boolean;
}
export interface ParallelstoreCsiDriverConfig {
  enabled: boolean;
}
export interface RayClusterLoggingConfig {
  enabled: boolean;
}
export interface RayClusterMonitoringConfig {
  enabled: boolean;
}
export interface RayOperatorConfig {
  enabled: boolean;
  ray_cluster_logging_config: RayClusterLoggingConfig;
  ray_cluster_monitoring_config: RayClusterMonitoringConfig;
}
export interface StatefulHaConfig {
  enabled: boolean;
}
export interface AddonsConfig {
  cloudrun_config: CloudrunConfig;
  config_connector_config: ConfigConnectorConfig;
  dns_cache_config: DnsCacheConfig;
  gce_persistent_disk_csi_driver_config: GcePersistentDiskCsiDriverConfig;
  gcp_filestore_csi_driver_config: GcpFilestoreCsiDriverConfig;
  gcs_fuse_csi_driver_config: GcsFuseCsiDriverConfig;
  gke_backup_agent_config: GkeBackupAgentConfig;
  horizontal_pod_autoscaling: HorizontalPodAutoscaling;
  http_load_balancing: HttpLoadBalancing;
  network_policy_config: NetworkPolicyConfig;
  parallelstore_csi_driver_config: ParallelstoreCsiDriverConfig;
  ray_operator_config: RayOperatorConfig;
  stateful_ha_config: StatefulHaConfig;
}
export interface AuthenticatorGroupsConfig {
  security_group: string;
}
export interface BinaryAuthorization {
  enabled?: boolean;
}
export interface Management {}
export interface ShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
}
export interface StandardRolloutPolicy {
  batch_soak_duration?: string;
}
export interface BlueGreenSettings {
  standard_rollout_policy: StandardRolloutPolicy;
}
export interface UpgradeSettings {
  max_surge?: number;
  max_unavailable?: number;
  blue_green_settings: BlueGreenSettings;
}
export interface AutoProvisioningDefaults {
  boot_disk_kms_key?: string;
  disk_size?: number;
  disk_type?: string;
  image_type?: string;
  min_cpu_platform?: string;
  service_account?: string;
  management: Management;
  shielded_instance_config: ShieldedInstanceConfig;
  upgrade_settings: UpgradeSettings;
}
export interface ResourceLimits {
  maximum?: number;
  minimum?: number;
  resource_type: string;
}
export interface ClusterAutoscaling {
  autoscaling_profile?: string;
  auto_provisioning_defaults: AutoProvisioningDefaults;
  resource_limits: ResourceLimits;
}
export interface ConfidentialNodes {
  enabled: boolean;
}
export interface DnsEndpointConfig {
  allow_external_traffic?: boolean;
}
export interface ControlPlaneEndpointsConfig {
  dns_endpoint_config: DnsEndpointConfig;
}
export interface CostManagementConfig {
  enabled: boolean;
}
export interface DatabaseEncryption {
  key_name?: string;
  state: string;
}
export interface DefaultSnatStatus {
  disabled: boolean;
}
export interface DnsConfig {
  additive_vpc_scope_dns_domain?: string;
  cluster_dns?: string;
  cluster_dns_domain?: string;
  cluster_dns_scope?: string;
}
export interface EnableK8sBetaApis {
  enabled_apis: string[];
}
export interface Fleet {
  project?: string;
}
export interface GatewayApiConfig {
  channel: string;
}
export interface IdentityServiceConfig {
  enabled?: boolean;
}
export interface AdditionalPodRangesConfig {
  pod_range_names: string[];
}
export interface PodCidrOverprovisionConfig {
  disabled: boolean;
}
export interface IpAllocationPolicy {
  stack_type?: string;
  additional_pod_ranges_config: AdditionalPodRangesConfig;
  pod_cidr_overprovision_config: PodCidrOverprovisionConfig;
}
export interface LoggingConfig {
  enable_components: string[];
}
export interface DailyMaintenanceWindow {
  start_time: string;
}
export interface ExclusionOptions {
  scope: string;
}
export interface MaintenanceExclusion {
  end_time: string;
  exclusion_name: string;
  start_time: string;
  exclusion_options: ExclusionOptions;
}
export interface RecurringWindow {
  end_time: string;
  recurrence: string;
  start_time: string;
}
export interface MaintenancePolicy {
  daily_maintenance_window: DailyMaintenanceWindow;
  maintenance_exclusion: MaintenanceExclusion;
  recurring_window: RecurringWindow;
}
export interface ClientCertificateConfig {
  issue_client_certificate: boolean;
}
export interface MasterAuth {
  client_certificate_config: ClientCertificateConfig;
}
export interface CidrBlocks {
  cidr_block: string;
  display_name?: string;
}
export interface MasterAuthorizedNetworksConfig {
  cidr_blocks: CidrBlocks;
}
export interface MeshCertificates {
  enable_certificates: boolean;
}
export interface AdvancedDatapathObservabilityConfig {
  enable_metrics: boolean;
  enable_relay: boolean;
}
export interface ManagedPrometheus {
  enabled: boolean;
}
export interface MonitoringConfig {
  advanced_datapath_observability_config: AdvancedDatapathObservabilityConfig;
  managed_prometheus: ManagedPrometheus;
}
export interface NetworkPolicy {
  enabled: boolean;
  provider?: string;
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
export interface StandardRolloutPolicy {}
export interface BlueGreenSettings {
  standard_rollout_policy: StandardRolloutPolicy;
}
export interface UpgradeSettings {
  strategy?: string;
  blue_green_settings: BlueGreenSettings;
}
export interface NodePool {
  autoscaling: Autoscaling;
  management: Management;
  network_config: NetworkConfig;
  node_config: NodeConfig;
  placement_policy: PlacementPolicy;
  queued_provisioning: QueuedProvisioning;
  upgrade_settings: UpgradeSettings;
}
export interface NetworkTags {
  tags?: string[];
}
export interface NodeKubeletConfig {}
export interface NodePoolAutoConfig {
  resource_manager_tags?: {
    [key: string]: string;
  };
  network_tags: NetworkTags;
  node_kubelet_config: NodeKubeletConfig;
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
export interface GcfsConfig {
  enabled: boolean;
}
export interface NodeConfigDefaults {
  containerd_config: ContainerdConfig;
  gcfs_config: GcfsConfig;
}
export interface NodePoolDefaults {
  node_config_defaults: NodeConfigDefaults;
}
export interface Filter {
  event_type: string[];
}
export interface Pubsub {
  enabled: boolean;
  topic?: string;
  filter: Filter;
}
export interface NotificationConfig {
  pubsub: Pubsub;
}
export interface MasterGlobalAccessConfig {
  enabled: boolean;
}
export interface PrivateClusterConfig {
  enable_private_endpoint?: boolean;
  enable_private_nodes?: boolean;
  private_endpoint_subnetwork?: string;
  master_global_access_config: MasterGlobalAccessConfig;
}
export interface ReleaseChannel {
  channel: string;
}
export interface BigqueryDestination {
  dataset_id: string;
}
export interface ResourceUsageExportConfig {
  enable_network_egress_metering?: boolean;
  enable_resource_consumption_metering?: boolean;
  bigquery_destination: BigqueryDestination;
}
export interface SecretManagerConfig {
  enabled: boolean;
}
export interface SecurityPostureConfig {}
export interface ServiceExternalIpsConfig {
  enabled: boolean;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface UserManagedKeysConfig {
  aggregation_ca?: string;
  cluster_ca?: string;
  control_plane_disk_encryption_key?: string;
  etcd_api_ca?: string;
  etcd_peer_ca?: string;
  gkeops_etcd_backup_encryption_key?: string;
  service_account_signing_keys?: string[];
  service_account_verification_keys?: string[];
}
export interface VerticalPodAutoscaling {
  enabled: boolean;
}
export interface WorkloadIdentityConfig {
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
  addons_config: AddonsConfig;
  authenticator_groups_config: AuthenticatorGroupsConfig;
  binary_authorization: BinaryAuthorization;
  cluster_autoscaling: ClusterAutoscaling;
  confidential_nodes: ConfidentialNodes;
  control_plane_endpoints_config: ControlPlaneEndpointsConfig;
  cost_management_config: CostManagementConfig;
  database_encryption: DatabaseEncryption;
  default_snat_status: DefaultSnatStatus;
  dns_config: DnsConfig;
  enable_k8s_beta_apis: EnableK8sBetaApis;
  fleet: Fleet;
  gateway_api_config: GatewayApiConfig;
  identity_service_config: IdentityServiceConfig;
  ip_allocation_policy: IpAllocationPolicy;
  logging_config: LoggingConfig;
  maintenance_policy: MaintenancePolicy;
  master_auth: MasterAuth;
  master_authorized_networks_config: MasterAuthorizedNetworksConfig;
  mesh_certificates: MeshCertificates;
  monitoring_config: MonitoringConfig;
  network_policy: NetworkPolicy;
  node_config: NodeConfig;
  node_pool: NodePool;
  node_pool_auto_config: NodePoolAutoConfig;
  node_pool_defaults: NodePoolDefaults;
  notification_config: NotificationConfig;
  private_cluster_config: PrivateClusterConfig;
  release_channel: ReleaseChannel;
  resource_usage_export_config: ResourceUsageExportConfig;
  secret_manager_config: SecretManagerConfig;
  security_posture_config: SecurityPostureConfig;
  service_external_ips_config: ServiceExternalIpsConfig;
  timeouts: Timeouts;
  user_managed_keys_config: UserManagedKeysConfig;
  vertical_pod_autoscaling: VerticalPodAutoscaling;
  workload_identity_config: WorkloadIdentityConfig;
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