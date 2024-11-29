import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressFromsources {
  access_level?: string;
  resource?: string;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressFrom {
  identities?: string[];
  identity_type?: string;
  sources: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressFromsources;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressTooperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressTooperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressTooperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressTo {
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressTooperations;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgs {
  perimeter: string;
  ingress_from: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressFrom;
  ingress_to: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressTo;
  timeouts: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgstimeouts;
}
export class google_access_context_manager_service_perimeter_dry_run_ingress_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_service_perimeter_dry_run_ingress_policy");
  }
}