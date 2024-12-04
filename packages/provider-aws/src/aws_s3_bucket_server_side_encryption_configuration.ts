import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketServerSideEncryptionConfigurationArgsRuleApplyServerSideEncryptionByDefault {
  kms_master_key_id?: string;
  sse_algorithm: string;
}

export interface AwsS3BucketServerSideEncryptionConfigurationArgsRule {
  bucket_key_enabled?: boolean;
  apply_server_side_encryption_by_default: AwsS3BucketServerSideEncryptionConfigurationArgsRuleApplyServerSideEncryptionByDefault;
}

export interface AwsS3BucketServerSideEncryptionConfigurationArgs {
  bucket: string;
  expected_bucket_owner?: string;
  rule: AwsS3BucketServerSideEncryptionConfigurationArgsRule;
}

export class aws_s3_bucket_server_side_encryption_configuration extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketServerSideEncryptionConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_server_side_encryption_configuration");
  }
}
