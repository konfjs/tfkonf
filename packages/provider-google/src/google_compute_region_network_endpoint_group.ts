import { TerraformConfig, TerraformResource } from "tfs";
export interface AppEngine {
  service?: string;
  url_mask?: string;
  version?: string;
}
export interface CloudFunction {
  function?: string;
  url_mask?: string;
}
export interface CloudRun {
  service?: string;
  tag?: string;
  url_mask?: string;
}
export interface Timeouts {
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
  app_engine: AppEngine;
  cloud_function: CloudFunction;
  cloud_run: CloudRun;
  timeouts: Timeouts;
}
export class google_compute_region_network_endpoint_group extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionNetworkEndpointGroupArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_network_endpoint_group");
  }
}