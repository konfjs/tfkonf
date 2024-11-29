import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeInstanceTemplateArgsAdvancedMachineFeatures {
  enable_nested_virtualization?: boolean;
  threads_per_core?: number;
  turbo_mode?: string;
  visible_core_count?: number;
}
export interface GoogleComputeInstanceTemplateArgsConfidentialInstanceConfig {
  confidential_instance_type?: string;
  enable_confidential_compute?: boolean;
}
export interface GoogleComputeInstanceTemplateArgsDiskDiskEncryptionKey {
  kms_key_self_link: string;
}
export interface GoogleComputeInstanceTemplateArgsDiskSourceImageEncryptionKey {
  kms_key_self_link: string;
  kms_key_service_account?: string;
}
export interface GoogleComputeInstanceTemplateArgsDiskSourceSnapshotEncryptionKey {
  kms_key_self_link: string;
  kms_key_service_account?: string;
}
export interface GoogleComputeInstanceTemplateArgsDisk {
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
  disk_encryption_key: GoogleComputeInstanceTemplateArgsDiskDiskEncryptionKey;
  source_image_encryption_key: GoogleComputeInstanceTemplateArgsDiskSourceImageEncryptionKey;
  source_snapshot_encryption_key: GoogleComputeInstanceTemplateArgsDiskSourceSnapshotEncryptionKey;
}
export interface GoogleComputeInstanceTemplateArgsGuestAccelerator {
  count: number;
  type: string;
}
export interface GoogleComputeInstanceTemplateArgsNetworkInterfaceAccessConfig {}
export interface GoogleComputeInstanceTemplateArgsNetworkInterfaceAliasIpRange {
  ip_cidr_range: string;
  subnetwork_range_name?: string;
}
export interface GoogleComputeInstanceTemplateArgsNetworkInterfaceIpv6AccessConfig {
  network_tier: string;
}
export interface GoogleComputeInstanceTemplateArgsNetworkInterface {
  network_ip?: string;
  nic_type?: string;
  queue_count?: number;
  access_config: GoogleComputeInstanceTemplateArgsNetworkInterfaceAccessConfig;
  alias_ip_range: GoogleComputeInstanceTemplateArgsNetworkInterfaceAliasIpRange;
  ipv6_access_config: GoogleComputeInstanceTemplateArgsNetworkInterfaceIpv6AccessConfig;
}
export interface GoogleComputeInstanceTemplateArgsNetworkPerformanceConfig {
  total_egress_bandwidth_tier: string;
}
export interface GoogleComputeInstanceTemplateArgsReservationAffinitySpecificReservation {
  key: string;
  values: string[];
}
export interface GoogleComputeInstanceTemplateArgsReservationAffinity {
  type: string;
  specific_reservation: GoogleComputeInstanceTemplateArgsReservationAffinitySpecificReservation;
}
export interface GoogleComputeInstanceTemplateArgsSchedulingLocalSsdRecoveryTimeout {
  nanos?: number;
  seconds: number;
}
export interface GoogleComputeInstanceTemplateArgsSchedulingMaxRunDuration {
  nanos?: number;
  seconds: number;
}
export interface GoogleComputeInstanceTemplateArgsSchedulingNodeAffinities {
  key: string;
  operator: string;
  values: string[];
}
export interface GoogleComputeInstanceTemplateArgsSchedulingOnInstanceStopAction {
  discard_local_ssd?: boolean;
}
export interface GoogleComputeInstanceTemplateArgsScheduling {
  automatic_restart?: boolean;
  instance_termination_action?: string;
  min_node_cpus?: number;
  preemptible?: boolean;
  local_ssd_recovery_timeout: GoogleComputeInstanceTemplateArgsSchedulingLocalSsdRecoveryTimeout;
  max_run_duration: GoogleComputeInstanceTemplateArgsSchedulingMaxRunDuration;
  node_affinities: GoogleComputeInstanceTemplateArgsSchedulingNodeAffinities;
  on_instance_stop_action: GoogleComputeInstanceTemplateArgsSchedulingOnInstanceStopAction;
}
export interface GoogleComputeInstanceTemplateArgsServiceAccount {
  scopes: string[];
}
export interface GoogleComputeInstanceTemplateArgsShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}
export interface GoogleComputeInstanceTemplateArgsTimeouts {
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
  advanced_machine_features: GoogleComputeInstanceTemplateArgsAdvancedMachineFeatures;
  confidential_instance_config: GoogleComputeInstanceTemplateArgsConfidentialInstanceConfig;
  disk: GoogleComputeInstanceTemplateArgsDisk;
  guest_accelerator: GoogleComputeInstanceTemplateArgsGuestAccelerator;
  network_interface: GoogleComputeInstanceTemplateArgsNetworkInterface;
  network_performance_config: GoogleComputeInstanceTemplateArgsNetworkPerformanceConfig;
  reservation_affinity: GoogleComputeInstanceTemplateArgsReservationAffinity;
  scheduling: GoogleComputeInstanceTemplateArgsScheduling;
  service_account: GoogleComputeInstanceTemplateArgsServiceAccount;
  shielded_instance_config: GoogleComputeInstanceTemplateArgsShieldedInstanceConfig;
  timeouts: GoogleComputeInstanceTemplateArgsTimeouts;
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