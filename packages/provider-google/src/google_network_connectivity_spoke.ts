import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleNetworkConnectivitySpokeArgsLinkedInterconnectAttachments {
  include_import_ranges?: string[];
  site_to_site_data_transfer: boolean;
  uris: string[];
}
export interface GoogleNetworkConnectivitySpokeArgsLinkedProducerVpcNetwork {
  exclude_export_ranges?: string[];
  include_export_ranges?: string[];
  network: string;
  peering: string;
}
export interface GoogleNetworkConnectivitySpokeArgsLinkedRouterApplianceInstancesInstances {
  ip_address?: string;
  virtual_machine?: string;
}
export interface GoogleNetworkConnectivitySpokeArgsLinkedRouterApplianceInstances {
  include_import_ranges?: string[];
  site_to_site_data_transfer: boolean;
  instances: GoogleNetworkConnectivitySpokeArgsLinkedRouterApplianceInstancesInstances;
}
export interface GoogleNetworkConnectivitySpokeArgsLinkedVpcNetwork {
  exclude_export_ranges?: string[];
  include_export_ranges?: string[];
  uri: string;
}
export interface GoogleNetworkConnectivitySpokeArgsLinkedVpnTunnels {
  include_import_ranges?: string[];
  site_to_site_data_transfer: boolean;
  uris: string[];
}
export interface GoogleNetworkConnectivitySpokeArgsTimeouts {
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
  linked_interconnect_attachments: GoogleNetworkConnectivitySpokeArgsLinkedInterconnectAttachments;
  linked_producer_vpc_network: GoogleNetworkConnectivitySpokeArgsLinkedProducerVpcNetwork;
  linked_router_appliance_instances: GoogleNetworkConnectivitySpokeArgsLinkedRouterApplianceInstances;
  linked_vpc_network: GoogleNetworkConnectivitySpokeArgsLinkedVpcNetwork;
  linked_vpn_tunnels: GoogleNetworkConnectivitySpokeArgsLinkedVpnTunnels;
  timeouts?: GoogleNetworkConnectivitySpokeArgsTimeouts;
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