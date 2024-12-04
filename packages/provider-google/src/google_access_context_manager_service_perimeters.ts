import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecEgressPoliciesEgressFromSources {
  access_level?: string;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecEgressPoliciesEgressFrom {
  identities?: string[];
  identity_type?: string;
  source_restriction?: string;
  sources: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecEgressPoliciesEgressFromSources;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecEgressPoliciesEgressToOperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecEgressPoliciesEgressTo {
  external_resources?: string[];
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecEgressPoliciesEgressToOperations;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecEgressPolicies {
  egress_from: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecEgressPoliciesEgressFrom;
  egress_to: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecEgressPoliciesEgressTo;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecIngressPoliciesIngressFromSources {
  access_level?: string;
  resource?: string;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecIngressPoliciesIngressFrom {
  identities?: string[];
  identity_type?: string;
  sources: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecIngressPoliciesIngressFromSources;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecIngressPoliciesIngressToOperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecIngressPoliciesIngressTo {
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecIngressPoliciesIngressToOperations;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecIngressPolicies {
  ingress_from: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecIngressPoliciesIngressFrom;
  ingress_to: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecIngressPoliciesIngressTo;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecVpcAccessibleServices {
  allowed_services?: string[];
  enable_restriction?: boolean;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpec {
  access_levels?: string[];
  resources?: string[];
  restricted_services?: string[];
  egress_policies: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecEgressPolicies;
  ingress_policies: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecIngressPolicies;
  vpc_accessible_services: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpecVpcAccessibleServices;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusEgressPoliciesEgressFromSources {
  access_level?: string;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusEgressPoliciesEgressFrom {
  identities?: string[];
  identity_type?: string;
  source_restriction?: string;
  sources: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusEgressPoliciesEgressFromSources;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusEgressPoliciesEgressToOperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusEgressPoliciesEgressTo {
  external_resources?: string[];
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusEgressPoliciesEgressToOperations;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusEgressPolicies {
  egress_from: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusEgressPoliciesEgressFrom;
  egress_to: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusEgressPoliciesEgressTo;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusIngressPoliciesIngressFromSources {
  access_level?: string;
  resource?: string;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusIngressPoliciesIngressFrom {
  identities?: string[];
  identity_type?: string;
  sources: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusIngressPoliciesIngressFromSources;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusIngressPoliciesIngressToOperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusIngressPoliciesIngressTo {
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusIngressPoliciesIngressToOperations;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusIngressPolicies {
  ingress_from: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusIngressPoliciesIngressFrom;
  ingress_to: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusIngressPoliciesIngressTo;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusVpcAccessibleServices {
  allowed_services?: string[];
  enable_restriction?: boolean;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatus {
  access_levels?: string[];
  resources?: string[];
  restricted_services?: string[];
  egress_policies: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusEgressPolicies;
  ingress_policies: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusIngressPolicies;
  vpc_accessible_services: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatusVpcAccessibleServices;
}

export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimeters {
  description?: string;
  name: string;
  perimeter_type?: string;
  title: string;
  use_explicit_dry_run_spec?: boolean;
  spec: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersSpec;
  status: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersStatus;
}

export interface GoogleAccessContextManagerServicePerimetersArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAccessContextManagerServicePerimetersArgs {
  parent: string;
  service_perimeters: GoogleAccessContextManagerServicePerimetersArgsServicePerimeters;
  timeouts?: GoogleAccessContextManagerServicePerimetersArgsTimeouts;
}

export class google_access_context_manager_service_perimeters extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimetersArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_service_perimeters");
  }
}
