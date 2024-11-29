import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleRedisInstanceArgsMaintenancePolicyWeeklyMaintenanceWindowStartTime {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface GoogleRedisInstanceArgsMaintenancePolicyWeeklyMaintenanceWindow {
  day: string;
  start_time: GoogleRedisInstanceArgsMaintenancePolicyWeeklyMaintenanceWindowStartTime;
}
export interface GoogleRedisInstanceArgsMaintenancePolicy {
  description?: string;
  weekly_maintenance_window: GoogleRedisInstanceArgsMaintenancePolicyWeeklyMaintenanceWindow;
}
export interface GoogleRedisInstanceArgsPersistenceConfig {
  rdb_snapshot_period?: string;
}
export interface GoogleRedisInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleRedisInstanceArgs {
  auth_enabled?: boolean;
  connect_mode?: string;
  customer_managed_key?: string;
  display_name?: string;
  labels?: {
    [key: string]: string;
  };
  memory_size_gb: number;
  name: string;
  redis_configs?: {
    [key: string]: string;
  };
  tier?: string;
  transit_encryption_mode?: string;
  maintenance_policy: GoogleRedisInstanceArgsMaintenancePolicy;
  persistence_config: GoogleRedisInstanceArgsPersistenceConfig;
  timeouts?: GoogleRedisInstanceArgsTimeouts;
}
export class google_redis_instance extends TerraformResource {
  readonly alternative_location_id?: string;
  readonly auth_string!: string;
  readonly authorized_network?: string;
  readonly create_time!: string;
  readonly current_location_id!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly host!: string;
  readonly id?: string;
  readonly location_id?: string;
  readonly maintenance_schedule!: any[];
  readonly maintenance_version?: string;
  readonly nodes!: any[];
  readonly persistence_iam_identity!: string;
  readonly port!: number;
  readonly project?: string;
  readonly read_endpoint!: string;
  readonly read_endpoint_port!: number;
  readonly read_replicas_mode?: string;
  readonly redis_version?: string;
  readonly region?: string;
  readonly replica_count?: number;
  readonly reserved_ip_range?: string;
  readonly secondary_ip_range?: string;
  readonly server_ca_certs!: any[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleRedisInstanceArgs) {
    super(config, "resource", args, resourceName, "google_redis_instance");
  }
}