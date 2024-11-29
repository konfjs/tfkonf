import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleIapWebRegionBackendServiceIamPolicyArgs {
  policy_data: string;
  web_region_backend_service: string;
}
export class google_iap_web_region_backend_service_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapWebRegionBackendServiceIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_iap_web_region_backend_service_iam_policy");
  }
}