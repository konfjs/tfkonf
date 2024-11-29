import { TerraformConfig, TerraformResource } from "tfs";
export interface AdvertisedIpRanges {
  description?: string;
  range: string;
}
export interface Bfd {
  min_receive_interval?: number;
  min_transmit_interval?: number;
  multiplier?: number;
  session_initialization_mode: string;
}
export interface CustomLearnedIpRanges {
  range: string;
}
export interface Md5AuthenticationKey {
  key: string;
  name: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeRouterPeerArgs {
  advertise_mode?: string;
  advertised_groups?: string[];
  advertised_route_priority?: number;
  custom_learned_route_priority?: number;
  enable?: boolean;
  enable_ipv6?: boolean;
  interface: string;
  name: string;
  peer_asn: number;
  router: string;
  router_appliance_instance?: string;
  advertised_ip_ranges: AdvertisedIpRanges;
  bfd: Bfd;
  custom_learned_ip_ranges: CustomLearnedIpRanges;
  md5_authentication_key: Md5AuthenticationKey;
  timeouts: Timeouts;
}
export class google_compute_router_peer extends TerraformResource {
  readonly enable_ipv4?: boolean;
  readonly id?: string;
  readonly ip_address?: string;
  readonly ipv4_nexthop_address?: string;
  readonly ipv6_nexthop_address?: string;
  readonly management_type!: string;
  readonly peer_ip_address?: string;
  readonly peer_ipv4_nexthop_address?: string;
  readonly peer_ipv6_nexthop_address?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRouterPeerArgs) {
    super(config, "resource", args, resourceName, "google_compute_router_peer");
  }
}