import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeHaVpnGatewayArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeHaVpnGatewayArgsVpnInterfaces {
  id?: number;
  interconnect_attachment?: string;
}
export interface GoogleComputeHaVpnGatewayArgs {
  description?: string;
  gateway_ip_version?: string;
  name: string;
  network: string;
  stack_type?: string;
  timeouts: GoogleComputeHaVpnGatewayArgsTimeouts;
  vpn_interfaces: GoogleComputeHaVpnGatewayArgsVpnInterfaces;
}
export class google_compute_ha_vpn_gateway extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeHaVpnGatewayArgs) {
    super(config, "resource", args, resourceName, "google_compute_ha_vpn_gateway");
  }
}