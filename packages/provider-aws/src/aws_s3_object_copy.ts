import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsS3ObjectCopyArgsGrant {
  email?: string;
  id?: string;
  permissions: string[];
  type: string;
  uri?: string;
}
export interface AwsS3ObjectCopyArgs {
  bucket: string;
  checksum_algorithm?: string;
  copy_if_match?: string;
  copy_if_modified_since?: string;
  copy_if_none_match?: string;
  copy_if_unmodified_since?: string;
  customer_key?: string;
  expected_bucket_owner?: string;
  expected_source_bucket_owner?: string;
  expires?: string;
  force_destroy?: boolean;
  key: string;
  metadata_directive?: string;
  request_payer?: string;
  source: string;
  source_customer_algorithm?: string;
  source_customer_key?: string;
  source_customer_key_md5?: string;
  tagging_directive?: string;
  tags?: {
    [key: string]: string;
  };
  grant: AwsS3ObjectCopyArgsGrant;
}
export class aws_s3_object_copy extends TerraformResource {
  readonly acl?: string;
  readonly arn!: string;
  readonly bucket_key_enabled?: boolean;
  readonly cache_control?: string;
  readonly checksum_crc32!: string;
  readonly checksum_crc32c!: string;
  readonly checksum_sha1!: string;
  readonly checksum_sha256!: string;
  readonly content_disposition?: string;
  readonly content_encoding?: string;
  readonly content_language?: string;
  readonly content_type?: string;
  readonly customer_algorithm?: string;
  readonly customer_key_md5?: string;
  readonly etag!: string;
  readonly expiration!: string;
  readonly id?: string;
  readonly kms_encryption_context?: string;
  readonly kms_key_id?: string;
  readonly last_modified!: string;
  readonly metadata?: {
    [key: string]: string;
  };
  readonly object_lock_legal_hold_status?: string;
  readonly object_lock_mode?: string;
  readonly object_lock_retain_until_date?: string;
  readonly request_charged!: boolean;
  readonly server_side_encryption?: string;
  readonly source_version_id!: string;
  readonly storage_class?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version_id!: string;
  readonly website_redirect?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3ObjectCopyArgs) {
    super(config, "resource", args, resourceName, "aws_s3_object_copy");
  }
}