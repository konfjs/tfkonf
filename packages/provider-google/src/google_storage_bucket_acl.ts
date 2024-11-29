import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleStorageBucketAclArgs {
  bucket: string;
  default_acl?: string;
  predefined_acl?: string;
}
export class google_storage_bucket_acl extends TerraformResource {
  readonly id?: string;
  readonly role_entity?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageBucketAclArgs) {
    super(config, "resource", args, resourceName, "google_storage_bucket_acl");
  }
}