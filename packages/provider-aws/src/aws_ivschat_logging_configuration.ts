import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIvschatLoggingConfigurationArgsDestinationConfigurationCloudwatchLogs {
  log_group_name: string;
}
export interface AwsIvschatLoggingConfigurationArgsDestinationConfigurationfirehose {
  delivery_stream_name: string;
}
export interface AwsIvschatLoggingConfigurationArgsDestinationConfigurations3 {
  bucket_name: string;
}
export interface AwsIvschatLoggingConfigurationArgsDestinationConfiguration {
  cloudwatch_logs: AwsIvschatLoggingConfigurationArgsDestinationConfigurationCloudwatchLogs;
  firehose: AwsIvschatLoggingConfigurationArgsDestinationConfigurationfirehose;
  s3: AwsIvschatLoggingConfigurationArgsDestinationConfigurations3;
}
export interface AwsIvschatLoggingConfigurationArgstimeouts {
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
  timeouts: AwsIvschatLoggingConfigurationArgstimeouts;
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