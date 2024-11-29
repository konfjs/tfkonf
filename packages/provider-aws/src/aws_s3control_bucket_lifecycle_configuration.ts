import { TerraformConfig, TerraformResource } from "tfs";
export interface AbortIncompleteMultipartUpload {
  days_after_initiation: number;
}
export interface Expiration {
  date?: string;
  days?: number;
  expired_object_delete_marker?: boolean;
}
export interface Filter {
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
}
export interface Rule {
  id: string;
  status?: string;
  abort_incomplete_multipart_upload: AbortIncompleteMultipartUpload;
  expiration: Expiration;
  filter: Filter;
}
export interface AwsS3controlBucketLifecycleConfigurationArgs {
  bucket: string;
  rule: Rule;
}
export class aws_s3control_bucket_lifecycle_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3controlBucketLifecycleConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3control_bucket_lifecycle_configuration");
  }
}