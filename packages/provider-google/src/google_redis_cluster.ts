import { TerraformConfig, TerraformResource } from "tfs";
export interface StartTime {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface WeeklyMaintenanceWindow {
  day: string;
  start_time: StartTime;
}
export interface MaintenancePolicy {
  weekly_maintenance_window: WeeklyMaintenanceWindow;
}
export interface AofConfig {}
export interface RdbConfig {}
export interface PersistenceConfig {
  aof_config: AofConfig;
  rdb_config: RdbConfig;
}
export interface PscConfigs {
  network: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface ZoneDistributionConfig {
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
  maintenance_policy: MaintenancePolicy;
  persistence_config: PersistenceConfig;
  psc_configs: PscConfigs;
  timeouts: Timeouts;
  zone_distribution_config: ZoneDistributionConfig;
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