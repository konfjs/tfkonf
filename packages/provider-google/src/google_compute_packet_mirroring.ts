import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputePacketMirroringArgsCollectorIlb {
  url: string;
}
export interface GoogleComputePacketMirroringArgsfilter {
  cidr_ranges?: string[];
  direction?: string;
  ip_protocols?: string[];
}
export interface GoogleComputePacketMirroringArgsMirroredResourcesinstances {
  url: string;
}
export interface GoogleComputePacketMirroringArgsMirroredResourcessubnetworks {
  url: string;
}
export interface GoogleComputePacketMirroringArgsMirroredResources {
  tags?: string[];
  instances: GoogleComputePacketMirroringArgsMirroredResourcesinstances;
  subnetworks: GoogleComputePacketMirroringArgsMirroredResourcessubnetworks;
}
export interface GoogleComputePacketMirroringArgsnetwork {
  url: string;
}
export interface GoogleComputePacketMirroringArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputePacketMirroringArgs {
  description?: string;
  name: string;
  collector_ilb: GoogleComputePacketMirroringArgsCollectorIlb;
  filter: GoogleComputePacketMirroringArgsfilter;
  mirrored_resources: GoogleComputePacketMirroringArgsMirroredResources;
  network: GoogleComputePacketMirroringArgsnetwork;
  timeouts: GoogleComputePacketMirroringArgstimeouts;
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