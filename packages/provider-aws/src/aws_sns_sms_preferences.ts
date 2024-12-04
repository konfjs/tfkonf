import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSnsSmsPreferencesArgs {
  default_sender_id?: string;
  default_sms_type?: string;
  delivery_status_iam_role_arn?: string;
  delivery_status_success_sampling_rate?: string;
  usage_report_s3_bucket?: string;
}

export class aws_sns_sms_preferences extends TerraformResource {
  readonly id?: string;
  readonly monthly_spend_limit?: number;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSnsSmsPreferencesArgs) {
    super(config, "resource", args, resourceName, "aws_sns_sms_preferences");
  }
}
