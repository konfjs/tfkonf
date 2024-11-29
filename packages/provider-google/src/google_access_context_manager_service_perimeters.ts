import { TerraformConfig, TerraformResource } from "tfs";
export interface Sources {
  access_level?: string;
}
export interface EgressFrom {
  identities?: string[];
  identity_type?: string;
  source_restriction?: string;
  sources: Sources;
}
export interface MethodSelectors {
  method?: string;
  permission?: string;
}
export interface Operations {
  service_name?: string;
  method_selectors: MethodSelectors;
}
export interface EgressTo {
  external_resources?: string[];
  resources?: string[];
  operations: Operations;
}
export interface EgressPolicies {
  egress_from: EgressFrom;
  egress_to: EgressTo;
}
export interface Sources {
  access_level?: string;
  resource?: string;
}
export interface IngressFrom {
  identities?: string[];
  identity_type?: string;
  sources: Sources;
}
export interface MethodSelectors {
  method?: string;
  permission?: string;
}
export interface Operations {
  service_name?: string;
  method_selectors: MethodSelectors;
}
export interface IngressTo {
  resources?: string[];
  operations: Operations;
}
export interface IngressPolicies {
  ingress_from: IngressFrom;
  ingress_to: IngressTo;
}
export interface VpcAccessibleServices {
  allowed_services?: string[];
  enable_restriction?: boolean;
}
export interface Spec {
  access_levels?: string[];
  resources?: string[];
  restricted_services?: string[];
  egress_policies: EgressPolicies;
  ingress_policies: IngressPolicies;
  vpc_accessible_services: VpcAccessibleServices;
}
export interface Sources {
  access_level?: string;
}
export interface EgressFrom {
  identities?: string[];
  identity_type?: string;
  source_restriction?: string;
  sources: Sources;
}
export interface MethodSelectors {
  method?: string;
  permission?: string;
}
export interface Operations {
  service_name?: string;
  method_selectors: MethodSelectors;
}
export interface EgressTo {
  external_resources?: string[];
  resources?: string[];
  operations: Operations;
}
export interface EgressPolicies {
  egress_from: EgressFrom;
  egress_to: EgressTo;
}
export interface Sources {
  access_level?: string;
  resource?: string;
}
export interface IngressFrom {
  identities?: string[];
  identity_type?: string;
  sources: Sources;
}
export interface MethodSelectors {
  method?: string;
  permission?: string;
}
export interface Operations {
  service_name?: string;
  method_selectors: MethodSelectors;
}
export interface IngressTo {
  resources?: string[];
  operations: Operations;
}
export interface IngressPolicies {
  ingress_from: IngressFrom;
  ingress_to: IngressTo;
}
export interface VpcAccessibleServices {
  allowed_services?: string[];
  enable_restriction?: boolean;
}
export interface Status {
  access_levels?: string[];
  resources?: string[];
  restricted_services?: string[];
  egress_policies: EgressPolicies;
  ingress_policies: IngressPolicies;
  vpc_accessible_services: VpcAccessibleServices;
}
export interface ServicePerimeters {
  description?: string;
  name: string;
  perimeter_type?: string;
  title: string;
  use_explicit_dry_run_spec?: boolean;
  spec: Spec;
  status: Status;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAccessContextManagerServicePerimetersArgs {
  parent: string;
  service_perimeters: ServicePerimeters;
  timeouts: Timeouts;
}
export class google_access_context_manager_service_perimeters extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimetersArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_service_perimeters");
  }
}