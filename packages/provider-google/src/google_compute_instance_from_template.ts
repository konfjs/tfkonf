import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeInstanceFromTemplateArgsAdvancedMachineFeatures {}
export interface GoogleComputeInstanceFromTemplateArgsAttachedDisk {
  source: string;
}
export interface GoogleComputeInstanceFromTemplateArgsBootDiskInitializeParams {}
export interface GoogleComputeInstanceFromTemplateArgsBootDisk {
  initialize_params: GoogleComputeInstanceFromTemplateArgsBootDiskInitializeParams;
}
export interface GoogleComputeInstanceFromTemplateArgsConfidentialInstanceConfig {}
export interface GoogleComputeInstanceFromTemplateArgsGuestAccelerator {
  count: number;
  type: string;
}
export interface GoogleComputeInstanceFromTemplateArgsNetworkInterfaceAccessConfig {}
export interface GoogleComputeInstanceFromTemplateArgsNetworkInterfaceAliasIpRange {
  ip_cidr_range: string;
}
export interface GoogleComputeInstanceFromTemplateArgsNetworkInterfaceIpv6AccessConfig {
  network_tier: string;
}
export interface GoogleComputeInstanceFromTemplateArgsNetworkInterface {
  access_config: GoogleComputeInstanceFromTemplateArgsNetworkInterfaceAccessConfig;
  alias_ip_range: GoogleComputeInstanceFromTemplateArgsNetworkInterfaceAliasIpRange;
  ipv6_access_config: GoogleComputeInstanceFromTemplateArgsNetworkInterfaceIpv6AccessConfig;
}
export interface GoogleComputeInstanceFromTemplateArgsNetworkPerformanceConfig {
  total_egress_bandwidth_tier: string;
}
export interface GoogleComputeInstanceFromTemplateArgsParams {}
export interface GoogleComputeInstanceFromTemplateArgsReservationAffinitySpecificReservation {
  key: string;
  values: string[];
}
export interface GoogleComputeInstanceFromTemplateArgsReservationAffinity {
  type: string;
  specific_reservation: GoogleComputeInstanceFromTemplateArgsReservationAffinitySpecificReservation;
}
export interface GoogleComputeInstanceFromTemplateArgsSchedulingLocalSsdRecoveryTimeout {
  seconds: number;
}
export interface GoogleComputeInstanceFromTemplateArgsSchedulingMaxRunDuration {
  seconds: number;
}
export interface GoogleComputeInstanceFromTemplateArgsSchedulingNodeAffinities {
  key: string;
  operator: string;
  values: string[];
}
export interface GoogleComputeInstanceFromTemplateArgsSchedulingOnInstanceStopAction {}
export interface GoogleComputeInstanceFromTemplateArgsScheduling {
  local_ssd_recovery_timeout: GoogleComputeInstanceFromTemplateArgsSchedulingLocalSsdRecoveryTimeout;
  max_run_duration: GoogleComputeInstanceFromTemplateArgsSchedulingMaxRunDuration;
  node_affinities: GoogleComputeInstanceFromTemplateArgsSchedulingNodeAffinities;
  on_instance_stop_action: GoogleComputeInstanceFromTemplateArgsSchedulingOnInstanceStopAction;
}
export interface GoogleComputeInstanceFromTemplateArgsScratchDisk {
  interface: string;
}
export interface GoogleComputeInstanceFromTemplateArgsServiceAccount {
  scopes: string[];
}
export interface GoogleComputeInstanceFromTemplateArgsShieldedInstanceConfig {}
export interface GoogleComputeInstanceFromTemplateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeInstanceFromTemplateArgs {
  name: string;
  source_instance_template: string;
  advanced_machine_features: GoogleComputeInstanceFromTemplateArgsAdvancedMachineFeatures;
  attached_disk: GoogleComputeInstanceFromTemplateArgsAttachedDisk;
  boot_disk: GoogleComputeInstanceFromTemplateArgsBootDisk;
  confidential_instance_config: GoogleComputeInstanceFromTemplateArgsConfidentialInstanceConfig;
  guest_accelerator: GoogleComputeInstanceFromTemplateArgsGuestAccelerator;
  network_interface: GoogleComputeInstanceFromTemplateArgsNetworkInterface;
  network_performance_config: GoogleComputeInstanceFromTemplateArgsNetworkPerformanceConfig;
  params: GoogleComputeInstanceFromTemplateArgsParams;
  reservation_affinity: GoogleComputeInstanceFromTemplateArgsReservationAffinity;
  scheduling: GoogleComputeInstanceFromTemplateArgsScheduling;
  scratch_disk: GoogleComputeInstanceFromTemplateArgsScratchDisk;
  service_account: GoogleComputeInstanceFromTemplateArgsServiceAccount;
  shielded_instance_config: GoogleComputeInstanceFromTemplateArgsShieldedInstanceConfig;
  timeouts?: GoogleComputeInstanceFromTemplateArgsTimeouts;
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