import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface VpnInterfaces {
  id?: number;
  interconnect_attachment?: string;
}
export interface GoogleComputeHaVpnGatewayArgs {
  description?: string;
  gateway_ip_version?: string;
  name: string;
  network: string;
  stack_type?: string;
  timeouts: Timeouts;
  vpn_interfaces: VpnInterfaces;
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