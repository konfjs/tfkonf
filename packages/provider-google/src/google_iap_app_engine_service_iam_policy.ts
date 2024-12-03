import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleIapAppEngineServiceIamPolicyArgs {
  app_id: string;
  policy_data: string;
  service: string;
}
export class google_iap_app_engine_service_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapAppEngineServiceIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_iap_app_engine_service_iam_policy");
  }
}