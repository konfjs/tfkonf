import { TerraformConfig, TerraformResource } from "tfs";
export interface CloudwatchLogs {
  enabled: boolean;
  log_group?: string;
}
export interface KinesisDataFirehose {
  delivery_stream?: string;
  enabled: boolean;
}
export interface S3 {
  bucket_name?: string;
  enabled: boolean;
  prefix?: string;
}
export interface AccessLogs {
  cloudwatch_logs: CloudwatchLogs;
  kinesis_data_firehose: KinesisDataFirehose;
  s3: S3;
}
export interface AwsVerifiedaccessInstanceLoggingConfigurationArgs {
  verifiedaccess_instance_id: string;
  access_logs: AccessLogs;
}
export class aws_verifiedaccess_instance_logging_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVerifiedaccessInstanceLoggingConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_verifiedaccess_instance_logging_configuration");
  }
}