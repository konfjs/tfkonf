import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNetworkSecurityFirewallEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkSecurityFirewallEndpointArgs {
  billing_project_id: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  parent: string;
  timeouts: GoogleNetworkSecurityFirewallEndpointArgsTimeouts;
}
export class google_network_security_firewall_endpoint extends TerraformResource {
  readonly associated_networks!: string[];
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly reconciling!: boolean;
  readonly self_link!: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkSecurityFirewallEndpointArgs) {
    super(config, "resource", args, resourceName, "google_network_security_firewall_endpoint");
  }
}