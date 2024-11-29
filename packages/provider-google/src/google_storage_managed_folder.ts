import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleStorageManagedFolderArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleStorageManagedFolderArgs {
  bucket: string;
  force_destroy?: boolean;
  name: string;
  timeouts: GoogleStorageManagedFolderArgsTimeouts;
}
export class google_storage_managed_folder extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly metageneration!: string;
  readonly self_link!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageManagedFolderArgs) {
    super(config, "resource", args, resourceName, "google_storage_managed_folder");
  }
}