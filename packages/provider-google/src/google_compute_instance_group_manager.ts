import { TerraformConfig, TerraformResource } from "tfs";
export interface AllInstancesConfig {
  labels?: {
    [key: string]: string;
  };
  metadata?: {
    [key: string]: string;
  };
}
export interface AutoHealingPolicies {
  health_check: string;
  initial_delay_sec: number;
}
export interface InstanceLifecyclePolicy {
  default_action_on_failure?: string;
  force_update_on_repair?: string;
}
export interface NamedPort {
  name: string;
  port: number;
}
export interface StatefulDisk {
  delete_rule?: string;
  device_name: string;
}
export interface StatefulExternalIp {
  delete_rule?: string;
  interface_name?: string;
}
export interface StatefulInternalIp {
  delete_rule?: string;
  interface_name?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface UpdatePolicy {
  max_surge_percent?: number;
  max_unavailable_percent?: number;
  minimal_action: string;
  most_disruptive_allowed_action?: string;
  replacement_method?: string;
  type: string;
}
export interface TargetSize {
  fixed?: number;
  percent?: number;
}
export interface Version {
  instance_template: string;
  name?: string;
  target_size: TargetSize;
}
export interface GoogleComputeInstanceGroupManagerArgs {
  base_instance_name: string;
  description?: string;
  list_managed_instances_results?: string;
  name: string;
  target_pools?: string[];
  wait_for_instances?: boolean;
  wait_for_instances_status?: string;
  all_instances_config: AllInstancesConfig;
  auto_healing_policies: AutoHealingPolicies;
  instance_lifecycle_policy: InstanceLifecyclePolicy;
  named_port: NamedPort;
  stateful_disk: StatefulDisk;
  stateful_external_ip: StatefulExternalIp;
  stateful_internal_ip: StatefulInternalIp;
  timeouts: Timeouts;
  update_policy: UpdatePolicy;
  version: Version;
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