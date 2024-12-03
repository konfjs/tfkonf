import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleNetworkServicesLbRouteExtensionArgsExtensionChainsExtensions {
  authority?: string;
  fail_open?: boolean;
  forward_headers?: string[];
  name: string;
  service: string;
  timeout?: string;
}
export interface GoogleNetworkServicesLbRouteExtensionArgsExtensionChainsMatchCondition {
  cel_expression: string;
}
export interface GoogleNetworkServicesLbRouteExtensionArgsExtensionChains {
  name: string;
  extensions: GoogleNetworkServicesLbRouteExtensionArgsExtensionChainsExtensions;
  match_condition: GoogleNetworkServicesLbRouteExtensionArgsExtensionChainsMatchCondition;
}
export interface GoogleNetworkServicesLbRouteExtensionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkServicesLbRouteExtensionArgs {
  description?: string;
  forwarding_rules: string[];
  labels?: {
    [key: string]: string;
  };
  load_balancing_scheme: string;
  location: string;
  name: string;
  extension_chains: GoogleNetworkServicesLbRouteExtensionArgsExtensionChains;
  timeouts?: GoogleNetworkServicesLbRouteExtensionArgsTimeouts;
}
export class google_network_services_lb_route_extension extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkServicesLbRouteExtensionArgs) {
    super(config, "resource", args, resourceName, "google_network_services_lb_route_extension");
  }
}