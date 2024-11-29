import { TerraformConfig, TerraformResource } from "tfs";
export interface LinkedInterconnectAttachments {
  include_import_ranges?: string[];
  site_to_site_data_transfer: boolean;
  uris: string[];
}
export interface LinkedProducerVpcNetwork {
  exclude_export_ranges?: string[];
  include_export_ranges?: string[];
  network: string;
  peering: string;
}
export interface Instances {
  ip_address?: string;
  virtual_machine?: string;
}
export interface LinkedRouterApplianceInstances {
  include_import_ranges?: string[];
  site_to_site_data_transfer: boolean;
  instances: Instances;
}
export interface LinkedVpcNetwork {
  exclude_export_ranges?: string[];
  include_export_ranges?: string[];
  uri: string;
}
export interface LinkedVpnTunnels {
  include_import_ranges?: string[];
  site_to_site_data_transfer: boolean;
  uris: string[];
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkConnectivitySpokeArgs {
  description?: string;
  hub: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  linked_interconnect_attachments: LinkedInterconnectAttachments;
  linked_producer_vpc_network: LinkedProducerVpcNetwork;
  linked_router_appliance_instances: LinkedRouterApplianceInstances;
  linked_vpc_network: LinkedVpcNetwork;
  linked_vpn_tunnels: LinkedVpnTunnels;
  timeouts: Timeouts;
}
export class google_network_connectivity_spoke extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly unique_id!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkConnectivitySpokeArgs) {
    super(config, "resource", args, resourceName, "google_network_connectivity_spoke");
  }
}