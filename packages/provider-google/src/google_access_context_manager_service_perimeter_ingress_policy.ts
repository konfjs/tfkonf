import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressFromSources {
  access_level?: string;
  resource?: string;
}
export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressFrom {
  identities?: string[];
  identity_type?: string;
  sources: GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressFromSources;
}
export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressToOperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressToOperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressTo {
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressToOperations;
}
export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgs {
  perimeter: string;
  ingress_from: GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressFrom;
  ingress_to: GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressTo;
  timeouts: GoogleAccessContextManagerServicePerimeterIngressPolicyArgsTimeouts;
}
export class google_access_context_manager_service_perimeter_ingress_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterIngressPolicyArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_service_perimeter_ingress_policy");
  }
}