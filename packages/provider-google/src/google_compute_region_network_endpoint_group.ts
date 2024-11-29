import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeRegionNetworkEndpointGroupArgsAppEngine {
  service?: string;
  url_mask?: string;
  version?: string;
}
export interface GoogleComputeRegionNetworkEndpointGroupArgsCloudFunction {
  function?: string;
  url_mask?: string;
}
export interface GoogleComputeRegionNetworkEndpointGroupArgsCloudRun {
  service?: string;
  tag?: string;
  url_mask?: string;
}
export interface GoogleComputeRegionNetworkEndpointGroupArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeRegionNetworkEndpointGroupArgs {
  description?: string;
  name: string;
  network?: string;
  network_endpoint_type?: string;
  psc_target_service?: string;
  region: string;
  subnetwork?: string;
  app_engine: GoogleComputeRegionNetworkEndpointGroupArgsAppEngine;
  cloud_function: GoogleComputeRegionNetworkEndpointGroupArgsCloudFunction;
  cloud_run: GoogleComputeRegionNetworkEndpointGroupArgsCloudRun;
  timeouts: GoogleComputeRegionNetworkEndpointGroupArgsTimeouts;
}
export class google_compute_region_network_endpoint_group extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionNetworkEndpointGroupArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_network_endpoint_group");
  }
}