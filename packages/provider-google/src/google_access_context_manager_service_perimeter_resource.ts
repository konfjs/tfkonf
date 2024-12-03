import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleAccessContextManagerServicePerimeterResourceArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleAccessContextManagerServicePerimeterResourceArgs {
  perimeter_name: string;
  resource: string;
  timeouts?: GoogleAccessContextManagerServicePerimeterResourceArgsTimeouts;
}
export class google_access_context_manager_service_perimeter_resource extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterResourceArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_service_perimeter_resource");
  }
}