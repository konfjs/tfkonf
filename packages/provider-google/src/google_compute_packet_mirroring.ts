import { TerraformConfig, TerraformResource } from "tfs";
export interface CollectorIlb {
  url: string;
}
export interface Filter {
  cidr_ranges?: string[];
  direction?: string;
  ip_protocols?: string[];
}
export interface Instances {
  url: string;
}
export interface Subnetworks {
  url: string;
}
export interface MirroredResources {
  tags?: string[];
  instances: Instances;
  subnetworks: Subnetworks;
}
export interface Network {
  url: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputePacketMirroringArgs {
  description?: string;
  name: string;
  collector_ilb: CollectorIlb;
  filter: Filter;
  mirrored_resources: MirroredResources;
  network: Network;
  timeouts: Timeouts;
}
export class google_compute_packet_mirroring extends TerraformResource {
  readonly id?: string;
  readonly priority?: number;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputePacketMirroringArgs) {
    super(config, "resource", args, resourceName, "google_compute_packet_mirroring");
  }
}