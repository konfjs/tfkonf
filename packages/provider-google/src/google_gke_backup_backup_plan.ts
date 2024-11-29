import { TerraformConfig, TerraformResource } from "tfs";
export interface EncryptionKey {
  gcp_kms_encryption_key: string;
}
export interface NamespacedNames {
  name: string;
  namespace: string;
}
export interface SelectedApplications {
  namespaced_names: NamespacedNames;
}
export interface SelectedNamespaces {
  namespaces: string[];
}
export interface BackupConfig {
  all_namespaces?: boolean;
  permissive_mode?: boolean;
  encryption_key: EncryptionKey;
  selected_applications: SelectedApplications;
  selected_namespaces: SelectedNamespaces;
}
export interface DaysOfWeek {
  days_of_week?: string[];
}
export interface SingleOccurrenceDate {
  day?: number;
  month?: number;
  year?: number;
}
export interface StartTime {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface ExclusionWindows {
  daily?: boolean;
  duration: string;
  days_of_week: DaysOfWeek;
  single_occurrence_date: SingleOccurrenceDate;
  start_time: StartTime;
}
export interface RpoConfig {
  target_rpo_minutes: number;
  exclusion_windows: ExclusionWindows;
}
export interface BackupSchedule {
  cron_schedule?: string;
  rpo_config: RpoConfig;
}
export interface RetentionPolicy {}
export interface Timeouts {
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
  backup_config: BackupConfig;
  backup_schedule: BackupSchedule;
  retention_policy: RetentionPolicy;
  timeouts: Timeouts;
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