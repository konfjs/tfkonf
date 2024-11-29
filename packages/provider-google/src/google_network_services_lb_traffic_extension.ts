import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNetworkServicesLbTrafficExtensionArgsExtensionChainsextensions {
  authority?: string;
  fail_open?: boolean;
  forward_headers?: string[];
  name: string;
  service: string;
  supported_events?: string[];
  timeout?: string;
}
export interface GoogleNetworkServicesLbTrafficExtensionArgsExtensionChainsMatchCondition {
  cel_expression: string;
}
export interface GoogleNetworkServicesLbTrafficExtensionArgsExtensionChains {
  name: string;
  extensions: GoogleNetworkServicesLbTrafficExtensionArgsExtensionChainsextensions;
  match_condition: GoogleNetworkServicesLbTrafficExtensionArgsExtensionChainsMatchCondition;
}
export interface GoogleNetworkServicesLbTrafficExtensionArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkServicesLbTrafficExtensionArgs {
  description?: string;
  forwarding_rules: string[];
  labels?: {
    [key: string]: string;
  };
  load_balancing_scheme?: string;
  location: string;
  name: string;
  extension_chains: GoogleNetworkServicesLbTrafficExtensionArgsExtensionChains;
  timeouts: GoogleNetworkServicesLbTrafficExtensionArgstimeouts;
}
export class google_network_services_lb_traffic_extension extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkServicesLbTrafficExtensionArgs) {
    super(config, "resource", args, resourceName, "google_network_services_lb_traffic_extension");
  }
}