import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3ObjectArgsOverrideProviderDefaultTags {
  tags?: { [key: string]: string };
}

export interface AwsS3ObjectArgsOverrideProvider {
  default_tags: AwsS3ObjectArgsOverrideProviderDefaultTags;
}

export interface AwsS3ObjectArgs {
  bucket: string;
  cache_control?: string;
  checksum_algorithm?: string;
  content?: string;
  content_base64?: string;
  content_disposition?: string;
  content_encoding?: string;
  content_language?: string;
  force_destroy?: boolean;
  key: string;
  metadata?: { [key: string]: string };
  object_lock_legal_hold_status?: string;
  object_lock_mode?: string;
  object_lock_retain_until_date?: string;
  source?: string;
  source_hash?: string;
  tags?: { [key: string]: string };
  website_redirect?: string;
  override_provider: AwsS3ObjectArgsOverrideProvider;
}

export class aws_s3_object extends TerraformResource {
  readonly acl?: string;
  readonly arn!: string;
  readonly bucket_key_enabled?: boolean;
  readonly checksum_crc32!: string;
  readonly checksum_crc32c!: string;
  readonly checksum_sha1!: string;
  readonly checksum_sha256!: string;
  readonly content_type?: string;
  readonly etag?: string;
  readonly id?: string;
  readonly kms_key_id?: string;
  readonly server_side_encryption?: string;
  readonly storage_class?: string;
  readonly tags_all?: { [key: string]: string };
  readonly version_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsS3ObjectArgs) {
    super(config, "resource", args, resourceName, "aws_s3_object");
  }
}
