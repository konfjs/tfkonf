import { TerraformConfig, TerraformResource } from "tfs";
export interface DailyRecurrence {}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface WeeklyRecurrence {
  day?: string;
}
export interface GoogleFirestoreBackupScheduleArgs {
  database?: string;
  retention: string;
  daily_recurrence: DailyRecurrence;
  timeouts: Timeouts;
  weekly_recurrence: WeeklyRecurrence;
}
export class google_firestore_backup_schedule extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirestoreBackupScheduleArgs) {
    super(config, "resource", args, resourceName, "google_firestore_backup_schedule");
  }
}