import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIvschatLoggingConfigurationArgsDestinationConfigurationCloudwatchLogs {
  log_group_name: string;
}
export interface AwsIvschatLoggingConfigurationArgsDestinationConfigurationFirehose {
  delivery_stream_name: string;
}
export interface AwsIvschatLoggingConfigurationArgsDestinationConfigurationS3 {
  bucket_name: string;
}
export interface AwsIvschatLoggingConfigurationArgsDestinationConfiguration {
  cloudwatch_logs: AwsIvschatLoggingConfigurationArgsDestinationConfigurationCloudwatchLogs;
  firehose: AwsIvschatLoggingConfigurationArgsDestinationConfigurationFirehose;
  s3: AwsIvschatLoggingConfigurationArgsDestinationConfigurationS3;
}
export interface AwsIvschatLoggingConfigurationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsIvschatLoggingConfigurationArgs {
  name?: string;
  tags?: {
    [key: string]: string;
  };
  destination_configuration: AwsIvschatLoggingConfigurationArgsDestinationConfiguration;
  timeouts: AwsIvschatLoggingConfigurationArgsTimeouts;
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