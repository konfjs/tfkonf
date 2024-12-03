import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressFromSources {
  access_level?: string;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressFrom {
  identities?: string[];
  identity_type?: string;
  source_restriction?: string;
  sources: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressFromSources;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressToOperations {
  service_name?: string;
  method_selectors: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressToOperationsMethodSelectors;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressTo {
  external_resources?: string[];
  resources?: string[];
  operations: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressToOperations;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgs {
  perimeter: string;
  egress_from: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressFrom;
  egress_to: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressTo;
  timeouts?: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsTimeouts;
}
export class google_access_context_manager_service_perimeter_dry_run_egress_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_service_perimeter_dry_run_egress_policy");
  }
}