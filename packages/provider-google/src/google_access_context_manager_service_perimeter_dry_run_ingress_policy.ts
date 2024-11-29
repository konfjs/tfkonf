import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressFromSources {
  access_level?: string;
  resource?: string;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressFrom {
  identities?: string[];
  identity_type?: string;
  sources: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressFromSources;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressToOperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressToOperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressTo {
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressToOperations;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgs {
  perimeter: string;
  ingress_from: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressFrom;
  ingress_to: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressTo;
  timeouts: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsTimeouts;
}
export class google_access_context_manager_service_perimeter_dry_run_ingress_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_service_perimeter_dry_run_ingress_policy");
  }
}