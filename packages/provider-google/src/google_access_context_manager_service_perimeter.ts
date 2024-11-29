import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressFromSources {
  access_level?: string;
}
export interface GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressFrom {
  identities?: string[];
  identity_type?: string;
  source_restriction?: string;
  sources: GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressFromSources;
}
export interface GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressToOperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressToOperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressTo {
  external_resources?: string[];
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressToOperations;
}
export interface GoogleAccessContextManagerServicePerimeterArgsSpecEgressPolicies {
  egress_from: GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressFrom;
  egress_to: GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressTo;
}
export interface GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressFromSources {
  access_level?: string;
  resource?: string;
}
export interface GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressFrom {
  identities?: string[];
  identity_type?: string;
  sources: GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressFromSources;
}
export interface GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressToOperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressToOperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressTo {
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressToOperations;
}
export interface GoogleAccessContextManagerServicePerimeterArgsSpecIngressPolicies {
  ingress_from: GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressFrom;
  ingress_to: GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressTo;
}
export interface GoogleAccessContextManagerServicePerimeterArgsSpecVpcAccessibleServices {
  allowed_services?: string[];
  enable_restriction?: boolean;
}
export interface GoogleAccessContextManagerServicePerimeterArgsSpec {
  access_levels?: string[];
  resources?: string[];
  restricted_services?: string[];
  egress_policies: GoogleAccessContextManagerServicePerimeterArgsSpecEgressPolicies;
  ingress_policies: GoogleAccessContextManagerServicePerimeterArgsSpecIngressPolicies;
  vpc_accessible_services: GoogleAccessContextManagerServicePerimeterArgsSpecVpcAccessibleServices;
}
export interface GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressFromSources {
  access_level?: string;
}
export interface GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressFrom {
  identities?: string[];
  identity_type?: string;
  source_restriction?: string;
  sources: GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressFromSources;
}
export interface GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressToOperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressToOperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressTo {
  external_resources?: string[];
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressToOperations;
}
export interface GoogleAccessContextManagerServicePerimeterArgsStatusEgressPolicies {
  egress_from: GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressFrom;
  egress_to: GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressTo;
}
export interface GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressFromSources {
  access_level?: string;
  resource?: string;
}
export interface GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressFrom {
  identities?: string[];
  identity_type?: string;
  sources: GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressFromSources;
}
export interface GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressToOperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressToOperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressTo {
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressToOperations;
}
export interface GoogleAccessContextManagerServicePerimeterArgsStatusIngressPolicies {
  ingress_from: GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressFrom;
  ingress_to: GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressTo;
}
export interface GoogleAccessContextManagerServicePerimeterArgsStatusVpcAccessibleServices {
  allowed_services?: string[];
  enable_restriction?: boolean;
}
export interface GoogleAccessContextManagerServicePerimeterArgsStatus {
  access_levels?: string[];
  resources?: string[];
  restricted_services?: string[];
  egress_policies: GoogleAccessContextManagerServicePerimeterArgsStatusEgressPolicies;
  ingress_policies: GoogleAccessContextManagerServicePerimeterArgsStatusIngressPolicies;
  vpc_accessible_services: GoogleAccessContextManagerServicePerimeterArgsStatusVpcAccessibleServices;
}
export interface GoogleAccessContextManagerServicePerimeterArgsTimeouts {
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
  spec: GoogleAccessContextManagerServicePerimeterArgsSpec;
  status: GoogleAccessContextManagerServicePerimeterArgsStatus;
  timeouts: GoogleAccessContextManagerServicePerimeterArgsTimeouts;
}
export class google_access_context_manager_service_perimeter extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_service_perimeter");
  }
}