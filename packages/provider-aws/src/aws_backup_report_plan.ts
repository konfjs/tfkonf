import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBackupReportPlanArgsReportDeliveryChannel {
  formats?: string[];
  s3_bucket_name: string;
  s3_key_prefix?: string;
}

export interface AwsBackupReportPlanArgsReportSetting {
  accounts?: string[];
  framework_arns?: string[];
  number_of_frameworks?: number;
  organization_units?: string[];
  regions?: string[];
  report_template: string;
}

export interface AwsBackupReportPlanArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  report_delivery_channel: AwsBackupReportPlanArgsReportDeliveryChannel;
  report_setting: AwsBackupReportPlanArgsReportSetting;
}

export class aws_backup_report_plan extends TerraformResource {
  readonly arn!: string;
  readonly creation_time!: string;
  readonly deployment_status!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsBackupReportPlanArgs) {
    super(config, "resource", args, resourceName, "aws_backup_report_plan");
  }
}
