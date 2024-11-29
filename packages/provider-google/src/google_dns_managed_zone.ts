import { TerraformConfig, TerraformResource } from "tfs";
export interface CloudLoggingConfig {
  enable_logging: boolean;
}
export interface DefaultKeySpecs {
  algorithm?: string;
  key_length?: number;
  key_type?: string;
  kind?: string;
}
export interface DnssecConfig {
  kind?: string;
  state?: string;
  default_key_specs: DefaultKeySpecs;
}
export interface TargetNameServers {
  forwarding_path?: string;
  ipv4_address: string;
}
export interface ForwardingConfig {
  target_name_servers: TargetNameServers;
}
export interface TargetNetwork {
  network_url: string;
}
export interface PeeringConfig {
  target_network: TargetNetwork;
}
export interface GkeClusters {
  gke_cluster_name: string;
}
export interface Networks {
  network_url: string;
}
export interface PrivateVisibilityConfig {
  gke_clusters: GkeClusters;
  networks: Networks;
}
export interface Timeouts {
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
  cloud_logging_config: CloudLoggingConfig;
  dnssec_config: DnssecConfig;
  forwarding_config: ForwardingConfig;
  peering_config: PeeringConfig;
  private_visibility_config: PrivateVisibilityConfig;
  timeouts: Timeouts;
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