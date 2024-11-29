import { TerraformConfig, TerraformResource } from "tfs";
export interface AdvancedMachineFeatures {
  enable_nested_virtualization?: boolean;
  threads_per_core?: number;
  turbo_mode?: string;
  visible_core_count?: number;
}
export interface AttachedDisk {
  disk_encryption_key_raw?: string;
  mode?: string;
  source: string;
}
export interface InitializeParams {
  enable_confidential_compute?: boolean;
  resource_manager_tags?: {
    [key: string]: string;
  };
  storage_pool?: string;
}
export interface BootDisk {
  auto_delete?: boolean;
  disk_encryption_key_raw?: string;
  interface?: string;
  mode?: string;
  initialize_params: InitializeParams;
}
export interface ConfidentialInstanceConfig {
  confidential_instance_type?: string;
  enable_confidential_compute?: boolean;
}
export interface GuestAccelerator {
  count: number;
  type: string;
}
export interface AccessConfig {
  public_ptr_domain_name?: string;
}
export interface AliasIpRange {
  ip_cidr_range: string;
  subnetwork_range_name?: string;
}
export interface Ipv6AccessConfig {
  network_tier: string;
  public_ptr_domain_name?: string;
}
export interface NetworkInterface {
  nic_type?: string;
  queue_count?: number;
  access_config: AccessConfig;
  alias_ip_range: AliasIpRange;
  ipv6_access_config: Ipv6AccessConfig;
}
export interface NetworkPerformanceConfig {
  total_egress_bandwidth_tier: string;
}
export interface Params {
  resource_manager_tags?: {
    [key: string]: string;
  };
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
export interface ScratchDisk {
  interface: string;
  size?: number;
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
  advanced_machine_features: AdvancedMachineFeatures;
  attached_disk: AttachedDisk;
  boot_disk: BootDisk;
  confidential_instance_config: ConfidentialInstanceConfig;
  guest_accelerator: GuestAccelerator;
  network_interface: NetworkInterface;
  network_performance_config: NetworkPerformanceConfig;
  params: Params;
  reservation_affinity: ReservationAffinity;
  scheduling: Scheduling;
  scratch_disk: ScratchDisk;
  service_account: ServiceAccount;
  shielded_instance_config: ShieldedInstanceConfig;
  timeouts: Timeouts;
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