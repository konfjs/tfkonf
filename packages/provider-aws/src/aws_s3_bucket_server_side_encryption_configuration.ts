import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsS3BucketServerSideEncryptionConfigurationArgsruleApplyServerSideEncryptionByDefault {
  kms_master_key_id?: string;
  sse_algorithm: string;
}
export interface AwsS3BucketServerSideEncryptionConfigurationArgsrule {
  bucket_key_enabled?: boolean;
  apply_server_side_encryption_by_default: AwsS3BucketServerSideEncryptionConfigurationArgsruleApplyServerSideEncryptionByDefault;
}
export interface AwsS3BucketServerSideEncryptionConfigurationArgs {
  bucket: string;
  expected_bucket_owner?: string;
  rule: AwsS3BucketServerSideEncryptionConfigurationArgsrule;
}
export class aws_s3_bucket_server_side_encryption_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketServerSideEncryptionConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_server_side_encryption_configuration");
  }
}