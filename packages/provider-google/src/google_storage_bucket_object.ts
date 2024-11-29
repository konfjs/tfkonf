import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleStorageBucketObjectArgsCustomerEncryption {
  encryption_algorithm?: string;
  encryption_key: string;
}
export interface GoogleStorageBucketObjectArgsRetention {
  mode: string;
  retain_until_time: string;
}
export interface GoogleStorageBucketObjectArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleStorageBucketObjectArgs {
  bucket: string;
  cache_control?: string;
  content_disposition?: string;
  content_encoding?: string;
  content_language?: string;
  detect_md5hash?: string;
  event_based_hold?: boolean;
  metadata?: {
    [key: string]: string;
  };
  name: string;
  source?: string;
  temporary_hold?: boolean;
  customer_encryption: GoogleStorageBucketObjectArgsCustomerEncryption;
  retention: GoogleStorageBucketObjectArgsRetention;
  timeouts?: GoogleStorageBucketObjectArgsTimeouts;
}
export class google_storage_bucket_object extends TerraformResource {
  readonly content?: string;
  readonly content_type?: string;
  readonly crc32c!: string;
  readonly generation!: number;
  readonly id?: string;
  readonly kms_key_name?: string;
  readonly md5hash!: string;
  readonly media_link!: string;
  readonly output_name!: string;
  readonly self_link!: string;
  readonly storage_class?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageBucketObjectArgs) {
    super(config, "resource", args, resourceName, "google_storage_bucket_object");
  }
}