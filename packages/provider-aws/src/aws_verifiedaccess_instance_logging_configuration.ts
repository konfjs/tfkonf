import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVerifiedaccessInstanceLoggingConfigurationArgsAccessLogsCloudwatchLogs {
  enabled: boolean;
  log_group?: string;
}
export interface AwsVerifiedaccessInstanceLoggingConfigurationArgsAccessLogsKinesisDataFirehose {
  delivery_stream?: string;
  enabled: boolean;
}
export interface AwsVerifiedaccessInstanceLoggingConfigurationArgsAccessLogsS3 {
  bucket_name?: string;
  enabled: boolean;
  prefix?: string;
}
export interface AwsVerifiedaccessInstanceLoggingConfigurationArgsAccessLogs {
  cloudwatch_logs: AwsVerifiedaccessInstanceLoggingConfigurationArgsAccessLogsCloudwatchLogs;
  kinesis_data_firehose: AwsVerifiedaccessInstanceLoggingConfigurationArgsAccessLogsKinesisDataFirehose;
  s3: AwsVerifiedaccessInstanceLoggingConfigurationArgsAccessLogsS3;
}
export interface AwsVerifiedaccessInstanceLoggingConfigurationArgs {
  verifiedaccess_instance_id: string;
  access_logs: AwsVerifiedaccessInstanceLoggingConfigurationArgsAccessLogs;
}
export class aws_verifiedaccess_instance_logging_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVerifiedaccessInstanceLoggingConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_verifiedaccess_instance_logging_configuration");
  }
}