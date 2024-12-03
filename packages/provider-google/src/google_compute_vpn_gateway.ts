import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeVpnGatewayArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeVpnGatewayArgs {
  description?: string;
  name: string;
  network: string;
  timeouts?: GoogleComputeVpnGatewayArgsTimeouts;
}
export class google_compute_vpn_gateway extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly gateway_id!: number;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeVpnGatewayArgs) {
    super(config, "resource", args, resourceName, "google_compute_vpn_gateway");
  }
}