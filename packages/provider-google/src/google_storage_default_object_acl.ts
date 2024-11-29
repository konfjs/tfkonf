import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleStorageDefaultObjectAclArgs {
  bucket: string;
}
export class google_storage_default_object_acl extends TerraformResource {
  readonly id?: string;
  readonly role_entity?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageDefaultObjectAclArgs) {
    super(config, "resource", args, resourceName, "google_storage_default_object_acl");
  }
}