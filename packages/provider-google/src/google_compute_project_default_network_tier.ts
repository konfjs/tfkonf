import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeProjectDefaultNetworkTierArgsTimeouts {
  create?: string;
}

export interface GoogleComputeProjectDefaultNetworkTierArgs {
  network_tier: string;
  timeouts?: GoogleComputeProjectDefaultNetworkTierArgsTimeouts;
}

export class google_compute_project_default_network_tier extends TerraformResource {
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeProjectDefaultNetworkTierArgs) {
    super(config, "resource", args, resourceName, "google_compute_project_default_network_tier");
  }
}
