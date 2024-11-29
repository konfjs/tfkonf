import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeRouterArgsBgpAdvertisedIpRanges {
  description?: string;
  range: string;
}
export interface GoogleComputeRouterArgsBgp {
  advertise_mode?: string;
  advertised_groups?: string[];
  asn: number;
  keepalive_interval?: number;
  advertised_ip_ranges: GoogleComputeRouterArgsBgpAdvertisedIpRanges;
}
export interface GoogleComputeRouterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeRouterArgs {
  description?: string;
  encrypted_interconnect_router?: boolean;
  name: string;
  network: string;
  bgp: GoogleComputeRouterArgsBgp;
  timeouts?: GoogleComputeRouterArgsTimeouts;
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