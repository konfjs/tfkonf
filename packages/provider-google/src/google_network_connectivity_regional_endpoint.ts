import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkConnectivityRegionalEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkConnectivityRegionalEndpointArgs {
  access_type: string;
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  target_google_api: string;
  timeouts?: GoogleNetworkConnectivityRegionalEndpointArgsTimeouts;
}

export class google_network_connectivity_regional_endpoint extends TerraformResource {
  readonly address?: string;
  readonly create_time!: string;
  readonly effective_labels!: { [key: string]: string };
  readonly id?: string;
  readonly network?: string;
  readonly project?: string;
  readonly psc_forwarding_rule!: string;
  readonly subnetwork?: string;
  readonly terraform_labels!: { [key: string]: string };
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkConnectivityRegionalEndpointArgs) {
    super(config, "resource", args, resourceName, "google_network_connectivity_regional_endpoint");
  }
}
