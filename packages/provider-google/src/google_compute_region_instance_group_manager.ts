import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeRegionInstanceGroupManagerArgsAllInstancesConfig {
  labels?: {
    [key: string]: string;
  };
  metadata?: {
    [key: string]: string;
  };
}
export interface GoogleComputeRegionInstanceGroupManagerArgsAutoHealingPolicies {
  health_check: string;
  initial_delay_sec: number;
}
export interface GoogleComputeRegionInstanceGroupManagerArgsInstanceLifecyclePolicy {
  default_action_on_failure?: string;
  force_update_on_repair?: string;
}
export interface GoogleComputeRegionInstanceGroupManagerArgsNamedPort {
  name: string;
  port: number;
}
export interface GoogleComputeRegionInstanceGroupManagerArgsStatefulDisk {
  delete_rule?: string;
  device_name: string;
}
export interface GoogleComputeRegionInstanceGroupManagerArgsStatefulExternalIp {
  delete_rule?: string;
  interface_name?: string;
}
export interface GoogleComputeRegionInstanceGroupManagerArgsStatefulInternalIp {
  delete_rule?: string;
  interface_name?: string;
}
export interface GoogleComputeRegionInstanceGroupManagerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeRegionInstanceGroupManagerArgsUpdatePolicy {
  instance_redistribution_type?: string;
  max_surge_percent?: number;
  max_unavailable_percent?: number;
  minimal_action: string;
  most_disruptive_allowed_action?: string;
  replacement_method?: string;
  type: string;
}
export interface GoogleComputeRegionInstanceGroupManagerArgsVersionTargetSize {
  fixed?: number;
  percent?: number;
}
export interface GoogleComputeRegionInstanceGroupManagerArgsVersion {
  instance_template: string;
  name?: string;
  target_size: GoogleComputeRegionInstanceGroupManagerArgsVersionTargetSize;
}
export interface GoogleComputeRegionInstanceGroupManagerArgs {
  base_instance_name: string;
  description?: string;
  list_managed_instances_results?: string;
  name: string;
  target_pools?: string[];
  wait_for_instances?: boolean;
  wait_for_instances_status?: string;
  all_instances_config: GoogleComputeRegionInstanceGroupManagerArgsAllInstancesConfig;
  auto_healing_policies: GoogleComputeRegionInstanceGroupManagerArgsAutoHealingPolicies;
  instance_lifecycle_policy: GoogleComputeRegionInstanceGroupManagerArgsInstanceLifecyclePolicy;
  named_port: GoogleComputeRegionInstanceGroupManagerArgsNamedPort;
  stateful_disk: GoogleComputeRegionInstanceGroupManagerArgsStatefulDisk;
  stateful_external_ip: GoogleComputeRegionInstanceGroupManagerArgsStatefulExternalIp;
  stateful_internal_ip: GoogleComputeRegionInstanceGroupManagerArgsStatefulInternalIp;
  timeouts?: GoogleComputeRegionInstanceGroupManagerArgsTimeouts;
  update_policy: GoogleComputeRegionInstanceGroupManagerArgsUpdatePolicy;
  version: GoogleComputeRegionInstanceGroupManagerArgsVersion;
}
export class google_compute_region_instance_group_manager extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly distribution_policy_target_shape?: string;
  readonly distribution_policy_zones?: string[];
  readonly fingerprint!: string;
  readonly id?: string;
  readonly instance_group!: string;
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;
  readonly status!: any[];
  readonly target_size?: number;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionInstanceGroupManagerArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_instance_group_manager");
  }
}