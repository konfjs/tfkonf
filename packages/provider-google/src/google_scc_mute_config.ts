import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccMuteConfigArgs {
  description?: string;
  filter: string;
  mute_config_id: string;
  parent: string;
  timeouts: Timeouts;
}
export class google_scc_mute_config extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly most_recent_editor!: string;
  readonly name!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccMuteConfigArgs) {
    super(config, "resource", args, resourceName, "google_scc_mute_config");
  }
}