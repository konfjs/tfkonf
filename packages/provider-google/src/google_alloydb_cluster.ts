import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleAlloydbClusterArgsAutomatedBackupPolicyEncryptionConfig {
  kms_key_name?: string;
}
export interface GoogleAlloydbClusterArgsAutomatedBackupPolicyQuantityBasedRetention {
  count?: number;
}
export interface GoogleAlloydbClusterArgsAutomatedBackupPolicyTimeBasedRetention {
  retention_period?: string;
}
export interface GoogleAlloydbClusterArgsAutomatedBackupPolicyWeeklyScheduleStartTimes {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface GoogleAlloydbClusterArgsAutomatedBackupPolicyWeeklySchedule {
  days_of_week?: string[];
  start_times: GoogleAlloydbClusterArgsAutomatedBackupPolicyWeeklyScheduleStartTimes;
}
export interface GoogleAlloydbClusterArgsAutomatedBackupPolicy {
  labels?: {
    [key: string]: string;
  };
  encryption_config: GoogleAlloydbClusterArgsAutomatedBackupPolicyEncryptionConfig;
  quantity_based_retention: GoogleAlloydbClusterArgsAutomatedBackupPolicyQuantityBasedRetention;
  time_based_retention: GoogleAlloydbClusterArgsAutomatedBackupPolicyTimeBasedRetention;
  weekly_schedule: GoogleAlloydbClusterArgsAutomatedBackupPolicyWeeklySchedule;
}
export interface GoogleAlloydbClusterArgsContinuousBackupConfigEncryptionConfig {
  kms_key_name?: string;
}
export interface GoogleAlloydbClusterArgsContinuousBackupConfig {
  enabled?: boolean;
  encryption_config: GoogleAlloydbClusterArgsContinuousBackupConfigEncryptionConfig;
}
export interface GoogleAlloydbClusterArgsEncryptionConfig {
  kms_key_name?: string;
}
export interface GoogleAlloydbClusterArgsInitialUser {
  password: string;
  user?: string;
}
export interface GoogleAlloydbClusterArgsMaintenanceUpdatePolicyMaintenanceWindowsStartTime {
  hours: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface GoogleAlloydbClusterArgsMaintenanceUpdatePolicyMaintenanceWindows {
  day: string;
  start_time: GoogleAlloydbClusterArgsMaintenanceUpdatePolicyMaintenanceWindowsStartTime;
}
export interface GoogleAlloydbClusterArgsMaintenanceUpdatePolicy {
  maintenance_windows: GoogleAlloydbClusterArgsMaintenanceUpdatePolicyMaintenanceWindows;
}
export interface GoogleAlloydbClusterArgsNetworkConfig {
  allocated_ip_range?: string;
  network?: string;
}
export interface GoogleAlloydbClusterArgsPscConfig {
  psc_enabled?: boolean;
}
export interface GoogleAlloydbClusterArgsRestoreBackupSource {
  backup_name: string;
}
export interface GoogleAlloydbClusterArgsRestoreContinuousBackupSource {
  cluster: string;
  point_in_time: string;
}
export interface GoogleAlloydbClusterArgsSecondaryConfig {
  primary_cluster_name: string;
}
export interface GoogleAlloydbClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAlloydbClusterArgs {
  annotations?: {
    [key: string]: string;
  };
  cluster_id: string;
  cluster_type?: string;
  deletion_policy?: string;
  display_name?: string;
  etag?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  automated_backup_policy: GoogleAlloydbClusterArgsAutomatedBackupPolicy;
  continuous_backup_config: GoogleAlloydbClusterArgsContinuousBackupConfig;
  encryption_config: GoogleAlloydbClusterArgsEncryptionConfig;
  initial_user: GoogleAlloydbClusterArgsInitialUser;
  maintenance_update_policy: GoogleAlloydbClusterArgsMaintenanceUpdatePolicy;
  network_config: GoogleAlloydbClusterArgsNetworkConfig;
  psc_config: GoogleAlloydbClusterArgsPscConfig;
  restore_backup_source: GoogleAlloydbClusterArgsRestoreBackupSource;
  restore_continuous_backup_source: GoogleAlloydbClusterArgsRestoreContinuousBackupSource;
  secondary_config: GoogleAlloydbClusterArgsSecondaryConfig;
  timeouts?: GoogleAlloydbClusterArgsTimeouts;
}
export class google_alloydb_cluster extends TerraformResource {
  readonly backup_source!: any[];
  readonly continuous_backup_info!: any[];
  readonly database_version?: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly encryption_info!: any[];
  readonly id?: string;
  readonly migration_source!: any[];
  readonly name!: string;
  readonly project?: string;
  readonly reconciling!: boolean;
  readonly state!: string;
  readonly subscription_type?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly trial_metadata!: any[];
  readonly uid!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAlloydbClusterArgs) {
    super(config, "resource", args, resourceName, "google_alloydb_cluster");
  }
}