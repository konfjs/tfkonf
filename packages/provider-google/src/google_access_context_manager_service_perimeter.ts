import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAccessContextManagerServicePerimeterArgsspecEgressPoliciesEgressFromsources {
  access_level?: string;
}
export interface GoogleAccessContextManagerServicePerimeterArgsspecEgressPoliciesEgressFrom {
  identities?: string[];
  identity_type?: string;
  source_restriction?: string;
  sources: GoogleAccessContextManagerServicePerimeterArgsspecEgressPoliciesEgressFromsources;
}
export interface GoogleAccessContextManagerServicePerimeterArgsspecEgressPoliciesEgressTooperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimeterArgsspecEgressPoliciesEgressTooperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimeterArgsspecEgressPoliciesEgressTooperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimeterArgsspecEgressPoliciesEgressTo {
  external_resources?: string[];
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimeterArgsspecEgressPoliciesEgressTooperations;
}
export interface GoogleAccessContextManagerServicePerimeterArgsspecEgressPolicies {
  egress_from: GoogleAccessContextManagerServicePerimeterArgsspecEgressPoliciesEgressFrom;
  egress_to: GoogleAccessContextManagerServicePerimeterArgsspecEgressPoliciesEgressTo;
}
export interface GoogleAccessContextManagerServicePerimeterArgsspecIngressPoliciesIngressFromsources {
  access_level?: string;
  resource?: string;
}
export interface GoogleAccessContextManagerServicePerimeterArgsspecIngressPoliciesIngressFrom {
  identities?: string[];
  identity_type?: string;
  sources: GoogleAccessContextManagerServicePerimeterArgsspecIngressPoliciesIngressFromsources;
}
export interface GoogleAccessContextManagerServicePerimeterArgsspecIngressPoliciesIngressTooperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimeterArgsspecIngressPoliciesIngressTooperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimeterArgsspecIngressPoliciesIngressTooperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimeterArgsspecIngressPoliciesIngressTo {
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimeterArgsspecIngressPoliciesIngressTooperations;
}
export interface GoogleAccessContextManagerServicePerimeterArgsspecIngressPolicies {
  ingress_from: GoogleAccessContextManagerServicePerimeterArgsspecIngressPoliciesIngressFrom;
  ingress_to: GoogleAccessContextManagerServicePerimeterArgsspecIngressPoliciesIngressTo;
}
export interface GoogleAccessContextManagerServicePerimeterArgsspecVpcAccessibleServices {
  allowed_services?: string[];
  enable_restriction?: boolean;
}
export interface GoogleAccessContextManagerServicePerimeterArgsspec {
  access_levels?: string[];
  resources?: string[];
  restricted_services?: string[];
  egress_policies: GoogleAccessContextManagerServicePerimeterArgsspecEgressPolicies;
  ingress_policies: GoogleAccessContextManagerServicePerimeterArgsspecIngressPolicies;
  vpc_accessible_services: GoogleAccessContextManagerServicePerimeterArgsspecVpcAccessibleServices;
}
export interface GoogleAccessContextManagerServicePerimeterArgsstatusEgressPoliciesEgressFromsources {
  access_level?: string;
}
export interface GoogleAccessContextManagerServicePerimeterArgsstatusEgressPoliciesEgressFrom {
  identities?: string[];
  identity_type?: string;
  source_restriction?: string;
  sources: GoogleAccessContextManagerServicePerimeterArgsstatusEgressPoliciesEgressFromsources;
}
export interface GoogleAccessContextManagerServicePerimeterArgsstatusEgressPoliciesEgressTooperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimeterArgsstatusEgressPoliciesEgressTooperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimeterArgsstatusEgressPoliciesEgressTooperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimeterArgsstatusEgressPoliciesEgressTo {
  external_resources?: string[];
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimeterArgsstatusEgressPoliciesEgressTooperations;
}
export interface GoogleAccessContextManagerServicePerimeterArgsstatusEgressPolicies {
  egress_from: GoogleAccessContextManagerServicePerimeterArgsstatusEgressPoliciesEgressFrom;
  egress_to: GoogleAccessContextManagerServicePerimeterArgsstatusEgressPoliciesEgressTo;
}
export interface GoogleAccessContextManagerServicePerimeterArgsstatusIngressPoliciesIngressFromsources {
  access_level?: string;
  resource?: string;
}
export interface GoogleAccessContextManagerServicePerimeterArgsstatusIngressPoliciesIngressFrom {
  identities?: string[];
  identity_type?: string;
  sources: GoogleAccessContextManagerServicePerimeterArgsstatusIngressPoliciesIngressFromsources;
}
export interface GoogleAccessContextManagerServicePerimeterArgsstatusIngressPoliciesIngressTooperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimeterArgsstatusIngressPoliciesIngressTooperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimeterArgsstatusIngressPoliciesIngressTooperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimeterArgsstatusIngressPoliciesIngressTo {
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimeterArgsstatusIngressPoliciesIngressTooperations;
}
export interface GoogleAccessContextManagerServicePerimeterArgsstatusIngressPolicies {
  ingress_from: GoogleAccessContextManagerServicePerimeterArgsstatusIngressPoliciesIngressFrom;
  ingress_to: GoogleAccessContextManagerServicePerimeterArgsstatusIngressPoliciesIngressTo;
}
export interface GoogleAccessContextManagerServicePerimeterArgsstatusVpcAccessibleServices {
  allowed_services?: string[];
  enable_restriction?: boolean;
}
export interface GoogleAccessContextManagerServicePerimeterArgsstatus {
  access_levels?: string[];
  resources?: string[];
  restricted_services?: string[];
  egress_policies: GoogleAccessContextManagerServicePerimeterArgsstatusEgressPolicies;
  ingress_policies: GoogleAccessContextManagerServicePerimeterArgsstatusIngressPolicies;
  vpc_accessible_services: GoogleAccessContextManagerServicePerimeterArgsstatusVpcAccessibleServices;
}
export interface GoogleAccessContextManagerServicePerimeterArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAccessContextManagerServicePerimeterArgs {
  description?: string;
  name: string;
  parent: string;
  perimeter_type?: string;
  title: string;
  use_explicit_dry_run_spec?: boolean;
  spec: GoogleAccessContextManagerServicePerimeterArgsspec;
  status: GoogleAccessContextManagerServicePerimeterArgsstatus;
  timeouts: GoogleAccessContextManagerServicePerimeterArgstimeouts;
}
export class google_access_context_manager_service_perimeter extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_service_perimeter");
  }
}