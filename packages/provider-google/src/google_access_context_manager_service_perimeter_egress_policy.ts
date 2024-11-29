import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressFromsources {
  access_level?: string;
}
export interface GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressFrom {
  identities?: string[];
  identity_type?: string;
  source_restriction?: string;
  sources: GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressFromsources;
}
export interface GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressTooperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressTooperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressTooperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressTo {
  external_resources?: string[];
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressTooperations;
}
export interface GoogleAccessContextManagerServicePerimeterEgressPolicyArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleAccessContextManagerServicePerimeterEgressPolicyArgs {
  perimeter: string;
  egress_from: GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressFrom;
  egress_to: GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressTo;
  timeouts: GoogleAccessContextManagerServicePerimeterEgressPolicyArgstimeouts;
}
export class google_access_context_manager_service_perimeter_egress_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterEgressPolicyArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_service_perimeter_egress_policy");
  }
}