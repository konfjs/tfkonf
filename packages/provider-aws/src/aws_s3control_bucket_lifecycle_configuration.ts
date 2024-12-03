import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsS3controlBucketLifecycleConfigurationArgsRuleAbortIncompleteMultipartUpload {
  days_after_initiation: number;
}
export interface AwsS3controlBucketLifecycleConfigurationArgsRuleExpiration {
  date?: string;
  days?: number;
  expired_object_delete_marker?: boolean;
}
export interface AwsS3controlBucketLifecycleConfigurationArgsRuleFilter {
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
}
export interface AwsS3controlBucketLifecycleConfigurationArgsRule {
  id: string;
  status?: string;
  abort_incomplete_multipart_upload: AwsS3controlBucketLifecycleConfigurationArgsRuleAbortIncompleteMultipartUpload;
  expiration: AwsS3controlBucketLifecycleConfigurationArgsRuleExpiration;
  filter: AwsS3controlBucketLifecycleConfigurationArgsRuleFilter;
}
export interface AwsS3controlBucketLifecycleConfigurationArgs {
  bucket: string;
  rule: AwsS3controlBucketLifecycleConfigurationArgsRule;
}
export class aws_s3control_bucket_lifecycle_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3controlBucketLifecycleConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3control_bucket_lifecycle_configuration");
  }
}