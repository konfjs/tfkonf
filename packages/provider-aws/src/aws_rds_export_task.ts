import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRdsExportTaskArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsRdsExportTaskArgs {
  export_only?: string[];
  export_task_identifier: string;
  iam_role_arn: string;
  kms_key_id: string;
  s3_bucket_name: string;
  source_arn: string;
  timeouts?: AwsRdsExportTaskArgsTimeouts;
}

export class aws_rds_export_task extends TerraformResource {
  readonly failure_cause!: string;
  readonly id!: string;
  readonly percent_progress!: number;
  readonly s3_prefix?: string;
  readonly snapshot_time!: string;
  readonly source_type!: string;
  readonly status!: string;
  readonly task_end_time!: string;
  readonly task_start_time!: string;
  readonly warning_message!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsRdsExportTaskArgs) {
    super(config, "resource", args, resourceName, "aws_rds_export_task");
  }
}
