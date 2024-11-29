import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNetappVolumeArgsBackupConfig {
  backup_policies?: string[];
  backup_vault?: string;
  scheduled_backup_enabled?: boolean;
}
export interface GoogleNetappVolumeArgsExportPolicyRules {
  access_type?: string;
  allowed_clients?: string;
  has_root_access?: string;
  kerberos5_read_only?: boolean;
  kerberos5_read_write?: boolean;
  kerberos5i_read_only?: boolean;
  kerberos5i_read_write?: boolean;
  kerberos5p_read_only?: boolean;
  kerberos5p_read_write?: boolean;
  nfsv3?: boolean;
  nfsv4?: boolean;
}
export interface GoogleNetappVolumeArgsExportPolicy {
  rules: GoogleNetappVolumeArgsExportPolicyRules;
}
export interface GoogleNetappVolumeArgsRestoreParameters {
  source_backup?: string;
  source_snapshot?: string;
}
export interface GoogleNetappVolumeArgsSnapshotPolicyDailySchedule {
  hour?: number;
  minute?: number;
  snapshots_to_keep: number;
}
export interface GoogleNetappVolumeArgsSnapshotPolicyHourlySchedule {
  minute?: number;
  snapshots_to_keep: number;
}
export interface GoogleNetappVolumeArgsSnapshotPolicyMonthlySchedule {
  days_of_month?: string;
  hour?: number;
  minute?: number;
  snapshots_to_keep: number;
}
export interface GoogleNetappVolumeArgsSnapshotPolicyWeeklySchedule {
  day?: string;
  hour?: number;
  minute?: number;
  snapshots_to_keep: number;
}
export interface GoogleNetappVolumeArgsSnapshotPolicy {
  enabled?: boolean;
  daily_schedule: GoogleNetappVolumeArgsSnapshotPolicyDailySchedule;
  hourly_schedule: GoogleNetappVolumeArgsSnapshotPolicyHourlySchedule;
  monthly_schedule: GoogleNetappVolumeArgsSnapshotPolicyMonthlySchedule;
  weekly_schedule: GoogleNetappVolumeArgsSnapshotPolicyWeeklySchedule;
}
export interface GoogleNetappVolumeArgsTieringPolicy {
  cooling_threshold_days?: number;
  tier_action?: string;
}
export interface GoogleNetappVolumeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetappVolumeArgs {
  capacity_gib: string;
  deletion_policy?: string;
  description?: string;
  kerberos_enabled?: boolean;
  labels?: {
    [key: string]: string;
  };
  large_capacity?: boolean;
  location: string;
  multiple_endpoints?: boolean;
  name: string;
  protocols: string[];
  restricted_actions?: string[];
  share_name: string;
  snapshot_directory?: boolean;
  storage_pool: string;
  backup_config: GoogleNetappVolumeArgsBackupConfig;
  export_policy: GoogleNetappVolumeArgsExportPolicy;
  restore_parameters: GoogleNetappVolumeArgsRestoreParameters;
  snapshot_policy: GoogleNetappVolumeArgsSnapshotPolicy;
  tiering_policy: GoogleNetappVolumeArgsTieringPolicy;
  timeouts: GoogleNetappVolumeArgsTimeouts;
}
export class google_netapp_volume extends TerraformResource {
  readonly active_directory!: string;
  readonly cold_tier_size_gib!: string;
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly encryption_type!: string;
  readonly has_replication!: boolean;
  readonly id?: string;
  readonly kms_config!: string;
  readonly ldap_enabled!: boolean;
  readonly mount_options!: any[];
  readonly network!: string;
  readonly project?: string;
  readonly psa_range!: string;
  readonly replica_zone!: string;
  readonly security_style?: string;
  readonly service_level!: string;
  readonly smb_settings?: string[];
  readonly state!: string;
  readonly state_details!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly unix_permissions?: string;
  readonly used_gib!: string;
  readonly zone!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetappVolumeArgs) {
    super(config, "resource", args, resourceName, "google_netapp_volume");
  }
}