import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNetworkConnectivityPolicyBasedRouteArgsFilter {
  dest_range?: string;
  ip_protocol?: string;
  protocol_version: string;
  src_range?: string;
}
export interface GoogleNetworkConnectivityPolicyBasedRouteArgsInterconnectAttachment {
  region: string;
}
export interface GoogleNetworkConnectivityPolicyBasedRouteArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkConnectivityPolicyBasedRouteArgsVirtualMachine {
  tags: string[];
}
export interface GoogleNetworkConnectivityPolicyBasedRouteArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  network: string;
  next_hop_ilb_ip?: string;
  next_hop_other_routes?: string;
  priority?: number;
  filter: GoogleNetworkConnectivityPolicyBasedRouteArgsFilter;
  interconnect_attachment: GoogleNetworkConnectivityPolicyBasedRouteArgsInterconnectAttachment;
  timeouts: GoogleNetworkConnectivityPolicyBasedRouteArgsTimeouts;
  virtual_machine: GoogleNetworkConnectivityPolicyBasedRouteArgsVirtualMachine;
}
export class google_network_connectivity_policy_based_route extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly kind!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  readonly warnings!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkConnectivityPolicyBasedRouteArgs) {
    super(config, "resource", args, resourceName, "google_network_connectivity_policy_based_route");
  }
}