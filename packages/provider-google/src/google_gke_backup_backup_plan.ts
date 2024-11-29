import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleGkeBackupBackupPlanArgsBackupConfigEncryptionKey {
  gcp_kms_encryption_key: string;
}
export interface GoogleGkeBackupBackupPlanArgsBackupConfigSelectedApplicationsNamespacedNames {
  name: string;
  namespace: string;
}
export interface GoogleGkeBackupBackupPlanArgsBackupConfigSelectedApplications {
  namespaced_names: GoogleGkeBackupBackupPlanArgsBackupConfigSelectedApplicationsNamespacedNames;
}
export interface GoogleGkeBackupBackupPlanArgsBackupConfigSelectedNamespaces {
  namespaces: string[];
}
export interface GoogleGkeBackupBackupPlanArgsBackupConfig {
  all_namespaces?: boolean;
  permissive_mode?: boolean;
  encryption_key: GoogleGkeBackupBackupPlanArgsBackupConfigEncryptionKey;
  selected_applications: GoogleGkeBackupBackupPlanArgsBackupConfigSelectedApplications;
  selected_namespaces: GoogleGkeBackupBackupPlanArgsBackupConfigSelectedNamespaces;
}
export interface GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfigExclusionWindowsDaysOfWeek {
  days_of_week?: string[];
}
export interface GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate {
  day?: number;
  month?: number;
  year?: number;
}
export interface GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfigExclusionWindowsStartTime {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfigExclusionWindows {
  daily?: boolean;
  duration: string;
  days_of_week: GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfigExclusionWindowsDaysOfWeek;
  single_occurrence_date: GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate;
  start_time: GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfigExclusionWindowsStartTime;
}
export interface GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfig {
  target_rpo_minutes: number;
  exclusion_windows: GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfigExclusionWindows;
}
export interface GoogleGkeBackupBackupPlanArgsBackupSchedule {
  cron_schedule?: string;
  rpo_config: GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfig;
}
export interface GoogleGkeBackupBackupPlanArgsRetentionPolicy {}
export interface GoogleGkeBackupBackupPlanArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleGkeBackupBackupPlanArgs {
  cluster: string;
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  backup_config: GoogleGkeBackupBackupPlanArgsBackupConfig;
  backup_schedule: GoogleGkeBackupBackupPlanArgsBackupSchedule;
  retention_policy: GoogleGkeBackupBackupPlanArgsRetentionPolicy;
  timeouts: GoogleGkeBackupBackupPlanArgstimeouts;
}
export class google_gke_backup_backup_plan extends TerraformResource {
  readonly deactivated?: boolean;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly protected_pod_count!: number;
  readonly state!: string;
  readonly state_reason!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeBackupBackupPlanArgs) {
    super(config, "resource", args, resourceName, "google_gke_backup_backup_plan");
  }
}