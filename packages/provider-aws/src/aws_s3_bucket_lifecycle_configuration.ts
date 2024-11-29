import { TerraformConfig, TerraformResource } from "tfs";
export interface AbortIncompleteMultipartUpload {
  days_after_initiation?: number;
}
export interface Expiration {
  date?: string;
  days?: number;
}
export interface And {
  object_size_greater_than?: number;
  object_size_less_than?: number;
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
}
export interface Tag {
  key: string;
  value: string;
}
export interface Filter {
  object_size_greater_than?: string;
  object_size_less_than?: string;
  prefix?: string;
  and: And;
  tag: Tag;
}
export interface NoncurrentVersionExpiration {
  newer_noncurrent_versions?: string;
  noncurrent_days?: number;
}
export interface NoncurrentVersionTransition {
  newer_noncurrent_versions?: string;
  noncurrent_days?: number;
  storage_class: string;
}
export interface Transition {
  date?: string;
  days?: number;
  storage_class: string;
}
export interface Rule {
  id: string;
  prefix?: string;
  status: string;
  abort_incomplete_multipart_upload: AbortIncompleteMultipartUpload;
  expiration: Expiration;
  filter: Filter;
  noncurrent_version_expiration: NoncurrentVersionExpiration;
  noncurrent_version_transition: NoncurrentVersionTransition;
  transition: Transition;
}
export interface Timeouts {
  create?: string;
  update?: string;
}
export interface AwsS3BucketLifecycleConfigurationArgs {
  bucket: string;
  expected_bucket_owner?: string;
  rule: Rule;
  timeouts: Timeouts;
}
export class aws_s3_bucket_lifecycle_configuration extends TerraformResource {
  readonly id?: string;
  readonly transition_default_minimum_object_size?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketLifecycleConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_lifecycle_configuration");
  }
}