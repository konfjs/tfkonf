import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleMemcacheInstanceArgsMaintenancePolicyWeeklyMaintenanceWindowStartTime {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface GoogleMemcacheInstanceArgsMaintenancePolicyWeeklyMaintenanceWindow {
  day: string;
  duration: string;
  start_time: GoogleMemcacheInstanceArgsMaintenancePolicyWeeklyMaintenanceWindowStartTime;
}
export interface GoogleMemcacheInstanceArgsMaintenancePolicy {
  description?: string;
  weekly_maintenance_window: GoogleMemcacheInstanceArgsMaintenancePolicyWeeklyMaintenanceWindow;
}
export interface GoogleMemcacheInstanceArgsMemcacheParameters {
  params?: {
    [key: string]: string;
  };
}
export interface GoogleMemcacheInstanceArgsNodeConfig {
  cpu_count: number;
  memory_size_mb: number;
}
export interface GoogleMemcacheInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleMemcacheInstanceArgs {
  labels?: {
    [key: string]: string;
  };
  memcache_version?: string;
  name: string;
  node_count: number;
  reserved_ip_range_id?: string[];
  maintenance_policy: GoogleMemcacheInstanceArgsMaintenancePolicy;
  memcache_parameters: GoogleMemcacheInstanceArgsMemcacheParameters;
  node_config: GoogleMemcacheInstanceArgsNodeConfig;
  timeouts?: GoogleMemcacheInstanceArgsTimeouts;
}
export class google_memcache_instance extends TerraformResource {
  readonly authorized_network?: string;
  readonly create_time!: string;
  readonly discovery_endpoint!: string;
  readonly display_name?: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly maintenance_schedule!: any[];
  readonly memcache_full_version!: string;
  readonly memcache_nodes!: any[];
  readonly project?: string;
  readonly region?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly zones?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleMemcacheInstanceArgs) {
    super(config, "resource", args, resourceName, "google_memcache_instance");
  }
}