import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputePerInstanceConfigArgsPreservedStateDisk {
  delete_rule?: string;
  device_name: string;
  mode?: string;
  source: string;
}

export interface GoogleComputePerInstanceConfigArgsPreservedStateExternalIpIpAddress {
  address?: string;
}

export interface GoogleComputePerInstanceConfigArgsPreservedStateExternalIp {
  auto_delete?: string;
  interface_name: string;
  ip_address: GoogleComputePerInstanceConfigArgsPreservedStateExternalIpIpAddress;
}

export interface GoogleComputePerInstanceConfigArgsPreservedStateInternalIpIpAddress {
  address?: string;
}

export interface GoogleComputePerInstanceConfigArgsPreservedStateInternalIp {
  auto_delete?: string;
  interface_name: string;
  ip_address: GoogleComputePerInstanceConfigArgsPreservedStateInternalIpIpAddress;
}

export interface GoogleComputePerInstanceConfigArgsPreservedState {
  metadata?: { [key: string]: string };
  disk: GoogleComputePerInstanceConfigArgsPreservedStateDisk;
  external_ip: GoogleComputePerInstanceConfigArgsPreservedStateExternalIp;
  internal_ip: GoogleComputePerInstanceConfigArgsPreservedStateInternalIp;
}

export interface GoogleComputePerInstanceConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputePerInstanceConfigArgs {
  instance_group_manager: string;
  minimal_action?: string;
  most_disruptive_allowed_action?: string;
  name: string;
  remove_instance_on_destroy?: boolean;
  remove_instance_state_on_destroy?: boolean;
  preserved_state: GoogleComputePerInstanceConfigArgsPreservedState;
  timeouts?: GoogleComputePerInstanceConfigArgsTimeouts;
}

export class google_compute_per_instance_config extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputePerInstanceConfigArgs) {
    super(config, "resource", args, resourceName, "google_compute_per_instance_config");
  }
}
