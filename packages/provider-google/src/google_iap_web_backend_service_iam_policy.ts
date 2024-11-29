import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIapWebBackendServiceIamPolicyArgs {
  policy_data: string;
  web_backend_service: string;
}
export class google_iap_web_backend_service_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapWebBackendServiceIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_iap_web_backend_service_iam_policy");
  }
}