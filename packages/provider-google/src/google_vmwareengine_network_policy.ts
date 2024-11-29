import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleVmwareengineNetworkPolicyArgsExternalIp {
  enabled?: boolean;
}
export interface GoogleVmwareengineNetworkPolicyArgsInternetAccess {
  enabled?: boolean;
}
export interface GoogleVmwareengineNetworkPolicyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVmwareengineNetworkPolicyArgs {
  description?: string;
  edge_services_cidr: string;
  location: string;
  name: string;
  vmware_engine_network: string;
  external_ip: GoogleVmwareengineNetworkPolicyArgsExternalIp;
  internet_access: GoogleVmwareengineNetworkPolicyArgsInternetAccess;
  timeouts: GoogleVmwareengineNetworkPolicyArgstimeouts;
}
export class google_vmwareengine_network_policy extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly project?: string;
  readonly uid!: string;
  readonly update_time!: string;
  readonly vmware_engine_network_canonical!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVmwareengineNetworkPolicyArgs) {
    super(config, "resource", args, resourceName, "google_vmwareengine_network_policy");
  }
}