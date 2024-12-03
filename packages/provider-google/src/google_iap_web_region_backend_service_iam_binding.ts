import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleIapWebRegionBackendServiceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapWebRegionBackendServiceIamBindingArgs {
  members: string[];
  role: string;
  web_region_backend_service: string;
  condition: GoogleIapWebRegionBackendServiceIamBindingArgsCondition;
}
export class google_iap_web_region_backend_service_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapWebRegionBackendServiceIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_iap_web_region_backend_service_iam_binding");
  }
}