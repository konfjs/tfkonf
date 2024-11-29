import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeRouterInterfaceArgs {
  interconnect_attachment?: string;
  name: string;
  private_ip_address?: string;
  router: string;
  subnetwork?: string;
  vpn_tunnel?: string;
  timeouts: Timeouts;
}
export class google_compute_router_interface extends TerraformResource {
  readonly id?: string;
  readonly ip_range?: string;
  readonly ip_version?: string;
  readonly project?: string;
  readonly redundant_interface?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRouterInterfaceArgs) {
    super(config, "resource", args, resourceName, "google_compute_router_interface");
  }
}