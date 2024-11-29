import { TerraformConfig, TerraformResource } from "tfs";
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
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgs {
  perimeter: string;
  ingress_from: IngressFrom;
  ingress_to: IngressTo;
  timeouts: Timeouts;
}
export class google_access_context_manager_service_perimeter_dry_run_ingress_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_service_perimeter_dry_run_ingress_policy");
  }
}