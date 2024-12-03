import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeGlobalNetworkEndpointArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeGlobalNetworkEndpointArgs {
  fqdn?: string;
  global_network_endpoint_group: string;
  ip_address?: string;
  port: number;
  timeouts?: GoogleComputeGlobalNetworkEndpointArgsTimeouts;
}
export class google_compute_global_network_endpoint extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeGlobalNetworkEndpointArgs) {
    super(config, "resource", args, resourceName, "google_compute_global_network_endpoint");
  }
}