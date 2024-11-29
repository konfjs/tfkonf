import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleFolderArgstimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface GoogleFolderArgs {
  deletion_protection?: boolean;
  display_name: string;
  parent: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: GoogleFolderArgstimeouts;
}
export class google_folder extends TerraformResource {
  readonly create_time!: string;
  readonly folder_id!: string;
  readonly id?: string;
  readonly lifecycle_state!: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFolderArgs) {
    super(config, "resource", args, resourceName, "google_folder");
  }
}