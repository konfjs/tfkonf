import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeNetworkEndpointsArgsNetworkEndpoints {
  instance?: string;
  ip_address: string;
  port?: number;
}
export interface GoogleComputeNetworkEndpointsArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeNetworkEndpointsArgs {
  network_endpoint_group: string;
  network_endpoints: GoogleComputeNetworkEndpointsArgsNetworkEndpoints;
  timeouts: GoogleComputeNetworkEndpointsArgstimeouts;
}
export class google_compute_network_endpoints extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeNetworkEndpointsArgs) {
    super(config, "resource", args, resourceName, "google_compute_network_endpoints");
  }
}