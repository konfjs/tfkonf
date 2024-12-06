import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeExternalVpnGatewayArgsInterface {
  id?: number;
  ip_address?: string;
  ipv6_address?: string;
}

export interface GoogleComputeExternalVpnGatewayArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeExternalVpnGatewayArgs {
  description?: string;
  labels?: { [key: string]: string };
  name: string;
  redundancy_type?: string;
  interface: GoogleComputeExternalVpnGatewayArgsInterface;
  timeouts?: GoogleComputeExternalVpnGatewayArgsTimeouts;
}

export class google_compute_external_vpn_gateway extends TerraformResource {
  readonly effective_labels!: { [key: string]: string };
  readonly id?: string;
  readonly label_fingerprint!: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly terraform_labels!: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeExternalVpnGatewayArgs) {
    super(config, "resource", args, resourceName, "google_compute_external_vpn_gateway");
  }
}
