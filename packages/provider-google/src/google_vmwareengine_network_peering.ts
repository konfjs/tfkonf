import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleVmwareengineNetworkPeeringArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVmwareengineNetworkPeeringArgs {
  description?: string;
  export_custom_routes?: boolean;
  export_custom_routes_with_public_ip?: boolean;
  import_custom_routes?: boolean;
  import_custom_routes_with_public_ip?: boolean;
  name: string;
  peer_network: string;
  peer_network_type: string;
  vmware_engine_network: string;
  timeouts?: GoogleVmwareengineNetworkPeeringArgsTimeouts;
}
export class google_vmwareengine_network_peering extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly project?: string;
  readonly state!: string;
  readonly state_details!: string;
  readonly uid!: string;
  readonly update_time!: string;
  readonly vmware_engine_network_canonical!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVmwareengineNetworkPeeringArgs) {
    super(config, "resource", args, resourceName, "google_vmwareengine_network_peering");
  }
}