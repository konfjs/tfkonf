import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComposerEnvironmentArgsconfigDataRetentionConfigTaskLogsRetentionConfig {
  storage_mode?: string;
}
export interface GoogleComposerEnvironmentArgsconfigDataRetentionConfig {
  task_logs_retention_config: GoogleComposerEnvironmentArgsconfigDataRetentionConfigTaskLogsRetentionConfig;
}
export interface GoogleComposerEnvironmentArgsconfigDatabaseConfig {
  machine_type?: string;
  zone?: string;
}
export interface GoogleComposerEnvironmentArgsconfigEncryptionConfig {
  kms_key_name: string;
}
export interface GoogleComposerEnvironmentArgsconfigMaintenanceWindow {
  end_time: string;
  recurrence: string;
  start_time: string;
}
export interface GoogleComposerEnvironmentArgsconfigMasterAuthorizedNetworksConfigCidrBlocks {
  cidr_block: string;
  display_name?: string;
}
export interface GoogleComposerEnvironmentArgsconfigMasterAuthorizedNetworksConfig {
  enabled: boolean;
  cidr_blocks: GoogleComposerEnvironmentArgsconfigMasterAuthorizedNetworksConfigCidrBlocks;
}
export interface GoogleComposerEnvironmentArgsconfigNodeConfigIpAllocationPolicy {
  cluster_ipv4_cidr_block?: string;
  cluster_secondary_range_name?: string;
  services_ipv4_cidr_block?: string;
  services_secondary_range_name?: string;
  use_ip_aliases?: boolean;
}
export interface GoogleComposerEnvironmentArgsconfigNodeConfig {
  subnetwork?: string;
  tags?: string[];
  ip_allocation_policy: GoogleComposerEnvironmentArgsconfigNodeConfigIpAllocationPolicy;
}
export interface GoogleComposerEnvironmentArgsconfigPrivateEnvironmentConfig {
  enable_private_endpoint?: boolean;
}
export interface GoogleComposerEnvironmentArgsconfigRecoveryConfigScheduledSnapshotsConfig {
  enabled: boolean;
  snapshot_creation_schedule?: string;
  snapshot_location?: string;
  time_zone?: string;
}
export interface GoogleComposerEnvironmentArgsconfigRecoveryConfig {
  scheduled_snapshots_config: GoogleComposerEnvironmentArgsconfigRecoveryConfigScheduledSnapshotsConfig;
}
export interface GoogleComposerEnvironmentArgsconfigSoftwareConfigCloudDataLineageIntegration {
  enabled: boolean;
}
export interface GoogleComposerEnvironmentArgsconfigSoftwareConfig {
  airflow_config_overrides?: {
    [key: string]: string;
  };
  env_variables?: {
    [key: string]: string;
  };
  pypi_packages?: {
    [key: string]: string;
  };
  cloud_data_lineage_integration: GoogleComposerEnvironmentArgsconfigSoftwareConfigCloudDataLineageIntegration;
}
export interface GoogleComposerEnvironmentArgsconfigWebServerConfig {
  machine_type: string;
}
export interface GoogleComposerEnvironmentArgsconfigWebServerNetworkAccessControlAllowedIpRange {
  description?: string;
  value: string;
}
export interface GoogleComposerEnvironmentArgsconfigWebServerNetworkAccessControl {
  allowed_ip_range: GoogleComposerEnvironmentArgsconfigWebServerNetworkAccessControlAllowedIpRange;
}
export interface GoogleComposerEnvironmentArgsconfigWorkloadsConfigscheduler {}
export interface GoogleComposerEnvironmentArgsconfigWorkloadsConfigtriggerer {
  count: number;
  cpu: number;
  memory_gb: number;
}
export interface GoogleComposerEnvironmentArgsconfigWorkloadsConfigWebServer {}
export interface GoogleComposerEnvironmentArgsconfigWorkloadsConfigworker {}
export interface GoogleComposerEnvironmentArgsconfigWorkloadsConfig {
  scheduler: GoogleComposerEnvironmentArgsconfigWorkloadsConfigscheduler;
  triggerer: GoogleComposerEnvironmentArgsconfigWorkloadsConfigtriggerer;
  web_server: GoogleComposerEnvironmentArgsconfigWorkloadsConfigWebServer;
  worker: GoogleComposerEnvironmentArgsconfigWorkloadsConfigworker;
}
export interface GoogleComposerEnvironmentArgsconfig {
  data_retention_config: GoogleComposerEnvironmentArgsconfigDataRetentionConfig;
  database_config: GoogleComposerEnvironmentArgsconfigDatabaseConfig;
  encryption_config: GoogleComposerEnvironmentArgsconfigEncryptionConfig;
  maintenance_window: GoogleComposerEnvironmentArgsconfigMaintenanceWindow;
  master_authorized_networks_config: GoogleComposerEnvironmentArgsconfigMasterAuthorizedNetworksConfig;
  node_config: GoogleComposerEnvironmentArgsconfigNodeConfig;
  private_environment_config: GoogleComposerEnvironmentArgsconfigPrivateEnvironmentConfig;
  recovery_config: GoogleComposerEnvironmentArgsconfigRecoveryConfig;
  software_config: GoogleComposerEnvironmentArgsconfigSoftwareConfig;
  web_server_config: GoogleComposerEnvironmentArgsconfigWebServerConfig;
  web_server_network_access_control: GoogleComposerEnvironmentArgsconfigWebServerNetworkAccessControl;
  workloads_config: GoogleComposerEnvironmentArgsconfigWorkloadsConfig;
}
export interface GoogleComposerEnvironmentArgsStorageConfig {
  bucket: string;
}
export interface GoogleComposerEnvironmentArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComposerEnvironmentArgs {
  labels?: {
    [key: string]: string;
  };
  name: string;
  config: GoogleComposerEnvironmentArgsconfig;
  storage_config: GoogleComposerEnvironmentArgsStorageConfig;
  timeouts: GoogleComposerEnvironmentArgstimeouts;
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