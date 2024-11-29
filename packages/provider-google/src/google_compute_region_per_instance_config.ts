import { TerraformConfig, TerraformResource } from "tfs";
export interface Disk {
  delete_rule?: string;
  device_name: string;
  mode?: string;
  source: string;
}
export interface IpAddress {
  address?: string;
}
export interface ExternalIp {
  auto_delete?: string;
  interface_name: string;
  ip_address: IpAddress;
}
export interface IpAddress {
  address?: string;
}
export interface InternalIp {
  auto_delete?: string;
  interface_name: string;
  ip_address: IpAddress;
}
export interface PreservedState {
  metadata?: {
    [key: string]: string;
  };
  disk: Disk;
  external_ip: ExternalIp;
  internal_ip: InternalIp;
}
export interface Timeouts {
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
  preserved_state: PreservedState;
  timeouts: Timeouts;
}
export class google_compute_region_per_instance_config extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionPerInstanceConfigArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_per_instance_config");
  }
}