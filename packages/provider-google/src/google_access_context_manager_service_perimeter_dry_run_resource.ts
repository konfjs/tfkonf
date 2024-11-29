import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleAccessContextManagerServicePerimeterDryRunResourceArgs {
  perimeter_name: string;
  resource: string;
  timeouts: Timeouts;
}
export class google_access_context_manager_service_perimeter_dry_run_resource extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterDryRunResourceArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_service_perimeter_dry_run_resource");
  }
}