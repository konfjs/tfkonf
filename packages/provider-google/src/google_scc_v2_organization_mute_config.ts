import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccV2OrganizationMuteConfigArgs {
  description?: string;
  filter: string;
  location?: string;
  mute_config_id: string;
  organization: string;
  type: string;
  timeouts: Timeouts;
}
export class google_scc_v2_organization_mute_config extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly most_recent_editor!: string;
  readonly name!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccV2OrganizationMuteConfigArgs) {
    super(config, "resource", args, resourceName, "google_scc_v2_organization_mute_config");
  }
}