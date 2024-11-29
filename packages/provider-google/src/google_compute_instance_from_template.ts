import { TerraformConfig, TerraformResource } from "tfs";
export interface AdvancedMachineFeatures {}
export interface AttachedDisk {
  source: string;
}
export interface InitializeParams {}
export interface BootDisk {
  initialize_params: InitializeParams;
}
export interface ConfidentialInstanceConfig {}
export interface GuestAccelerator {
  count: number;
  type: string;
}
export interface AccessConfig {}
export interface AliasIpRange {
  ip_cidr_range: string;
}
export interface Ipv6AccessConfig {
  network_tier: string;
}
export interface NetworkInterface {
  access_config: AccessConfig;
  alias_ip_range: AliasIpRange;
  ipv6_access_config: Ipv6AccessConfig;
}
export interface NetworkPerformanceConfig {
  total_egress_bandwidth_tier: string;
}
export interface Params {}
export interface SpecificReservation {
  key: string;
  values: string[];
}
export interface ReservationAffinity {
  type: string;
  specific_reservation: SpecificReservation;
}
export interface LocalSsdRecoveryTimeout {
  seconds: number;
}
export interface MaxRunDuration {
  seconds: number;
}
export interface NodeAffinities {
  key: string;
  operator: string;
  values: string[];
}
export interface OnInstanceStopAction {}
export interface Scheduling {
  local_ssd_recovery_timeout: LocalSsdRecoveryTimeout;
  max_run_duration: MaxRunDuration;
  node_affinities: NodeAffinities;
  on_instance_stop_action: OnInstanceStopAction;
}
export interface ScratchDisk {
  interface: string;
}
export interface ServiceAccount {
  scopes: string[];
}
export interface ShieldedInstanceConfig {}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeInstanceFromTemplateArgs {
  name: string;
  source_instance_template: string;
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
export class google_compute_instance_from_template extends TerraformResource {
  readonly allow_stopping_for_update?: boolean;
  readonly can_ip_forward?: boolean;
  readonly cpu_platform!: string;
  readonly creation_timestamp!: string;
  readonly current_status!: string;
  readonly deletion_protection?: boolean;
  readonly description?: string;
  readonly desired_status?: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly enable_display?: boolean;
  readonly hostname?: string;
  readonly id?: string;
  readonly instance_id!: string;
  readonly key_revocation_action_type?: string;
  readonly label_fingerprint!: string;
  readonly labels?: {
    [key: string]: string;
  };
  readonly machine_type?: string;
  readonly metadata?: {
    [key: string]: string;
  };
  readonly metadata_fingerprint!: string;
  readonly metadata_startup_script?: string;
  readonly min_cpu_platform?: string;
  readonly project?: string;
  readonly resource_policies?: string[];
  readonly self_link!: string;
  readonly tags?: string[];
  readonly tags_fingerprint!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeInstanceFromTemplateArgs) {
    super(config, "resource", args, resourceName, "google_compute_instance_from_template");
  }
}