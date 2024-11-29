import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComposerEnvironmentArgsConfigDataRetentionConfigTaskLogsRetentionConfig {
  storage_mode?: string;
}
export interface GoogleComposerEnvironmentArgsConfigDataRetentionConfig {
  task_logs_retention_config: GoogleComposerEnvironmentArgsConfigDataRetentionConfigTaskLogsRetentionConfig;
}
export interface GoogleComposerEnvironmentArgsConfigDatabaseConfig {
  machine_type?: string;
  zone?: string;
}
export interface GoogleComposerEnvironmentArgsConfigEncryptionConfig {
  kms_key_name: string;
}
export interface GoogleComposerEnvironmentArgsConfigMaintenanceWindow {
  end_time: string;
  recurrence: string;
  start_time: string;
}
export interface GoogleComposerEnvironmentArgsConfigMasterAuthorizedNetworksConfigCidrBlocks {
  cidr_block: string;
  display_name?: string;
}
export interface GoogleComposerEnvironmentArgsConfigMasterAuthorizedNetworksConfig {
  enabled: boolean;
  cidr_blocks: GoogleComposerEnvironmentArgsConfigMasterAuthorizedNetworksConfigCidrBlocks;
}
export interface GoogleComposerEnvironmentArgsConfigNodeConfigIpAllocationPolicy {
  cluster_ipv4_cidr_block?: string;
  cluster_secondary_range_name?: string;
  services_ipv4_cidr_block?: string;
  services_secondary_range_name?: string;
  use_ip_aliases?: boolean;
}
export interface GoogleComposerEnvironmentArgsConfigNodeConfig {
  subnetwork?: string;
  tags?: string[];
  ip_allocation_policy: GoogleComposerEnvironmentArgsConfigNodeConfigIpAllocationPolicy;
}
export interface GoogleComposerEnvironmentArgsConfigPrivateEnvironmentConfig {
  enable_private_endpoint?: boolean;
}
export interface GoogleComposerEnvironmentArgsConfigRecoveryConfigScheduledSnapshotsConfig {
  enabled: boolean;
  snapshot_creation_schedule?: string;
  snapshot_location?: string;
  time_zone?: string;
}
export interface GoogleComposerEnvironmentArgsConfigRecoveryConfig {
  scheduled_snapshots_config: GoogleComposerEnvironmentArgsConfigRecoveryConfigScheduledSnapshotsConfig;
}
export interface GoogleComposerEnvironmentArgsConfigSoftwareConfigCloudDataLineageIntegration {
  enabled: boolean;
}
export interface GoogleComposerEnvironmentArgsConfigSoftwareConfig {
  airflow_config_overrides?: {
    [key: string]: string;
  };
  env_variables?: {
    [key: string]: string;
  };
  pypi_packages?: {
    [key: string]: string;
  };
  cloud_data_lineage_integration: GoogleComposerEnvironmentArgsConfigSoftwareConfigCloudDataLineageIntegration;
}
export interface GoogleComposerEnvironmentArgsConfigWebServerConfig {
  machine_type: string;
}
export interface GoogleComposerEnvironmentArgsConfigWebServerNetworkAccessControlAllowedIpRange {
  description?: string;
  value: string;
}
export interface GoogleComposerEnvironmentArgsConfigWebServerNetworkAccessControl {
  allowed_ip_range: GoogleComposerEnvironmentArgsConfigWebServerNetworkAccessControlAllowedIpRange;
}
export interface GoogleComposerEnvironmentArgsConfigWorkloadsConfigScheduler {}
export interface GoogleComposerEnvironmentArgsConfigWorkloadsConfigTriggerer {
  count: number;
  cpu: number;
  memory_gb: number;
}
export interface GoogleComposerEnvironmentArgsConfigWorkloadsConfigWebServer {}
export interface GoogleComposerEnvironmentArgsConfigWorkloadsConfigWorker {}
export interface GoogleComposerEnvironmentArgsConfigWorkloadsConfig {
  scheduler: GoogleComposerEnvironmentArgsConfigWorkloadsConfigScheduler;
  triggerer: GoogleComposerEnvironmentArgsConfigWorkloadsConfigTriggerer;
  web_server: GoogleComposerEnvironmentArgsConfigWorkloadsConfigWebServer;
  worker: GoogleComposerEnvironmentArgsConfigWorkloadsConfigWorker;
}
export interface GoogleComposerEnvironmentArgsConfig {
  data_retention_config: GoogleComposerEnvironmentArgsConfigDataRetentionConfig;
  database_config: GoogleComposerEnvironmentArgsConfigDatabaseConfig;
  encryption_config: GoogleComposerEnvironmentArgsConfigEncryptionConfig;
  maintenance_window: GoogleComposerEnvironmentArgsConfigMaintenanceWindow;
  master_authorized_networks_config: GoogleComposerEnvironmentArgsConfigMasterAuthorizedNetworksConfig;
  node_config: GoogleComposerEnvironmentArgsConfigNodeConfig;
  private_environment_config: GoogleComposerEnvironmentArgsConfigPrivateEnvironmentConfig;
  recovery_config: GoogleComposerEnvironmentArgsConfigRecoveryConfig;
  software_config: GoogleComposerEnvironmentArgsConfigSoftwareConfig;
  web_server_config: GoogleComposerEnvironmentArgsConfigWebServerConfig;
  web_server_network_access_control: GoogleComposerEnvironmentArgsConfigWebServerNetworkAccessControl;
  workloads_config: GoogleComposerEnvironmentArgsConfigWorkloadsConfig;
}
export interface GoogleComposerEnvironmentArgsStorageConfig {
  bucket: string;
}
export interface GoogleComposerEnvironmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComposerEnvironmentArgs {
  labels?: {
    [key: string]: string;
  };
  name: string;
  config: GoogleComposerEnvironmentArgsConfig;
  storage_config: GoogleComposerEnvironmentArgsStorageConfig;
  timeouts: GoogleComposerEnvironmentArgsTimeouts;
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