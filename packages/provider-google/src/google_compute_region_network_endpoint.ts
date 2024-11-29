import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeRegionNetworkEndpointArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeRegionNetworkEndpointArgs {
  fqdn?: string;
  ip_address?: string;
  port: number;
  region_network_endpoint_group: string;
  timeouts: GoogleComputeRegionNetworkEndpointArgsTimeouts;
}
export class google_compute_region_network_endpoint extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionNetworkEndpointArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_network_endpoint");
  }
}