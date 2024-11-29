import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIapWebRegionBackendServiceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapWebRegionBackendServiceIamMemberArgs {
  member: string;
  role: string;
  web_region_backend_service: string;
  condition: GoogleIapWebRegionBackendServiceIamMemberArgsCondition;
}
export class google_iap_web_region_backend_service_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapWebRegionBackendServiceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_iap_web_region_backend_service_iam_member");
  }
}