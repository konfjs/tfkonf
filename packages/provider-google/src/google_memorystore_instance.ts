import { TerraformConfig, TerraformResource } from "tfs";
export interface DesiredPscAutoConnections {
  network: string;
  project_id: string;
}
export interface AofConfig {}
export interface RdbConfig {}
export interface PersistenceConfig {
  aof_config: AofConfig;
  rdb_config: RdbConfig;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface ZoneDistributionConfig {
  zone?: string;
}
export interface GoogleMemorystoreInstanceArgs {
  deletion_protection_enabled?: boolean;
  engine_configs?: {
    [key: string]: string;
  };
  instance_id: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  shard_count: number;
  desired_psc_auto_connections: DesiredPscAutoConnections;
  persistence_config: PersistenceConfig;
  timeouts: Timeouts;
  zone_distribution_config: ZoneDistributionConfig;
}
export class google_memorystore_instance extends TerraformResource {
  readonly authorization_mode?: string;
  readonly create_time!: string;
  readonly discovery_endpoints!: any[];
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly endpoints!: any[];
  readonly engine_version?: string;
  readonly id?: string;
  readonly mode?: string;
  readonly name!: string;
  readonly node_config!: any[];
  readonly node_type?: string;
  readonly project?: string;
  readonly psc_auto_connections!: any[];
  readonly replica_count?: number;
  readonly state!: string;
  readonly state_info!: any[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly transit_encryption_mode?: string;
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleMemorystoreInstanceArgs) {
    super(config, "resource", args, resourceName, "google_memorystore_instance");
  }
}