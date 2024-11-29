import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeInstanceGroupManagerArgsAllInstancesConfig {
  labels?: {
    [key: string]: string;
  };
  metadata?: {
    [key: string]: string;
  };
}
export interface GoogleComputeInstanceGroupManagerArgsAutoHealingPolicies {
  health_check: string;
  initial_delay_sec: number;
}
export interface GoogleComputeInstanceGroupManagerArgsInstanceLifecyclePolicy {
  default_action_on_failure?: string;
  force_update_on_repair?: string;
}
export interface GoogleComputeInstanceGroupManagerArgsNamedPort {
  name: string;
  port: number;
}
export interface GoogleComputeInstanceGroupManagerArgsStatefulDisk {
  delete_rule?: string;
  device_name: string;
}
export interface GoogleComputeInstanceGroupManagerArgsStatefulExternalIp {
  delete_rule?: string;
  interface_name?: string;
}
export interface GoogleComputeInstanceGroupManagerArgsStatefulInternalIp {
  delete_rule?: string;
  interface_name?: string;
}
export interface GoogleComputeInstanceGroupManagerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeInstanceGroupManagerArgsUpdatePolicy {
  max_surge_percent?: number;
  max_unavailable_percent?: number;
  minimal_action: string;
  most_disruptive_allowed_action?: string;
  replacement_method?: string;
  type: string;
}
export interface GoogleComputeInstanceGroupManagerArgsVersionTargetSize {
  fixed?: number;
  percent?: number;
}
export interface GoogleComputeInstanceGroupManagerArgsVersion {
  instance_template: string;
  name?: string;
  target_size: GoogleComputeInstanceGroupManagerArgsVersionTargetSize;
}
export interface GoogleComputeInstanceGroupManagerArgs {
  base_instance_name: string;
  description?: string;
  list_managed_instances_results?: string;
  name: string;
  target_pools?: string[];
  wait_for_instances?: boolean;
  wait_for_instances_status?: string;
  all_instances_config: GoogleComputeInstanceGroupManagerArgsAllInstancesConfig;
  auto_healing_policies: GoogleComputeInstanceGroupManagerArgsAutoHealingPolicies;
  instance_lifecycle_policy: GoogleComputeInstanceGroupManagerArgsInstanceLifecyclePolicy;
  named_port: GoogleComputeInstanceGroupManagerArgsNamedPort;
  stateful_disk: GoogleComputeInstanceGroupManagerArgsStatefulDisk;
  stateful_external_ip: GoogleComputeInstanceGroupManagerArgsStatefulExternalIp;
  stateful_internal_ip: GoogleComputeInstanceGroupManagerArgsStatefulInternalIp;
  timeouts?: GoogleComputeInstanceGroupManagerArgsTimeouts;
  update_policy: GoogleComputeInstanceGroupManagerArgsUpdatePolicy;
  version: GoogleComputeInstanceGroupManagerArgsVersion;
}
export class google_compute_instance_group_manager extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly fingerprint!: string;
  readonly id?: string;
  readonly instance_group!: string;
  readonly operation!: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly status!: any[];
  readonly target_size?: number;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeInstanceGroupManagerArgs) {
    super(config, "resource", args, resourceName, "google_compute_instance_group_manager");
  }
}