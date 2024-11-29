import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNetworkConnectivityHubArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkConnectivityHubArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  timeouts: GoogleNetworkConnectivityHubArgsTimeouts;
}
export class google_network_connectivity_hub extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly export_psc?: boolean;
  readonly id?: string;
  readonly name?: string;
  readonly project?: string;
  readonly routing_vpcs!: any[];
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly unique_id!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkConnectivityHubArgs) {
    super(config, "resource", args, resourceName, "google_network_connectivity_hub");
  }
}