import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeNetworkEndpointGroupArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeNetworkEndpointGroupArgs {
  default_port?: number;
  description?: string;
  name: string;
  network: string;
  network_endpoint_type?: string;
  subnetwork?: string;
  timeouts: GoogleComputeNetworkEndpointGroupArgsTimeouts;
}
export class google_compute_network_endpoint_group extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly size!: number;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeNetworkEndpointGroupArgs) {
    super(config, "resource", args, resourceName, "google_compute_network_endpoint_group");
  }
}