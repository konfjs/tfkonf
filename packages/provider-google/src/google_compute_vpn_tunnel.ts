import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeVpnTunnelArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeVpnTunnelArgs {
  description?: string;
  ike_version?: number;
  labels?: { [key: string]: string };
  name: string;
  peer_external_gateway?: string;
  peer_external_gateway_interface?: number;
  peer_gcp_gateway?: string;
  router?: string;
  shared_secret: string;
  target_vpn_gateway?: string;
  vpn_gateway?: string;
  vpn_gateway_interface?: number;
  timeouts?: GoogleComputeVpnTunnelArgsTimeouts;
}

export class google_compute_vpn_tunnel extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly detailed_status!: string;
  readonly effective_labels!: { [key: string]: string };
  readonly id?: string;
  readonly label_fingerprint!: string;
  readonly local_traffic_selector?: string[];
  readonly peer_ip?: string;
  readonly project?: string;
  readonly region?: string;
  readonly remote_traffic_selector?: string[];
  readonly self_link!: string;
  readonly shared_secret_hash!: string;
  readonly terraform_labels!: { [key: string]: string };
  readonly tunnel_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeVpnTunnelArgs) {
    super(config, "resource", args, resourceName, "google_compute_vpn_tunnel");
  }
}
