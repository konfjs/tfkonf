import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputePacketMirroringArgsCollectorIlb {
  url: string;
}

export interface GoogleComputePacketMirroringArgsFilter {
  cidr_ranges?: string[];
  direction?: string;
  ip_protocols?: string[];
}

export interface GoogleComputePacketMirroringArgsMirroredResourcesInstances {
  url: string;
}

export interface GoogleComputePacketMirroringArgsMirroredResourcesSubnetworks {
  url: string;
}

export interface GoogleComputePacketMirroringArgsMirroredResources {
  tags?: string[];
  instances: GoogleComputePacketMirroringArgsMirroredResourcesInstances;
  subnetworks: GoogleComputePacketMirroringArgsMirroredResourcesSubnetworks;
}

export interface GoogleComputePacketMirroringArgsNetwork {
  url: string;
}

export interface GoogleComputePacketMirroringArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputePacketMirroringArgs {
  description?: string;
  name: string;
  collector_ilb: GoogleComputePacketMirroringArgsCollectorIlb;
  filter: GoogleComputePacketMirroringArgsFilter;
  mirrored_resources: GoogleComputePacketMirroringArgsMirroredResources;
  network: GoogleComputePacketMirroringArgsNetwork;
  timeouts?: GoogleComputePacketMirroringArgsTimeouts;
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
