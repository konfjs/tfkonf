import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleFirestoreBackupScheduleArgsDailyRecurrence {}
export interface GoogleFirestoreBackupScheduleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleFirestoreBackupScheduleArgsWeeklyRecurrence {
  day?: string;
}
export interface GoogleFirestoreBackupScheduleArgs {
  database?: string;
  retention: string;
  daily_recurrence: GoogleFirestoreBackupScheduleArgsDailyRecurrence;
  timeouts?: GoogleFirestoreBackupScheduleArgsTimeouts;
  weekly_recurrence: GoogleFirestoreBackupScheduleArgsWeeklyRecurrence;
}
export class google_firestore_backup_schedule extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirestoreBackupScheduleArgs) {
    super(config, "resource", args, resourceName, "google_firestore_backup_schedule");
  }
}