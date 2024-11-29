import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSccV2ProjectMuteConfigArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccV2ProjectMuteConfigArgs {
  description?: string;
  filter: string;
  location?: string;
  mute_config_id: string;
  type: string;
  timeouts: GoogleSccV2ProjectMuteConfigArgstimeouts;
}
export class google_scc_v2_project_mute_config extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly most_recent_editor!: string;
  readonly name!: string;
  readonly project?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccV2ProjectMuteConfigArgs) {
    super(config, "resource", args, resourceName, "google_scc_v2_project_mute_config");
  }
}