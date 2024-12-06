import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeGlobalNetworkEndpointGroupArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeGlobalNetworkEndpointGroupArgs {
  default_port?: number;
  description?: string;
  name: string;
  network_endpoint_type: string;
  timeouts?: GoogleComputeGlobalNetworkEndpointGroupArgsTimeouts;
}

export class google_compute_global_network_endpoint_group extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeGlobalNetworkEndpointGroupArgs) {
    super(config, "resource", args, resourceName, "google_compute_global_network_endpoint_group");
  }
}
