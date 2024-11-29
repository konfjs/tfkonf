import { TerraformConfig, TerraformResource } from "tfs";
export interface CloudwatchLogs {
  log_group_name: string;
}
export interface Firehose {
  delivery_stream_name: string;
}
export interface S3 {
  bucket_name: string;
}
export interface DestinationConfiguration {
  cloudwatch_logs: CloudwatchLogs;
  firehose: Firehose;
  s3: S3;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsIvschatLoggingConfigurationArgs {
  name?: string;
  tags?: {
    [key: string]: string;
  };
  destination_configuration: DestinationConfiguration;
  timeouts: Timeouts;
}
export class aws_ivschat_logging_configuration extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsIvschatLoggingConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_ivschat_logging_configuration");
  }
}