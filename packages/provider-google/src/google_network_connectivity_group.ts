import { TerraformConfig, TerraformResource } from "tfs";
export interface AutoAccept {
  auto_accept_projects: string[];
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkConnectivityGroupArgs {
  description?: string;
  hub: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  auto_accept: AutoAccept;
  timeouts: Timeouts;
}
export class google_network_connectivity_group extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly route_table!: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkConnectivityGroupArgs) {
    super(config, "resource", args, resourceName, "google_network_connectivity_group");
  }
}