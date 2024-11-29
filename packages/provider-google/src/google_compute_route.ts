import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeRouteArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeRouteArgs {
  description?: string;
  dest_range: string;
  name: string;
  network: string;
  next_hop_gateway?: string;
  next_hop_ilb?: string;
  next_hop_instance?: string;
  next_hop_vpn_tunnel?: string;
  priority?: number;
  tags?: string[];
  timeouts: GoogleComputeRouteArgstimeouts;
}
export class google_compute_route extends TerraformResource {
  readonly id?: string;
  readonly next_hop_instance_zone?: string;
  readonly next_hop_ip?: string;
  readonly next_hop_network!: string;
  readonly project?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRouteArgs) {
    super(config, "resource", args, resourceName, "google_compute_route");
  }
}