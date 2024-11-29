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
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgs {
  perimeter: string;
  egress_from: EgressFrom;
  egress_to: EgressTo;
  timeouts: Timeouts;
}
export class google_access_context_manager_service_perimeter_dry_run_egress_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_service_perimeter_dry_run_egress_policy");
  }
}