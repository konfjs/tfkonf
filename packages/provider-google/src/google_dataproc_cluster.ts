import { TerraformConfig, TerraformResource } from "tfs";
export interface AutoscalingConfig {
  policy_uri: string;
}
export interface Accelerators {
  accelerator_count: number;
  accelerator_type: string;
}
export interface DiskConfig {
  boot_disk_type?: string;
  local_ssd_interface?: string;
}
export interface NodeGroupConfig {
  accelerators: Accelerators;
  disk_config: DiskConfig;
}
export interface NodeGroup {
  roles: string[];
  node_group_config: NodeGroupConfig;
}
export interface AuxiliaryNodeGroups {
  node_group: NodeGroup;
}
export interface Metrics {
  metric_overrides?: string[];
  metric_source: string;
}
export interface DataprocMetricConfig {
  metrics: Metrics;
}
export interface EncryptionConfig {
  kms_key_name: string;
}
export interface EndpointConfig {
  enable_http_port_access: boolean;
}
export interface NodeGroupAffinity {
  node_group_uri: string;
}
export interface ReservationAffinity {
  consume_reservation_type?: string;
  key?: string;
  values?: string[];
}
export interface ShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}
export interface GceClusterConfig {
  internal_ip_only?: boolean;
  metadata?: {
    [key: string]: string;
  };
  service_account?: string;
  subnetwork?: string;
  tags?: string[];
  node_group_affinity: NodeGroupAffinity;
  reservation_affinity: ReservationAffinity;
  shielded_instance_config: ShieldedInstanceConfig;
}
export interface InitializationAction {
  script: string;
  timeout_sec?: number;
}
export interface LifecycleConfig {
  auto_delete_time?: string;
  idle_delete_ttl?: string;
}
export interface Accelerators {
  accelerator_count: number;
  accelerator_type: string;
}
export interface DiskConfig {
  boot_disk_type?: string;
  local_ssd_interface?: string;
}
export interface MasterConfig {
  accelerators: Accelerators;
  disk_config: DiskConfig;
}
export interface MetastoreConfig {
  dataproc_metastore_service: string;
}
export interface DiskConfig {
  boot_disk_type?: string;
  local_ssd_interface?: string;
}
export interface InstanceSelectionList {}
export interface InstanceFlexibilityPolicy {
  instance_selection_list: InstanceSelectionList;
}
export interface PreemptibleWorkerConfig {
  preemptibility?: string;
  disk_config: DiskConfig;
  instance_flexibility_policy: InstanceFlexibilityPolicy;
}
export interface KerberosConfig {
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
export interface SecurityConfig {
  kerberos_config: KerberosConfig;
}
export interface SoftwareConfig {
  optional_components?: string[];
  override_properties?: {
    [key: string]: string;
  };
}
export interface Accelerators {
  accelerator_count: number;
  accelerator_type: string;
}
export interface DiskConfig {
  boot_disk_type?: string;
  local_ssd_interface?: string;
}
export interface WorkerConfig {
  accelerators: Accelerators;
  disk_config: DiskConfig;
}
export interface ClusterConfig {
  staging_bucket?: string;
  autoscaling_config: AutoscalingConfig;
  auxiliary_node_groups: AuxiliaryNodeGroups;
  dataproc_metric_config: DataprocMetricConfig;
  encryption_config: EncryptionConfig;
  endpoint_config: EndpointConfig;
  gce_cluster_config: GceClusterConfig;
  initialization_action: InitializationAction;
  lifecycle_config: LifecycleConfig;
  master_config: MasterConfig;
  metastore_config: MetastoreConfig;
  preemptible_worker_config: PreemptibleWorkerConfig;
  security_config: SecurityConfig;
  software_config: SoftwareConfig;
  worker_config: WorkerConfig;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface MetastoreConfig {
  dataproc_metastore_service?: string;
}
export interface SparkHistoryServerConfig {
  dataproc_cluster?: string;
}
export interface AuxiliaryServicesConfig {
  metastore_config: MetastoreConfig;
  spark_history_server_config: SparkHistoryServerConfig;
}
export interface Autoscaling {
  max_node_count?: number;
  min_node_count?: number;
}
export interface Config {
  local_ssd_count?: number;
  machine_type?: string;
  min_cpu_platform?: string;
  preemptible?: boolean;
  spot?: boolean;
}
export interface NodePoolConfig {
  locations: string[];
  autoscaling: Autoscaling;
  config: Config;
}
export interface NodePoolTarget {
  node_pool: string;
  roles: string[];
  node_pool_config: NodePoolConfig;
}
export interface GkeClusterConfig {
  gke_cluster_target?: string;
  node_pool_target: NodePoolTarget;
}
export interface KubernetesSoftwareConfig {
  component_version: {
    [key: string]: string;
  };
}
export interface KubernetesClusterConfig {
  kubernetes_namespace?: string;
  gke_cluster_config: GkeClusterConfig;
  kubernetes_software_config: KubernetesSoftwareConfig;
}
export interface VirtualClusterConfig {
  staging_bucket?: string;
  auxiliary_services_config: AuxiliaryServicesConfig;
  kubernetes_cluster_config: KubernetesClusterConfig;
}
export interface GoogleDataprocClusterArgs {
  graceful_decommission_timeout?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  region?: string;
  cluster_config: ClusterConfig;
  timeouts: Timeouts;
  virtual_cluster_config: VirtualClusterConfig;
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