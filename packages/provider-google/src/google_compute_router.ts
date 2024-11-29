import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeRouterArgsbgpAdvertisedIpRanges {
  description?: string;
  range: string;
}
export interface GoogleComputeRouterArgsbgp {
  advertise_mode?: string;
  advertised_groups?: string[];
  asn: number;
  keepalive_interval?: number;
  advertised_ip_ranges: GoogleComputeRouterArgsbgpAdvertisedIpRanges;
}
export interface GoogleComputeRouterArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeRouterArgs {
  description?: string;
  encrypted_interconnect_router?: boolean;
  name: string;
  network: string;
  bgp: GoogleComputeRouterArgsbgp;
  timeouts: GoogleComputeRouterArgstimeouts;
}
export class google_compute_router extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRouterArgs) {
    super(config, "resource", args, resourceName, "google_compute_router");
  }
}