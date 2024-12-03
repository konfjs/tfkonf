import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleStorageObjectAclArgs {
  bucket: string;
  object: string;
  predefined_acl?: string;
}
export class google_storage_object_acl extends TerraformResource {
  readonly id?: string;
  readonly role_entity?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageObjectAclArgs) {
    super(config, "resource", args, resourceName, "google_storage_object_acl");
  }
}