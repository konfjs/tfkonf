import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsS3controlBucketLifecycleConfigurationArgsruleAbortIncompleteMultipartUpload {
  days_after_initiation: number;
}
export interface AwsS3controlBucketLifecycleConfigurationArgsruleexpiration {
  date?: string;
  days?: number;
  expired_object_delete_marker?: boolean;
}
export interface AwsS3controlBucketLifecycleConfigurationArgsrulefilter {
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
}
export interface AwsS3controlBucketLifecycleConfigurationArgsrule {
  id: string;
  status?: string;
  abort_incomplete_multipart_upload: AwsS3controlBucketLifecycleConfigurationArgsruleAbortIncompleteMultipartUpload;
  expiration: AwsS3controlBucketLifecycleConfigurationArgsruleexpiration;
  filter: AwsS3controlBucketLifecycleConfigurationArgsrulefilter;
}
export interface AwsS3controlBucketLifecycleConfigurationArgs {
  bucket: string;
  rule: AwsS3controlBucketLifecycleConfigurationArgsrule;
}
export class aws_s3control_bucket_lifecycle_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3controlBucketLifecycleConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3control_bucket_lifecycle_configuration");
  }
}