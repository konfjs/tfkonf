import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeRegionInstanceTemplateArgsAdvancedMachineFeatures {
  enable_nested_virtualization?: boolean;
  threads_per_core?: number;
  turbo_mode?: string;
  visible_core_count?: number;
}
export interface GoogleComputeRegionInstanceTemplateArgsConfidentialInstanceConfig {
  confidential_instance_type?: string;
  enable_confidential_compute?: boolean;
}
export interface GoogleComputeRegionInstanceTemplateArgsDiskDiskEncryptionKey {
  kms_key_self_link: string;
}
export interface GoogleComputeRegionInstanceTemplateArgsDiskSourceImageEncryptionKey {
  kms_key_self_link: string;
  kms_key_service_account?: string;
}
export interface GoogleComputeRegionInstanceTemplateArgsDiskSourceSnapshotEncryptionKey {
  kms_key_self_link: string;
  kms_key_service_account?: string;
}
export interface GoogleComputeRegionInstanceTemplateArgsDisk {
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
  disk_encryption_key: GoogleComputeRegionInstanceTemplateArgsDiskDiskEncryptionKey;
  source_image_encryption_key: GoogleComputeRegionInstanceTemplateArgsDiskSourceImageEncryptionKey;
  source_snapshot_encryption_key: GoogleComputeRegionInstanceTemplateArgsDiskSourceSnapshotEncryptionKey;
}
export interface GoogleComputeRegionInstanceTemplateArgsGuestAccelerator {
  count: number;
  type: string;
}
export interface GoogleComputeRegionInstanceTemplateArgsNetworkInterfaceAccessConfig {}
export interface GoogleComputeRegionInstanceTemplateArgsNetworkInterfaceAliasIpRange {
  ip_cidr_range: string;
  subnetwork_range_name?: string;
}
export interface GoogleComputeRegionInstanceTemplateArgsNetworkInterfaceIpv6AccessConfig {
  network_tier: string;
}
export interface GoogleComputeRegionInstanceTemplateArgsNetworkInterface {
  network_ip?: string;
  nic_type?: string;
  queue_count?: number;
  access_config: GoogleComputeRegionInstanceTemplateArgsNetworkInterfaceAccessConfig;
  alias_ip_range: GoogleComputeRegionInstanceTemplateArgsNetworkInterfaceAliasIpRange;
  ipv6_access_config: GoogleComputeRegionInstanceTemplateArgsNetworkInterfaceIpv6AccessConfig;
}
export interface GoogleComputeRegionInstanceTemplateArgsNetworkPerformanceConfig {
  total_egress_bandwidth_tier: string;
}
export interface GoogleComputeRegionInstanceTemplateArgsReservationAffinitySpecificReservation {
  key: string;
  values: string[];
}
export interface GoogleComputeRegionInstanceTemplateArgsReservationAffinity {
  type: string;
  specific_reservation: GoogleComputeRegionInstanceTemplateArgsReservationAffinitySpecificReservation;
}
export interface GoogleComputeRegionInstanceTemplateArgsSchedulingLocalSsdRecoveryTimeout {
  nanos?: number;
  seconds: number;
}
export interface GoogleComputeRegionInstanceTemplateArgsSchedulingMaxRunDuration {
  nanos?: number;
  seconds: number;
}
export interface GoogleComputeRegionInstanceTemplateArgsSchedulingNodeAffinities {
  key: string;
  operator: string;
  values: string[];
}
export interface GoogleComputeRegionInstanceTemplateArgsSchedulingOnInstanceStopAction {
  discard_local_ssd?: boolean;
}
export interface GoogleComputeRegionInstanceTemplateArgsScheduling {
  automatic_restart?: boolean;
  instance_termination_action?: string;
  min_node_cpus?: number;
  preemptible?: boolean;
  local_ssd_recovery_timeout: GoogleComputeRegionInstanceTemplateArgsSchedulingLocalSsdRecoveryTimeout;
  max_run_duration: GoogleComputeRegionInstanceTemplateArgsSchedulingMaxRunDuration;
  node_affinities: GoogleComputeRegionInstanceTemplateArgsSchedulingNodeAffinities;
  on_instance_stop_action: GoogleComputeRegionInstanceTemplateArgsSchedulingOnInstanceStopAction;
}
export interface GoogleComputeRegionInstanceTemplateArgsServiceAccount {
  scopes: string[];
}
export interface GoogleComputeRegionInstanceTemplateArgsShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}
export interface GoogleComputeRegionInstanceTemplateArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeRegionInstanceTemplateArgs {
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
  advanced_machine_features: GoogleComputeRegionInstanceTemplateArgsAdvancedMachineFeatures;
  confidential_instance_config: GoogleComputeRegionInstanceTemplateArgsConfidentialInstanceConfig;
  disk: GoogleComputeRegionInstanceTemplateArgsDisk;
  guest_accelerator: GoogleComputeRegionInstanceTemplateArgsGuestAccelerator;
  network_interface: GoogleComputeRegionInstanceTemplateArgsNetworkInterface;
  network_performance_config: GoogleComputeRegionInstanceTemplateArgsNetworkPerformanceConfig;
  reservation_affinity: GoogleComputeRegionInstanceTemplateArgsReservationAffinity;
  scheduling: GoogleComputeRegionInstanceTemplateArgsScheduling;
  service_account: GoogleComputeRegionInstanceTemplateArgsServiceAccount;
  shielded_instance_config: GoogleComputeRegionInstanceTemplateArgsShieldedInstanceConfig;
  timeouts: GoogleComputeRegionInstanceTemplateArgsTimeouts;
}
export class google_compute_region_instance_template extends TerraformResource {
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
  readonly tags_fingerprint!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionInstanceTemplateArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_instance_template");
  }
}