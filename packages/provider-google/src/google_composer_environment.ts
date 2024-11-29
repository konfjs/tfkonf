import { TerraformConfig, TerraformResource } from "tfs";
export interface TaskLogsRetentionConfig {
  storage_mode?: string;
}
export interface DataRetentionConfig {
  task_logs_retention_config: TaskLogsRetentionConfig;
}
export interface DatabaseConfig {
  machine_type?: string;
  zone?: string;
}
export interface EncryptionConfig {
  kms_key_name: string;
}
export interface MaintenanceWindow {
  end_time: string;
  recurrence: string;
  start_time: string;
}
export interface CidrBlocks {
  cidr_block: string;
  display_name?: string;
}
export interface MasterAuthorizedNetworksConfig {
  enabled: boolean;
  cidr_blocks: CidrBlocks;
}
export interface IpAllocationPolicy {
  cluster_ipv4_cidr_block?: string;
  cluster_secondary_range_name?: string;
  services_ipv4_cidr_block?: string;
  services_secondary_range_name?: string;
  use_ip_aliases?: boolean;
}
export interface NodeConfig {
  subnetwork?: string;
  tags?: string[];
  ip_allocation_policy: IpAllocationPolicy;
}
export interface PrivateEnvironmentConfig {
  enable_private_endpoint?: boolean;
}
export interface ScheduledSnapshotsConfig {
  enabled: boolean;
  snapshot_creation_schedule?: string;
  snapshot_location?: string;
  time_zone?: string;
}
export interface RecoveryConfig {
  scheduled_snapshots_config: ScheduledSnapshotsConfig;
}
export interface CloudDataLineageIntegration {
  enabled: boolean;
}
export interface SoftwareConfig {
  airflow_config_overrides?: {
    [key: string]: string;
  };
  env_variables?: {
    [key: string]: string;
  };
  pypi_packages?: {
    [key: string]: string;
  };
  cloud_data_lineage_integration: CloudDataLineageIntegration;
}
export interface WebServerConfig {
  machine_type: string;
}
export interface AllowedIpRange {
  description?: string;
  value: string;
}
export interface WebServerNetworkAccessControl {
  allowed_ip_range: AllowedIpRange;
}
export interface Scheduler {}
export interface Triggerer {
  count: number;
  cpu: number;
  memory_gb: number;
}
export interface WebServer {}
export interface Worker {}
export interface WorkloadsConfig {
  scheduler: Scheduler;
  triggerer: Triggerer;
  web_server: WebServer;
  worker: Worker;
}
export interface Config {
  data_retention_config: DataRetentionConfig;
  database_config: DatabaseConfig;
  encryption_config: EncryptionConfig;
  maintenance_window: MaintenanceWindow;
  master_authorized_networks_config: MasterAuthorizedNetworksConfig;
  node_config: NodeConfig;
  private_environment_config: PrivateEnvironmentConfig;
  recovery_config: RecoveryConfig;
  software_config: SoftwareConfig;
  web_server_config: WebServerConfig;
  web_server_network_access_control: WebServerNetworkAccessControl;
  workloads_config: WorkloadsConfig;
}
export interface StorageConfig {
  bucket: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComposerEnvironmentArgs {
  labels?: {
    [key: string]: string;
  };
  name: string;
  config: Config;
  storage_config: StorageConfig;
  timeouts: Timeouts;
}
export class google_composer_environment extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComposerEnvironmentArgs) {
    super(config, "resource", args, resourceName, "google_composer_environment");
  }
}