import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSnsTopicArgs {
  application_failure_feedback_role_arn?: string;
  application_success_feedback_role_arn?: string;
  application_success_feedback_sample_rate?: number;
  archive_policy?: string;
  content_based_deduplication?: boolean;
  delivery_policy?: string;
  display_name?: string;
  fifo_topic?: boolean;
  firehose_failure_feedback_role_arn?: string;
  firehose_success_feedback_role_arn?: string;
  firehose_success_feedback_sample_rate?: number;
  http_failure_feedback_role_arn?: string;
  http_success_feedback_role_arn?: string;
  http_success_feedback_sample_rate?: number;
  kms_master_key_id?: string;
  lambda_failure_feedback_role_arn?: string;
  lambda_success_feedback_role_arn?: string;
  lambda_success_feedback_sample_rate?: number;
  sqs_failure_feedback_role_arn?: string;
  sqs_success_feedback_role_arn?: string;
  sqs_success_feedback_sample_rate?: number;
  tags?: { [key: string]: string };
}

export class aws_sns_topic extends TerraformResource {
  readonly arn!: string;
  readonly beginning_archive_time!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly owner!: string;
  readonly policy?: string;
  readonly signature_version?: number;
  readonly tags_all?: { [key: string]: string };
  readonly tracing_config?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSnsTopicArgs) {
    super(config, "resource", args, resourceName, "aws_sns_topic");
  }
}
