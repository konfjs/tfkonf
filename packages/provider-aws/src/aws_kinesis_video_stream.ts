import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsKinesisVideoStreamArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsKinesisVideoStreamArgs {
  data_retention_in_hours?: number;
  device_name?: string;
  media_type?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsKinesisVideoStreamArgsTimeouts;
}
export class aws_kinesis_video_stream extends TerraformResource {
  readonly arn!: string;
  readonly creation_time!: string;
  readonly id?: string;
  readonly kms_key_id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsKinesisVideoStreamArgs) {
    super(config, "resource", args, resourceName, "aws_kinesis_video_stream");
  }
}