import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSqsQueueArgs {
  content_based_deduplication?: boolean;
  delay_seconds?: number;
  fifo_queue?: boolean;
  kms_master_key_id?: string;
  max_message_size?: number;
  message_retention_seconds?: number;
  receive_wait_time_seconds?: number;
  tags?: { [key: string]: string };
  visibility_timeout_seconds?: number;
}

export class aws_sqs_queue extends TerraformResource {
  readonly arn!: string;
  readonly deduplication_scope?: string;
  readonly fifo_throughput_limit?: string;
  readonly id?: string;
  readonly kms_data_key_reuse_period_seconds?: number;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly policy?: string;
  readonly redrive_allow_policy?: string;
  readonly redrive_policy?: string;
  readonly sqs_managed_sse_enabled?: boolean;
  readonly tags_all?: { [key: string]: string };
  readonly url!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSqsQueueArgs) {
    super(config, "resource", args, resourceName, "aws_sqs_queue");
  }
}
