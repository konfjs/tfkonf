import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsBedrockModelInvocationLoggingConfigurationArgsLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config {
  bucket_name?: string;
  key_prefix?: string;
}
export interface AwsBedrockModelInvocationLoggingConfigurationArgsLoggingConfigCloudwatchConfig {
  log_group_name?: string;
  role_arn?: string;
  large_data_delivery_s3_config: AwsBedrockModelInvocationLoggingConfigurationArgsLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config;
}
export interface AwsBedrockModelInvocationLoggingConfigurationArgsLoggingConfigS3Config {
  bucket_name?: string;
  key_prefix?: string;
}
export interface AwsBedrockModelInvocationLoggingConfigurationArgsLoggingConfig {
  embedding_data_delivery_enabled: boolean;
  image_data_delivery_enabled: boolean;
  text_data_delivery_enabled: boolean;
  cloudwatch_config: AwsBedrockModelInvocationLoggingConfigurationArgsLoggingConfigCloudwatchConfig;
  s3_config: AwsBedrockModelInvocationLoggingConfigurationArgsLoggingConfigS3Config;
}
export interface AwsBedrockModelInvocationLoggingConfigurationArgs {
  logging_config: AwsBedrockModelInvocationLoggingConfigurationArgsLoggingConfig;
}
export class aws_bedrock_model_invocation_logging_configuration extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsBedrockModelInvocationLoggingConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_bedrock_model_invocation_logging_configuration");
  }
}