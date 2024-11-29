import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressFromsources {
  access_level?: string;
  resource?: string;
}
export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressFrom {
  identities?: string[];
  identity_type?: string;
  sources: GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressFromsources;
}
export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressTooperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressTooperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressTooperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressTo {
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressTooperations;
}
export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgs {
  perimeter: string;
  ingress_from: GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressFrom;
  ingress_to: GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressTo;
  timeouts: GoogleAccessContextManagerServicePerimeterIngressPolicyArgstimeouts;
}
export class google_access_context_manager_service_perimeter_ingress_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterIngressPolicyArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_service_perimeter_ingress_policy");
  }
}