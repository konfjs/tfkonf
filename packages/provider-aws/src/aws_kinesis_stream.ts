import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsKinesisStreamArgsStreamModeDetails {
  stream_mode: string;
}
export interface AwsKinesisStreamArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsKinesisStreamArgs {
  encryption_type?: string;
  enforce_consumer_deletion?: boolean;
  kms_key_id?: string;
  name: string;
  retention_period?: number;
  shard_count?: number;
  shard_level_metrics?: string[];
  tags?: {
    [key: string]: string;
  };
  stream_mode_details: AwsKinesisStreamArgsStreamModeDetails;
  timeouts: AwsKinesisStreamArgstimeouts;
}
export class aws_kinesis_stream extends TerraformResource {
  readonly arn?: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsKinesisStreamArgs) {
    super(config, "resource", args, resourceName, "aws_kinesis_stream");
  }
}