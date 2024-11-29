import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsS3BucketObjectArgs {
  acl?: string;
  bucket: string;
  cache_control?: string;
  content?: string;
  content_base64?: string;
  content_disposition?: string;
  content_encoding?: string;
  content_language?: string;
  force_destroy?: boolean;
  key: string;
  metadata?: {
    [key: string]: string;
  };
  object_lock_legal_hold_status?: string;
  object_lock_mode?: string;
  object_lock_retain_until_date?: string;
  source?: string;
  source_hash?: string;
  tags?: {
    [key: string]: string;
  };
  website_redirect?: string;
}
export class aws_s3_bucket_object extends TerraformResource {
  readonly arn!: string;
  readonly bucket_key_enabled?: boolean;
  readonly content_type?: string;
  readonly etag?: string;
  readonly id?: string;
  readonly kms_key_id?: string;
  readonly server_side_encryption?: string;
  readonly storage_class?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketObjectArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_object");
  }
}