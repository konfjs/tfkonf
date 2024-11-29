import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeNetworkPeeringArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeNetworkPeeringArgs {
  export_custom_routes?: boolean;
  export_subnet_routes_with_public_ip?: boolean;
  import_custom_routes?: boolean;
  import_subnet_routes_with_public_ip?: boolean;
  name: string;
  network: string;
  peer_network: string;
  stack_type?: string;
  timeouts: GoogleComputeNetworkPeeringArgstimeouts;
}
export class google_compute_network_peering extends TerraformResource {
  readonly id?: string;
  readonly state!: string;
  readonly state_details!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeNetworkPeeringArgs) {
    super(config, "resource", args, resourceName, "google_compute_network_peering");
  }
}