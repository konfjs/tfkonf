import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSpannerBackupScheduleArgsFullBackupSpec {
}

export interface GoogleSpannerBackupScheduleArgsIncrementalBackupSpec {
}

export interface GoogleSpannerBackupScheduleArgsSpecCronSpec {
  text?: string;
}

export interface GoogleSpannerBackupScheduleArgsSpec {
  cron_spec: GoogleSpannerBackupScheduleArgsSpecCronSpec;
}

export interface GoogleSpannerBackupScheduleArgsTimeouts {
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
  spec: GoogleSpannerBackupScheduleArgsSpec;
  timeouts?: GoogleSpannerBackupScheduleArgsTimeouts;
}

export class google_spanner_backup_schedule extends TerraformResource {
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleSpannerBackupScheduleArgs) {
    super(config, "resource", args, resourceName, "google_spanner_backup_schedule");
  }
}
