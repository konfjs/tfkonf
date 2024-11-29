import { TerraformConfig, TerraformResource } from "tfs";
export interface LogConfig {
  enable: boolean;
  filter: string;
}
export interface Action {
  source_nat_active_ips?: string[];
  source_nat_drain_ips?: string[];
}
export interface Rules {
  description?: string;
  match: string;
  rule_number: number;
  action: Action;
}
export interface Subnetwork {
  name: string;
  secondary_ip_range_names?: string[];
  source_ip_ranges_to_nat: string[];
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeRouterNatArgs {
  icmp_idle_timeout_sec?: number;
  initial_nat_ips?: string[];
  max_ports_per_vm?: number;
  name: string;
  nat_ip_allocate_option?: string;
  router: string;
  source_subnetwork_ip_ranges_to_nat: string;
  tcp_established_idle_timeout_sec?: number;
  tcp_time_wait_timeout_sec?: number;
  tcp_transitory_idle_timeout_sec?: number;
  udp_idle_timeout_sec?: number;
  log_config: LogConfig;
  rules: Rules;
  subnetwork: Subnetwork;
  timeouts: Timeouts;
}
export class google_compute_router_nat extends TerraformResource {
  readonly auto_network_tier?: string;
  readonly drain_nat_ips?: string[];
  readonly enable_dynamic_port_allocation?: boolean;
  readonly enable_endpoint_independent_mapping?: boolean;
  readonly endpoint_types?: string[];
  readonly id?: string;
  readonly min_ports_per_vm?: number;
  readonly nat_ips?: string[];
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRouterNatArgs) {
    super(config, "resource", args, resourceName, "google_compute_router_nat");
  }
}