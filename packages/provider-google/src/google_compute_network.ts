import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeNetworkArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeNetworkArgs {
  auto_create_subnetworks?: boolean;
  delete_default_routes_on_create?: boolean;
  description?: string;
  enable_ula_internal_ipv6?: boolean;
  name: string;
  network_firewall_policy_enforcement_order?: string;
  timeouts?: GoogleComputeNetworkArgsTimeouts;
}

export class google_compute_network extends TerraformResource {
  readonly gateway_ipv4!: string;
  readonly id?: string;
  readonly internal_ipv6_range?: string;
  readonly mtu?: number;
  readonly numeric_id!: string;
  readonly project?: string;
  readonly routing_mode?: string;
  readonly self_link!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeNetworkArgs) {
    super(config, "resource", args, resourceName, "google_compute_network");
  }
}
