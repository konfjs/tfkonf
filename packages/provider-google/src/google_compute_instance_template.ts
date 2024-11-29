import { TerraformConfig, TerraformResource } from "tfs";
export interface AdvancedMachineFeatures {
  enable_nested_virtualization?: boolean;
  threads_per_core?: number;
  turbo_mode?: string;
  visible_core_count?: number;
}
export interface ConfidentialInstanceConfig {
  confidential_instance_type?: string;
  enable_confidential_compute?: boolean;
}
export interface DiskEncryptionKey {
  kms_key_self_link: string;
}
export interface SourceImageEncryptionKey {
  kms_key_self_link: string;
  kms_key_service_account?: string;
}
export interface SourceSnapshotEncryptionKey {
  kms_key_self_link: string;
  kms_key_service_account?: string;
}
export interface Disk {
  auto_delete?: boolean;
  disk_name?: string;
  labels?: {
    [key: string]: string;
  };
  resource_manager_tags?: {
    [key: string]: string;
  };
  resource_policies?: string[];
  source?: string;
  source_snapshot?: string;
  disk_encryption_key: DiskEncryptionKey;
  source_image_encryption_key: SourceImageEncryptionKey;
  source_snapshot_encryption_key: SourceSnapshotEncryptionKey;
}
export interface GuestAccelerator {
  count: number;
  type: string;
}
export interface AccessConfig {}
export interface AliasIpRange {
  ip_cidr_range: string;
  subnetwork_range_name?: string;
}
export interface Ipv6AccessConfig {
  network_tier: string;
}
export interface NetworkInterface {
  network_ip?: string;
  nic_type?: string;
  queue_count?: number;
  access_config: AccessConfig;
  alias_ip_range: AliasIpRange;
  ipv6_access_config: Ipv6AccessConfig;
}
export interface NetworkPerformanceConfig {
  total_egress_bandwidth_tier: string;
}
export interface SpecificReservation {
  key: string;
  values: string[];
}
export interface ReservationAffinity {
  type: string;
  specific_reservation: SpecificReservation;
}
export interface LocalSsdRecoveryTimeout {
  nanos?: number;
  seconds: number;
}
export interface MaxRunDuration {
  nanos?: number;
  seconds: number;
}
export interface NodeAffinities {
  key: string;
  operator: string;
  values: string[];
}
export interface OnInstanceStopAction {
  discard_local_ssd?: boolean;
}
export interface Scheduling {
  automatic_restart?: boolean;
  instance_termination_action?: string;
  min_node_cpus?: number;
  preemptible?: boolean;
  local_ssd_recovery_timeout: LocalSsdRecoveryTimeout;
  max_run_duration: MaxRunDuration;
  node_affinities: NodeAffinities;
  on_instance_stop_action: OnInstanceStopAction;
}
export interface ServiceAccount {
  scopes: string[];
}
export interface ShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeInstanceTemplateArgs {
  can_ip_forward?: boolean;
  description?: string;
  instance_description?: string;
  key_revocation_action_type?: string;
  labels?: {
    [key: string]: string;
  };
  machine_type: string;
  metadata?: {
    [key: string]: string;
  };
  metadata_startup_script?: string;
  min_cpu_platform?: string;
  resource_manager_tags?: {
    [key: string]: string;
  };
  resource_policies?: string[];
  tags?: string[];
  advanced_machine_features: AdvancedMachineFeatures;
  confidential_instance_config: ConfidentialInstanceConfig;
  disk: Disk;
  guest_accelerator: GuestAccelerator;
  network_interface: NetworkInterface;
  network_performance_config: NetworkPerformanceConfig;
  reservation_affinity: ReservationAffinity;
  scheduling: Scheduling;
  service_account: ServiceAccount;
  shielded_instance_config: ShieldedInstanceConfig;
  timeouts: Timeouts;
}
export class google_compute_instance_template extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly metadata_fingerprint!: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;
  readonly self_link_unique!: string;
  readonly tags_fingerprint!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeInstanceTemplateArgs) {
    super(config, "resource", args, resourceName, "google_compute_instance_template");
  }
}