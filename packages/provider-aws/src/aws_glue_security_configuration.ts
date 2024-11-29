import { TerraformConfig, TerraformResource } from "tfs";
export interface CloudwatchEncryption {
  cloudwatch_encryption_mode?: string;
  kms_key_arn?: string;
}
export interface JobBookmarksEncryption {
  job_bookmarks_encryption_mode?: string;
  kms_key_arn?: string;
}
export interface S3Encryption {
  kms_key_arn?: string;
  s3_encryption_mode?: string;
}
export interface EncryptionConfiguration {
  cloudwatch_encryption: CloudwatchEncryption;
  job_bookmarks_encryption: JobBookmarksEncryption;
  s3_encryption: S3Encryption;
}
export interface AwsGlueSecurityConfigurationArgs {
  name: string;
  encryption_configuration: EncryptionConfiguration;
}
export class aws_glue_security_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueSecurityConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_glue_security_configuration");
  }
}