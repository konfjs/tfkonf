import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleRedisClusterArgsMaintenancePolicyWeeklyMaintenanceWindowStartTime {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface GoogleRedisClusterArgsMaintenancePolicyWeeklyMaintenanceWindow {
  day: string;
  start_time: GoogleRedisClusterArgsMaintenancePolicyWeeklyMaintenanceWindowStartTime;
}
export interface GoogleRedisClusterArgsMaintenancePolicy {
  weekly_maintenance_window: GoogleRedisClusterArgsMaintenancePolicyWeeklyMaintenanceWindow;
}
export interface GoogleRedisClusterArgsPersistenceConfigAofConfig {}
export interface GoogleRedisClusterArgsPersistenceConfigRdbConfig {}
export interface GoogleRedisClusterArgsPersistenceConfig {
  aof_config: GoogleRedisClusterArgsPersistenceConfigAofConfig;
  rdb_config: GoogleRedisClusterArgsPersistenceConfigRdbConfig;
}
export interface GoogleRedisClusterArgsPscConfigs {
  network: string;
}
export interface GoogleRedisClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleRedisClusterArgsZoneDistributionConfig {
  zone?: string;
}
export interface GoogleRedisClusterArgs {
  authorization_mode?: string;
  deletion_protection_enabled?: boolean;
  redis_configs?: {
    [key: string]: string;
  };
  replica_count?: number;
  shard_count: number;
  transit_encryption_mode?: string;
  maintenance_policy: GoogleRedisClusterArgsMaintenancePolicy;
  persistence_config: GoogleRedisClusterArgsPersistenceConfig;
  psc_configs: GoogleRedisClusterArgsPscConfigs;
  timeouts?: GoogleRedisClusterArgsTimeouts;
  zone_distribution_config: GoogleRedisClusterArgsZoneDistributionConfig;
}
export class google_redis_cluster extends TerraformResource {
  readonly create_time!: string;
  readonly discovery_endpoints!: any[];
  readonly id?: string;
  readonly maintenance_schedule!: any[];
  readonly name?: string;
  readonly node_type?: string;
  readonly precise_size_gb!: number;
  readonly project?: string;
  readonly psc_connections!: any[];
  readonly region?: string;
  readonly size_gb!: number;
  readonly state!: string;
  readonly state_info!: any[];
  readonly uid!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleRedisClusterArgs) {
    super(config, "resource", args, resourceName, "google_redis_cluster");
  }
}