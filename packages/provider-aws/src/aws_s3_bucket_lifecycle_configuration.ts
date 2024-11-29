import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsS3BucketLifecycleConfigurationArgsruleAbortIncompleteMultipartUpload {
  days_after_initiation?: number;
}
export interface AwsS3BucketLifecycleConfigurationArgsruleexpiration {
  date?: string;
  days?: number;
}
export interface AwsS3BucketLifecycleConfigurationArgsrulefilterand {
  object_size_greater_than?: number;
  object_size_less_than?: number;
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
}
export interface AwsS3BucketLifecycleConfigurationArgsrulefiltertag {
  key: string;
  value: string;
}
export interface AwsS3BucketLifecycleConfigurationArgsrulefilter {
  object_size_greater_than?: string;
  object_size_less_than?: string;
  prefix?: string;
  and: AwsS3BucketLifecycleConfigurationArgsrulefilterand;
  tag: AwsS3BucketLifecycleConfigurationArgsrulefiltertag;
}
export interface AwsS3BucketLifecycleConfigurationArgsruleNoncurrentVersionExpiration {
  newer_noncurrent_versions?: string;
  noncurrent_days?: number;
}
export interface AwsS3BucketLifecycleConfigurationArgsruleNoncurrentVersionTransition {
  newer_noncurrent_versions?: string;
  noncurrent_days?: number;
  storage_class: string;
}
export interface AwsS3BucketLifecycleConfigurationArgsruletransition {
  date?: string;
  days?: number;
  storage_class: string;
}
export interface AwsS3BucketLifecycleConfigurationArgsrule {
  id: string;
  prefix?: string;
  status: string;
  abort_incomplete_multipart_upload: AwsS3BucketLifecycleConfigurationArgsruleAbortIncompleteMultipartUpload;
  expiration: AwsS3BucketLifecycleConfigurationArgsruleexpiration;
  filter: AwsS3BucketLifecycleConfigurationArgsrulefilter;
  noncurrent_version_expiration: AwsS3BucketLifecycleConfigurationArgsruleNoncurrentVersionExpiration;
  noncurrent_version_transition: AwsS3BucketLifecycleConfigurationArgsruleNoncurrentVersionTransition;
  transition: AwsS3BucketLifecycleConfigurationArgsruletransition;
}
export interface AwsS3BucketLifecycleConfigurationArgstimeouts {
  create?: string;
  update?: string;
}
export interface AwsS3BucketLifecycleConfigurationArgs {
  bucket: string;
  expected_bucket_owner?: string;
  rule: AwsS3BucketLifecycleConfigurationArgsrule;
  timeouts: AwsS3BucketLifecycleConfigurationArgstimeouts;
}
export class aws_s3_bucket_lifecycle_configuration extends TerraformResource {
  readonly id?: string;
  readonly transition_default_minimum_object_size?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketLifecycleConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_lifecycle_configuration");
  }
}