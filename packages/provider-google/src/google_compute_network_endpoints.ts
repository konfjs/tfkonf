import { TerraformConfig, TerraformResource } from "tfs";
export interface NetworkEndpoints {
  instance?: string;
  ip_address: string;
  port?: number;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeNetworkEndpointsArgs {
  network_endpoint_group: string;
  network_endpoints: NetworkEndpoints;
  timeouts: Timeouts;
}
export class google_compute_network_endpoints extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeNetworkEndpointsArgs) {
    super(config, "resource", args, resourceName, "google_compute_network_endpoints");
  }
}