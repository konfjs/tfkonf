import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageObjectAccessControlArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleStorageObjectAccessControlArgs {
  bucket: string;
  entity: string;
  object: string;
  role: string;
  timeouts?: GoogleStorageObjectAccessControlArgsTimeouts;
}

export class google_storage_object_access_control extends TerraformResource {
  readonly domain!: string;
  readonly email!: string;
  readonly entity_id!: string;
  readonly generation!: number;
  readonly id?: string;
  readonly project_team!: any[];

  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageObjectAccessControlArgs) {
    super(config, "resource", args, resourceName, "google_storage_object_access_control");
  }
}
