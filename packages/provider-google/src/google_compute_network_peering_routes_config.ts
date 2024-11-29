import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeNetworkPeeringRoutesConfigArgs {
  export_custom_routes: boolean;
  import_custom_routes: boolean;
  network: string;
  peering: string;
  timeouts: Timeouts;
}
export class google_compute_network_peering_routes_config extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeNetworkPeeringRoutesConfigArgs) {
    super(config, "resource", args, resourceName, "google_compute_network_peering_routes_config");
  }
}