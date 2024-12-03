import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleStorageBucketAccessControlArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleStorageBucketAccessControlArgs {
  bucket: string;
  entity: string;
  role?: string;
  timeouts?: GoogleStorageBucketAccessControlArgsTimeouts;
}
export class google_storage_bucket_access_control extends TerraformResource {
  readonly domain!: string;
  readonly email!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageBucketAccessControlArgs) {
    super(config, "resource", args, resourceName, "google_storage_bucket_access_control");
  }
}