import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkConnectivityGroupArgsAutoAccept {
  auto_accept_projects: string[];
}

export interface GoogleNetworkConnectivityGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkConnectivityGroupArgs {
  description?: string;
  hub: string;
  labels?: { [key: string]: string };
  name: string;
  auto_accept: GoogleNetworkConnectivityGroupArgsAutoAccept;
  timeouts?: GoogleNetworkConnectivityGroupArgsTimeouts;
}

export class google_network_connectivity_group extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: { [key: string]: string };
  readonly id?: string;
  readonly project?: string;
  readonly route_table!: string;
  readonly state!: string;
  readonly terraform_labels!: { [key: string]: string };
  readonly uid!: string;
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkConnectivityGroupArgs) {
    super(config, "resource", args, resourceName, "google_network_connectivity_group");
  }
}
