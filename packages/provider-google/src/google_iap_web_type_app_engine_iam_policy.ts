import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapWebTypeAppEngineIamPolicyArgs {
  app_id: string;
  policy_data: string;
}

export class google_iap_web_type_app_engine_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapWebTypeAppEngineIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_iap_web_type_app_engine_iam_policy");
  }
}
