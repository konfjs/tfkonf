import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataprocClusterArgsClusterConfigAutoscalingConfig {
  policy_uri: string;
}
export interface GoogleDataprocClusterArgsClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigaccelerators {
  accelerator_count: number;
  accelerator_type: string;
}
export interface GoogleDataprocClusterArgsClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfig {
  boot_disk_type?: string;
  local_ssd_interface?: string;
}
export interface GoogleDataprocClusterArgsClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfig {
  accelerators: GoogleDataprocClusterArgsClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigaccelerators;
  disk_config: GoogleDataprocClusterArgsClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfigDiskConfig;
}
export interface GoogleDataprocClusterArgsClusterConfigAuxiliaryNodeGroupsNodeGroup {
  roles: string[];
  node_group_config: GoogleDataprocClusterArgsClusterConfigAuxiliaryNodeGroupsNodeGroupNodeGroupConfig;
}
export interface GoogleDataprocClusterArgsClusterConfigAuxiliaryNodeGroups {
  node_group: GoogleDataprocClusterArgsClusterConfigAuxiliaryNodeGroupsNodeGroup;
}
export interface GoogleDataprocClusterArgsClusterConfigDataprocMetricConfigmetrics {
  metric_overrides?: string[];
  metric_source: string;
}
export interface GoogleDataprocClusterArgsClusterConfigDataprocMetricConfig {
  metrics: GoogleDataprocClusterArgsClusterConfigDataprocMetricConfigmetrics;
}
export interface GoogleDataprocClusterArgsClusterConfigEncryptionConfig {
  kms_key_name: string;
}
export interface GoogleDataprocClusterArgsClusterConfigEndpointConfig {
  enable_http_port_access: boolean;
}
export interface GoogleDataprocClusterArgsClusterConfigGceClusterConfigNodeGroupAffinity {
  node_group_uri: string;
}
export interface GoogleDataprocClusterArgsClusterConfigGceClusterConfigReservationAffinity {
  consume_reservation_type?: string;
  key?: string;
  values?: string[];
}
export interface GoogleDataprocClusterArgsClusterConfigGceClusterConfigShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}
export interface GoogleDataprocClusterArgsClusterConfigGceClusterConfig {
  internal_ip_only?: boolean;
  metadata?: {
    [key: string]: string;
  };
  service_account?: string;
  subnetwork?: string;
  tags?: string[];
  node_group_affinity: GoogleDataprocClusterArgsClusterConfigGceClusterConfigNodeGroupAffinity;
  reservation_affinity: GoogleDataprocClusterArgsClusterConfigGceClusterConfigReservationAffinity;
  shielded_instance_config: GoogleDataprocClusterArgsClusterConfigGceClusterConfigShieldedInstanceConfig;
}
export interface GoogleDataprocClusterArgsClusterConfigInitializationAction {
  script: string;
  timeout_sec?: number;
}
export interface GoogleDataprocClusterArgsClusterConfigLifecycleConfig {
  auto_delete_time?: string;
  idle_delete_ttl?: string;
}
export interface GoogleDataprocClusterArgsClusterConfigMasterConfigaccelerators {
  accelerator_count: number;
  accelerator_type: string;
}
export interface GoogleDataprocClusterArgsClusterConfigMasterConfigDiskConfig {
  boot_disk_type?: string;
  local_ssd_interface?: string;
}
export interface GoogleDataprocClusterArgsClusterConfigMasterConfig {
  accelerators: GoogleDataprocClusterArgsClusterConfigMasterConfigaccelerators;
  disk_config: GoogleDataprocClusterArgsClusterConfigMasterConfigDiskConfig;
}
export interface GoogleDataprocClusterArgsClusterConfigMetastoreConfig {
  dataproc_metastore_service: string;
}
export interface GoogleDataprocClusterArgsClusterConfigPreemptibleWorkerConfigDiskConfig {
  boot_disk_type?: string;
  local_ssd_interface?: string;
}
export interface GoogleDataprocClusterArgsClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList {}
export interface GoogleDataprocClusterArgsClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy {
  instance_selection_list: GoogleDataprocClusterArgsClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList;
}
export interface GoogleDataprocClusterArgsClusterConfigPreemptibleWorkerConfig {
  preemptibility?: string;
  disk_config: GoogleDataprocClusterArgsClusterConfigPreemptibleWorkerConfigDiskConfig;
  instance_flexibility_policy: GoogleDataprocClusterArgsClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy;
}
export interface GoogleDataprocClusterArgsClusterConfigSecurityConfigKerberosConfig {
  cross_realm_trust_admin_server?: string;
  cross_realm_trust_kdc?: string;
  cross_realm_trust_realm?: string;
  cross_realm_trust_shared_password_uri?: string;
  enable_kerberos?: boolean;
  kdc_db_key_uri?: string;
  key_password_uri?: string;
  keystore_password_uri?: string;
  keystore_uri?: string;
  kms_key_uri: string;
  realm?: string;
  root_principal_password_uri: string;
  tgt_lifetime_hours?: number;
  truststore_password_uri?: string;
  truststore_uri?: string;
}
export interface GoogleDataprocClusterArgsClusterConfigSecurityConfig {
  kerberos_config: GoogleDataprocClusterArgsClusterConfigSecurityConfigKerberosConfig;
}
export interface GoogleDataprocClusterArgsClusterConfigSoftwareConfig {
  optional_components?: string[];
  override_properties?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocClusterArgsClusterConfigWorkerConfigaccelerators {
  accelerator_count: number;
  accelerator_type: string;
}
export interface GoogleDataprocClusterArgsClusterConfigWorkerConfigDiskConfig {
  boot_disk_type?: string;
  local_ssd_interface?: string;
}
export interface GoogleDataprocClusterArgsClusterConfigWorkerConfig {
  accelerators: GoogleDataprocClusterArgsClusterConfigWorkerConfigaccelerators;
  disk_config: GoogleDataprocClusterArgsClusterConfigWorkerConfigDiskConfig;
}
export interface GoogleDataprocClusterArgsClusterConfig {
  staging_bucket?: string;
  autoscaling_config: GoogleDataprocClusterArgsClusterConfigAutoscalingConfig;
  auxiliary_node_groups: GoogleDataprocClusterArgsClusterConfigAuxiliaryNodeGroups;
  dataproc_metric_config: GoogleDataprocClusterArgsClusterConfigDataprocMetricConfig;
  encryption_config: GoogleDataprocClusterArgsClusterConfigEncryptionConfig;
  endpoint_config: GoogleDataprocClusterArgsClusterConfigEndpointConfig;
  gce_cluster_config: GoogleDataprocClusterArgsClusterConfigGceClusterConfig;
  initialization_action: GoogleDataprocClusterArgsClusterConfigInitializationAction;
  lifecycle_config: GoogleDataprocClusterArgsClusterConfigLifecycleConfig;
  master_config: GoogleDataprocClusterArgsClusterConfigMasterConfig;
  metastore_config: GoogleDataprocClusterArgsClusterConfigMetastoreConfig;
  preemptible_worker_config: GoogleDataprocClusterArgsClusterConfigPreemptibleWorkerConfig;
  security_config: GoogleDataprocClusterArgsClusterConfigSecurityConfig;
  software_config: GoogleDataprocClusterArgsClusterConfigSoftwareConfig;
  worker_config: GoogleDataprocClusterArgsClusterConfigWorkerConfig;
}
export interface GoogleDataprocClusterArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataprocClusterArgsVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig {
  dataproc_metastore_service?: string;
}
export interface GoogleDataprocClusterArgsVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig {
  dataproc_cluster?: string;
}
export interface GoogleDataprocClusterArgsVirtualClusterConfigAuxiliaryServicesConfig {
  metastore_config: GoogleDataprocClusterArgsVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig;
  spark_history_server_config: GoogleDataprocClusterArgsVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig;
}
export interface GoogleDataprocClusterArgsVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigautoscaling {
  max_node_count?: number;
  min_node_count?: number;
}
export interface GoogleDataprocClusterArgsVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigconfig {
  local_ssd_count?: number;
  machine_type?: string;
  min_cpu_platform?: string;
  preemptible?: boolean;
  spot?: boolean;
}
export interface GoogleDataprocClusterArgsVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig {
  locations: string[];
  autoscaling: GoogleDataprocClusterArgsVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigautoscaling;
  config: GoogleDataprocClusterArgsVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigconfig;
}
export interface GoogleDataprocClusterArgsVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget {
  node_pool: string;
  roles: string[];
  node_pool_config: GoogleDataprocClusterArgsVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig;
}
export interface GoogleDataprocClusterArgsVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig {
  gke_cluster_target?: string;
  node_pool_target: GoogleDataprocClusterArgsVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget;
}
export interface GoogleDataprocClusterArgsVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig {
  component_version: {
    [key: string]: string;
  };
}
export interface GoogleDataprocClusterArgsVirtualClusterConfigKubernetesClusterConfig {
  kubernetes_namespace?: string;
  gke_cluster_config: GoogleDataprocClusterArgsVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig;
  kubernetes_software_config: GoogleDataprocClusterArgsVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig;
}
export interface GoogleDataprocClusterArgsVirtualClusterConfig {
  staging_bucket?: string;
  auxiliary_services_config: GoogleDataprocClusterArgsVirtualClusterConfigAuxiliaryServicesConfig;
  kubernetes_cluster_config: GoogleDataprocClusterArgsVirtualClusterConfigKubernetesClusterConfig;
}
export interface GoogleDataprocClusterArgs {
  graceful_decommission_timeout?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  region?: string;
  cluster_config: GoogleDataprocClusterArgsClusterConfig;
  timeouts: GoogleDataprocClusterArgstimeouts;
  virtual_cluster_config: GoogleDataprocClusterArgsVirtualClusterConfig;
}
export class google_dataproc_cluster extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocClusterArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_cluster");
  }
}