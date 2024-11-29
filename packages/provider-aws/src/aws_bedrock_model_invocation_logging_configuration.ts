import { TerraformConfig, TerraformResource } from "tfs";
export interface LargeDataDeliveryS3Config {
  bucket_name?: string;
  key_prefix?: string;
}
export interface CloudwatchConfig {
  log_group_name?: string;
  role_arn?: string;
  large_data_delivery_s3_config: LargeDataDeliveryS3Config;
}
export interface S3Config {
  bucket_name?: string;
  key_prefix?: string;
}
export interface LoggingConfig {
  embedding_data_delivery_enabled: boolean;
  image_data_delivery_enabled: boolean;
  text_data_delivery_enabled: boolean;
  cloudwatch_config: CloudwatchConfig;
  s3_config: S3Config;
}
export interface AwsBedrockModelInvocationLoggingConfigurationArgs {
  logging_config: LoggingConfig;
}
export class aws_bedrock_model_invocation_logging_configuration extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsBedrockModelInvocationLoggingConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_bedrock_model_invocation_logging_configuration");
  }
}