import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDatasyncTaskArgsexcludes {
  filter_type?: string;
  value?: string;
}
export interface AwsDatasyncTaskArgsincludes {
  filter_type?: string;
  value?: string;
}
export interface AwsDatasyncTaskArgsoptions {
  atime?: string;
  bytes_per_second?: number;
  gid?: string;
  log_level?: string;
  mtime?: string;
  object_tags?: string;
  overwrite_mode?: string;
  posix_permissions?: string;
  preserve_deleted_files?: string;
  preserve_devices?: string;
  task_queueing?: string;
  transfer_mode?: string;
  uid?: string;
  verify_mode?: string;
}
export interface AwsDatasyncTaskArgsschedule {
  schedule_expression: string;
}
export interface AwsDatasyncTaskArgsTaskReportConfigReportOverrides {
  deleted_override?: string;
  skipped_override?: string;
  transferred_override?: string;
  verified_override?: string;
}
export interface AwsDatasyncTaskArgsTaskReportConfigS3Destination {
  bucket_access_role_arn: string;
  s3_bucket_arn: string;
  subdirectory?: string;
}
export interface AwsDatasyncTaskArgsTaskReportConfig {
  output_type?: string;
  report_level?: string;
  s3_object_versioning?: string;
  report_overrides: AwsDatasyncTaskArgsTaskReportConfigReportOverrides;
  s3_destination: AwsDatasyncTaskArgsTaskReportConfigS3Destination;
}
export interface AwsDatasyncTaskArgstimeouts {
  create?: string;
}
export interface AwsDatasyncTaskArgs {
  cloudwatch_log_group_arn?: string;
  destination_location_arn: string;
  name?: string;
  source_location_arn: string;
  tags?: {
    [key: string]: string;
  };
  excludes: AwsDatasyncTaskArgsexcludes;
  includes: AwsDatasyncTaskArgsincludes;
  options: AwsDatasyncTaskArgsoptions;
  schedule: AwsDatasyncTaskArgsschedule;
  task_report_config: AwsDatasyncTaskArgsTaskReportConfig;
  timeouts: AwsDatasyncTaskArgstimeouts;
}
export class aws_datasync_task extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatasyncTaskArgs) {
    super(config, "resource", args, resourceName, "aws_datasync_task");
  }
}