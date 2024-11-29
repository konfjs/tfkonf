import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecEgressPoliciesEgressFromsources {
  access_level?: string;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecEgressPoliciesEgressFrom {
  identities?: string[];
  identity_type?: string;
  source_restriction?: string;
  sources: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecEgressPoliciesEgressFromsources;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecEgressPoliciesEgressTooperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecEgressPoliciesEgressTooperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecEgressPoliciesEgressTooperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecEgressPoliciesEgressTo {
  external_resources?: string[];
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecEgressPoliciesEgressTooperations;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecEgressPolicies {
  egress_from: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecEgressPoliciesEgressFrom;
  egress_to: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecEgressPoliciesEgressTo;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecIngressPoliciesIngressFromsources {
  access_level?: string;
  resource?: string;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecIngressPoliciesIngressFrom {
  identities?: string[];
  identity_type?: string;
  sources: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecIngressPoliciesIngressFromsources;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecIngressPoliciesIngressTooperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecIngressPoliciesIngressTooperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecIngressPoliciesIngressTooperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecIngressPoliciesIngressTo {
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecIngressPoliciesIngressTooperations;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecIngressPolicies {
  ingress_from: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecIngressPoliciesIngressFrom;
  ingress_to: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecIngressPoliciesIngressTo;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecVpcAccessibleServices {
  allowed_services?: string[];
  enable_restriction?: boolean;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspec {
  access_levels?: string[];
  resources?: string[];
  restricted_services?: string[];
  egress_policies: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecEgressPolicies;
  ingress_policies: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecIngressPolicies;
  vpc_accessible_services: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspecVpcAccessibleServices;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusEgressPoliciesEgressFromsources {
  access_level?: string;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusEgressPoliciesEgressFrom {
  identities?: string[];
  identity_type?: string;
  source_restriction?: string;
  sources: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusEgressPoliciesEgressFromsources;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusEgressPoliciesEgressTooperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusEgressPoliciesEgressTooperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusEgressPoliciesEgressTooperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusEgressPoliciesEgressTo {
  external_resources?: string[];
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusEgressPoliciesEgressTooperations;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusEgressPolicies {
  egress_from: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusEgressPoliciesEgressFrom;
  egress_to: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusEgressPoliciesEgressTo;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusIngressPoliciesIngressFromsources {
  access_level?: string;
  resource?: string;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusIngressPoliciesIngressFrom {
  identities?: string[];
  identity_type?: string;
  sources: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusIngressPoliciesIngressFromsources;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusIngressPoliciesIngressTooperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusIngressPoliciesIngressTooperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusIngressPoliciesIngressTooperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusIngressPoliciesIngressTo {
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusIngressPoliciesIngressTooperations;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusIngressPolicies {
  ingress_from: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusIngressPoliciesIngressFrom;
  ingress_to: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusIngressPoliciesIngressTo;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusVpcAccessibleServices {
  allowed_services?: string[];
  enable_restriction?: boolean;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatus {
  access_levels?: string[];
  resources?: string[];
  restricted_services?: string[];
  egress_policies: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusEgressPolicies;
  ingress_policies: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusIngressPolicies;
  vpc_accessible_services: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatusVpcAccessibleServices;
}
export interface GoogleAccessContextManagerServicePerimetersArgsServicePerimeters {
  description?: string;
  name: string;
  perimeter_type?: string;
  title: string;
  use_explicit_dry_run_spec?: boolean;
  spec: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersspec;
  status: GoogleAccessContextManagerServicePerimetersArgsServicePerimetersstatus;
}
export interface GoogleAccessContextManagerServicePerimetersArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAccessContextManagerServicePerimetersArgs {
  parent: string;
  service_perimeters: GoogleAccessContextManagerServicePerimetersArgsServicePerimeters;
  timeouts: GoogleAccessContextManagerServicePerimetersArgstimeouts;
}
export class google_access_context_manager_service_perimeters extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimetersArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_service_perimeters");
  }
}