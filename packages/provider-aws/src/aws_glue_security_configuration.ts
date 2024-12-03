import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsGlueSecurityConfigurationArgsEncryptionConfigurationCloudwatchEncryption {
  cloudwatch_encryption_mode?: string;
  kms_key_arn?: string;
}
export interface AwsGlueSecurityConfigurationArgsEncryptionConfigurationJobBookmarksEncryption {
  job_bookmarks_encryption_mode?: string;
  kms_key_arn?: string;
}
export interface AwsGlueSecurityConfigurationArgsEncryptionConfigurationS3Encryption {
  kms_key_arn?: string;
  s3_encryption_mode?: string;
}
export interface AwsGlueSecurityConfigurationArgsEncryptionConfiguration {
  cloudwatch_encryption: AwsGlueSecurityConfigurationArgsEncryptionConfigurationCloudwatchEncryption;
  job_bookmarks_encryption: AwsGlueSecurityConfigurationArgsEncryptionConfigurationJobBookmarksEncryption;
  s3_encryption: AwsGlueSecurityConfigurationArgsEncryptionConfigurationS3Encryption;
}
export interface AwsGlueSecurityConfigurationArgs {
  name: string;
  encryption_configuration: AwsGlueSecurityConfigurationArgsEncryptionConfiguration;
}
export class aws_glue_security_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueSecurityConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_glue_security_configuration");
  }
}