import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeRegionPerInstanceConfigArgsPreservedStatedisk {
  delete_rule?: string;
  device_name: string;
  mode?: string;
  source: string;
}
export interface GoogleComputeRegionPerInstanceConfigArgsPreservedStateExternalIpIpAddress {
  address?: string;
}
export interface GoogleComputeRegionPerInstanceConfigArgsPreservedStateExternalIp {
  auto_delete?: string;
  interface_name: string;
  ip_address: GoogleComputeRegionPerInstanceConfigArgsPreservedStateExternalIpIpAddress;
}
export interface GoogleComputeRegionPerInstanceConfigArgsPreservedStateInternalIpIpAddress {
  address?: string;
}
export interface GoogleComputeRegionPerInstanceConfigArgsPreservedStateInternalIp {
  auto_delete?: string;
  interface_name: string;
  ip_address: GoogleComputeRegionPerInstanceConfigArgsPreservedStateInternalIpIpAddress;
}
export interface GoogleComputeRegionPerInstanceConfigArgsPreservedState {
  metadata?: {
    [key: string]: string;
  };
  disk: GoogleComputeRegionPerInstanceConfigArgsPreservedStatedisk;
  external_ip: GoogleComputeRegionPerInstanceConfigArgsPreservedStateExternalIp;
  internal_ip: GoogleComputeRegionPerInstanceConfigArgsPreservedStateInternalIp;
}
export interface GoogleComputeRegionPerInstanceConfigArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeRegionPerInstanceConfigArgs {
  minimal_action?: string;
  most_disruptive_allowed_action?: string;
  name: string;
  region_instance_group_manager: string;
  remove_instance_on_destroy?: boolean;
  remove_instance_state_on_destroy?: boolean;
  preserved_state: GoogleComputeRegionPerInstanceConfigArgsPreservedState;
  timeouts: GoogleComputeRegionPerInstanceConfigArgstimeouts;
}
export class google_compute_region_per_instance_config extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionPerInstanceConfigArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_per_instance_config");
  }
}