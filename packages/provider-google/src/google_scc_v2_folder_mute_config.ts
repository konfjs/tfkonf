import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccV2FolderMuteConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccV2FolderMuteConfigArgs {
  description?: string;
  filter: string;
  folder: string;
  location?: string;
  mute_config_id: string;
  type: string;
  timeouts?: GoogleSccV2FolderMuteConfigArgsTimeouts;
}

export class google_scc_v2_folder_mute_config extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly most_recent_editor!: string;
  readonly name!: string;
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccV2FolderMuteConfigArgs) {
    super(config, "resource", args, resourceName, "google_scc_v2_folder_mute_config");
  }
}
