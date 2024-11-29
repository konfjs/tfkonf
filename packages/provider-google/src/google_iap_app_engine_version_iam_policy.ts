import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleIapAppEngineVersionIamPolicyArgs {
  app_id: string;
  policy_data: string;
  service: string;
  version_id: string;
}
export class google_iap_app_engine_version_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapAppEngineVersionIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_iap_app_engine_version_iam_policy");
  }
}