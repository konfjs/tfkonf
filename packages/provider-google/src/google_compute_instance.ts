import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeInstanceArgsAdvancedMachineFeatures {
  enable_nested_virtualization?: boolean;
  threads_per_core?: number;
  turbo_mode?: string;
  visible_core_count?: number;
}
export interface GoogleComputeInstanceArgsAttachedDisk {
  disk_encryption_key_raw?: string;
  mode?: string;
  source: string;
}
export interface GoogleComputeInstanceArgsBootDiskInitializeParams {
  enable_confidential_compute?: boolean;
  resource_manager_tags?: {
    [key: string]: string;
  };
  storage_pool?: string;
}
export interface GoogleComputeInstanceArgsBootDisk {
  auto_delete?: boolean;
  disk_encryption_key_raw?: string;
  interface?: string;
  mode?: string;
  initialize_params: GoogleComputeInstanceArgsBootDiskInitializeParams;
}
export interface GoogleComputeInstanceArgsConfidentialInstanceConfig {
  confidential_instance_type?: string;
  enable_confidential_compute?: boolean;
}
export interface GoogleComputeInstanceArgsGuestAccelerator {
  count: number;
  type: string;
}
export interface GoogleComputeInstanceArgsNetworkInterfaceAccessConfig {
  public_ptr_domain_name?: string;
}
export interface GoogleComputeInstanceArgsNetworkInterfaceAliasIpRange {
  ip_cidr_range: string;
  subnetwork_range_name?: string;
}
export interface GoogleComputeInstanceArgsNetworkInterfaceIpv6AccessConfig {
  network_tier: string;
  public_ptr_domain_name?: string;
}
export interface GoogleComputeInstanceArgsNetworkInterface {
  nic_type?: string;
  queue_count?: number;
  access_config: GoogleComputeInstanceArgsNetworkInterfaceAccessConfig;
  alias_ip_range: GoogleComputeInstanceArgsNetworkInterfaceAliasIpRange;
  ipv6_access_config: GoogleComputeInstanceArgsNetworkInterfaceIpv6AccessConfig;
}
export interface GoogleComputeInstanceArgsNetworkPerformanceConfig {
  total_egress_bandwidth_tier: string;
}
export interface GoogleComputeInstanceArgsParams {
  resource_manager_tags?: {
    [key: string]: string;
  };
}
export interface GoogleComputeInstanceArgsReservationAffinitySpecificReservation {
  key: string;
  values: string[];
}
export interface GoogleComputeInstanceArgsReservationAffinity {
  type: string;
  specific_reservation: GoogleComputeInstanceArgsReservationAffinitySpecificReservation;
}
export interface GoogleComputeInstanceArgsSchedulingLocalSsdRecoveryTimeout {
  nanos?: number;
  seconds: number;
}
export interface GoogleComputeInstanceArgsSchedulingMaxRunDuration {
  nanos?: number;
  seconds: number;
}
export interface GoogleComputeInstanceArgsSchedulingNodeAffinities {
  key: string;
  operator: string;
  values: string[];
}
export interface GoogleComputeInstanceArgsSchedulingOnInstanceStopAction {
  discard_local_ssd?: boolean;
}
export interface GoogleComputeInstanceArgsScheduling {
  automatic_restart?: boolean;
  instance_termination_action?: string;
  min_node_cpus?: number;
  preemptible?: boolean;
  local_ssd_recovery_timeout: GoogleComputeInstanceArgsSchedulingLocalSsdRecoveryTimeout;
  max_run_duration: GoogleComputeInstanceArgsSchedulingMaxRunDuration;
  node_affinities: GoogleComputeInstanceArgsSchedulingNodeAffinities;
  on_instance_stop_action: GoogleComputeInstanceArgsSchedulingOnInstanceStopAction;
}
export interface GoogleComputeInstanceArgsScratchDisk {
  interface: string;
  size?: number;
}
export interface GoogleComputeInstanceArgsServiceAccount {
  scopes: string[];
}
export interface GoogleComputeInstanceArgsShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}
export interface GoogleComputeInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeInstanceArgs {
  allow_stopping_for_update?: boolean;
  can_ip_forward?: boolean;
  deletion_protection?: boolean;
  description?: string;
  desired_status?: string;
  enable_display?: boolean;
  hostname?: string;
  key_revocation_action_type?: string;
  labels?: {
    [key: string]: string;
  };
  machine_type: string;
  metadata?: {
    [key: string]: string;
  };
  metadata_startup_script?: string;
  name: string;
  resource_policies?: string[];
  tags?: string[];
  advanced_machine_features: GoogleComputeInstanceArgsAdvancedMachineFeatures;
  attached_disk: GoogleComputeInstanceArgsAttachedDisk;
  boot_disk: GoogleComputeInstanceArgsBootDisk;
  confidential_instance_config: GoogleComputeInstanceArgsConfidentialInstanceConfig;
  guest_accelerator: GoogleComputeInstanceArgsGuestAccelerator;
  network_interface: GoogleComputeInstanceArgsNetworkInterface;
  network_performance_config: GoogleComputeInstanceArgsNetworkPerformanceConfig;
  params: GoogleComputeInstanceArgsParams;
  reservation_affinity: GoogleComputeInstanceArgsReservationAffinity;
  scheduling: GoogleComputeInstanceArgsScheduling;
  scratch_disk: GoogleComputeInstanceArgsScratchDisk;
  service_account: GoogleComputeInstanceArgsServiceAccount;
  shielded_instance_config: GoogleComputeInstanceArgsShieldedInstanceConfig;
  timeouts: GoogleComputeInstanceArgsTimeouts;
}
export class google_compute_instance extends TerraformResource {
  readonly cpu_platform!: string;
  readonly creation_timestamp!: string;
  readonly current_status!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly instance_id!: string;
  readonly label_fingerprint!: string;
  readonly metadata_fingerprint!: string;
  readonly min_cpu_platform?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly tags_fingerprint!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeInstanceArgs) {
    super(config, "resource", args, resourceName, "google_compute_instance");
  }
}