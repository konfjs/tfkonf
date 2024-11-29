import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDnsManagedZoneArgsCloudLoggingConfig {
  enable_logging: boolean;
}
export interface GoogleDnsManagedZoneArgsDnssecConfigDefaultKeySpecs {
  algorithm?: string;
  key_length?: number;
  key_type?: string;
  kind?: string;
}
export interface GoogleDnsManagedZoneArgsDnssecConfig {
  kind?: string;
  state?: string;
  default_key_specs: GoogleDnsManagedZoneArgsDnssecConfigDefaultKeySpecs;
}
export interface GoogleDnsManagedZoneArgsForwardingConfigTargetNameServers {
  forwarding_path?: string;
  ipv4_address: string;
}
export interface GoogleDnsManagedZoneArgsForwardingConfig {
  target_name_servers: GoogleDnsManagedZoneArgsForwardingConfigTargetNameServers;
}
export interface GoogleDnsManagedZoneArgsPeeringConfigTargetNetwork {
  network_url: string;
}
export interface GoogleDnsManagedZoneArgsPeeringConfig {
  target_network: GoogleDnsManagedZoneArgsPeeringConfigTargetNetwork;
}
export interface GoogleDnsManagedZoneArgsPrivateVisibilityConfigGkeClusters {
  gke_cluster_name: string;
}
export interface GoogleDnsManagedZoneArgsPrivateVisibilityConfignetworks {
  network_url: string;
}
export interface GoogleDnsManagedZoneArgsPrivateVisibilityConfig {
  gke_clusters: GoogleDnsManagedZoneArgsPrivateVisibilityConfigGkeClusters;
  networks: GoogleDnsManagedZoneArgsPrivateVisibilityConfignetworks;
}
export interface GoogleDnsManagedZoneArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDnsManagedZoneArgs {
  description?: string;
  dns_name: string;
  force_destroy?: boolean;
  labels?: {
    [key: string]: string;
  };
  name: string;
  visibility?: string;
  cloud_logging_config: GoogleDnsManagedZoneArgsCloudLoggingConfig;
  dnssec_config: GoogleDnsManagedZoneArgsDnssecConfig;
  forwarding_config: GoogleDnsManagedZoneArgsForwardingConfig;
  peering_config: GoogleDnsManagedZoneArgsPeeringConfig;
  private_visibility_config: GoogleDnsManagedZoneArgsPrivateVisibilityConfig;
  timeouts: GoogleDnsManagedZoneArgstimeouts;
}
export class google_dns_managed_zone extends TerraformResource {
  readonly creation_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly managed_zone_id!: number;
  readonly name_servers!: string[];
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDnsManagedZoneArgs) {
    super(config, "resource", args, resourceName, "google_dns_managed_zone");
  }
}