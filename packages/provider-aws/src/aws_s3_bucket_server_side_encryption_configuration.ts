import { TerraformConfig, TerraformResource } from "tfs";
export interface ApplyServerSideEncryptionByDefault {
  kms_master_key_id?: string;
  sse_algorithm: string;
}
export interface Rule {
  bucket_key_enabled?: boolean;
  apply_server_side_encryption_by_default: ApplyServerSideEncryptionByDefault;
}
export interface AwsS3BucketServerSideEncryptionConfigurationArgs {
  bucket: string;
  expected_bucket_owner?: string;
  rule: Rule;
}
export class aws_s3_bucket_server_side_encryption_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketServerSideEncryptionConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_server_side_encryption_configuration");
  }
}