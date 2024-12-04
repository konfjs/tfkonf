import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkSecurityFirewallEndpointAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkSecurityFirewallEndpointAssociationArgs {
  disabled?: boolean;
  firewall_endpoint: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  network: string;
  parent?: string;
  tls_inspection_policy?: string;
  timeouts?: GoogleNetworkSecurityFirewallEndpointAssociationArgsTimeouts;
}

export class google_network_security_firewall_endpoint_association extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: { [key: string]: string };
  readonly id?: string;
  readonly reconciling!: boolean;
  readonly self_link!: string;
  readonly state!: string;
  readonly terraform_labels!: { [key: string]: string };
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkSecurityFirewallEndpointAssociationArgs) {
    super(config, "resource", args, resourceName, "google_network_security_firewall_endpoint_association");
  }
}
