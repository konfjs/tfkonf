import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleStorageDefaultObjectAccessControlArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleStorageDefaultObjectAccessControlArgs {
  bucket: string;
  entity: string;
  object?: string;
  role: string;
  timeouts: GoogleStorageDefaultObjectAccessControlArgsTimeouts;
}
export class google_storage_default_object_access_control extends TerraformResource {
  readonly domain!: string;
  readonly email!: string;
  readonly entity_id!: string;
  readonly generation!: number;
  readonly id?: string;
  readonly project_team!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageDefaultObjectAccessControlArgs) {
    super(config, "resource", args, resourceName, "google_storage_default_object_access_control");
  }
}