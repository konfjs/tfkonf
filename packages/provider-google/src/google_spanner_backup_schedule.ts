import { TerraformConfig, TerraformResource } from "tfs";
export interface FullBackupSpec {}
export interface IncrementalBackupSpec {}
export interface CronSpec {
  text?: string;
}
export interface Spec {
  cron_spec: CronSpec;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSpannerBackupScheduleArgs {
  database: string;
  instance: string;
  name?: string;
  retention_duration: string;
  full_backup_spec: FullBackupSpec;
  incremental_backup_spec: IncrementalBackupSpec;
  spec: Spec;
  timeouts: Timeouts;
}
export class google_spanner_backup_schedule extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSpannerBackupScheduleArgs) {
    super(config, "resource", args, resourceName, "google_spanner_backup_schedule");
  }
}