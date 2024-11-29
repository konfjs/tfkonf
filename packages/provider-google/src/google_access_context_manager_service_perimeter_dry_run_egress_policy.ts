import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressFromsources {
  access_level?: string;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressFrom {
  identities?: string[];
  identity_type?: string;
  source_restriction?: string;
  sources: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressFromsources;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressTooperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressTooperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressTooperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressTo {
  external_resources?: string[];
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressTooperations;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgs {
  perimeter: string;
  egress_from: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressFrom;
  egress_to: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressTo;
  timeouts: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgstimeouts;
}
export class google_access_context_manager_service_perimeter_dry_run_egress_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_service_perimeter_dry_run_egress_policy");
  }
}