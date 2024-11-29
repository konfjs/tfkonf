import { TerraformConfig, TerraformResource } from "tfs";
export interface Filter {
  dest_range?: string;
  ip_protocol?: string;
  protocol_version: string;
  src_range?: string;
}
export interface InterconnectAttachment {
  region: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface VirtualMachine {
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
  filter: Filter;
  interconnect_attachment: InterconnectAttachment;
  timeouts: Timeouts;
  virtual_machine: VirtualMachine;
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