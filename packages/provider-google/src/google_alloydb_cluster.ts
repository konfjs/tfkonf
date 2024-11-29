import { TerraformConfig, TerraformResource } from "tfs";
export interface EncryptionConfig {
  kms_key_name?: string;
}
export interface QuantityBasedRetention {
  count?: number;
}
export interface TimeBasedRetention {
  retention_period?: string;
}
export interface StartTimes {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface WeeklySchedule {
  days_of_week?: string[];
  start_times: StartTimes;
}
export interface AutomatedBackupPolicy {
  labels?: {
    [key: string]: string;
  };
  encryption_config: EncryptionConfig;
  quantity_based_retention: QuantityBasedRetention;
  time_based_retention: TimeBasedRetention;
  weekly_schedule: WeeklySchedule;
}
export interface EncryptionConfig {
  kms_key_name?: string;
}
export interface ContinuousBackupConfig {
  enabled?: boolean;
  encryption_config: EncryptionConfig;
}
export interface EncryptionConfig {
  kms_key_name?: string;
}
export interface InitialUser {
  password: string;
  user?: string;
}
export interface StartTime {
  hours: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface MaintenanceWindows {
  day: string;
  start_time: StartTime;
}
export interface MaintenanceUpdatePolicy {
  maintenance_windows: MaintenanceWindows;
}
export interface NetworkConfig {
  allocated_ip_range?: string;
  network?: string;
}
export interface PscConfig {
  psc_enabled?: boolean;
}
export interface RestoreBackupSource {
  backup_name: string;
}
export interface RestoreContinuousBackupSource {
  cluster: string;
  point_in_time: string;
}
export interface SecondaryConfig {
  primary_cluster_name: string;
}
export interface Timeouts {
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
  automated_backup_policy: AutomatedBackupPolicy;
  continuous_backup_config: ContinuousBackupConfig;
  encryption_config: EncryptionConfig;
  initial_user: InitialUser;
  maintenance_update_policy: MaintenanceUpdatePolicy;
  network_config: NetworkConfig;
  psc_config: PscConfig;
  restore_backup_source: RestoreBackupSource;
  restore_continuous_backup_source: RestoreContinuousBackupSource;
  secondary_config: SecondaryConfig;
  timeouts: Timeouts;
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