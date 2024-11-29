import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSpannerBackupScheduleArgsFullBackupSpec {}
export interface GoogleSpannerBackupScheduleArgsIncrementalBackupSpec {}
export interface GoogleSpannerBackupScheduleArgsspecCronSpec {
  text?: string;
}
export interface GoogleSpannerBackupScheduleArgsspec {
  cron_spec: GoogleSpannerBackupScheduleArgsspecCronSpec;
}
export interface GoogleSpannerBackupScheduleArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSpannerBackupScheduleArgs {
  database: string;
  instance: string;
  name?: string;
  retention_duration: string;
  full_backup_spec: GoogleSpannerBackupScheduleArgsFullBackupSpec;
  incremental_backup_spec: GoogleSpannerBackupScheduleArgsIncrementalBackupSpec;
  spec: GoogleSpannerBackupScheduleArgsspec;
  timeouts: GoogleSpannerBackupScheduleArgstimeouts;
}
export class google_spanner_backup_schedule extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSpannerBackupScheduleArgs) {
    super(config, "resource", args, resourceName, "google_spanner_backup_schedule");
  }
}