import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIapWebTypeAppEngineIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapWebTypeAppEngineIamMemberArgs {
  app_id: string;
  member: string;
  role: string;
  condition: GoogleIapWebTypeAppEngineIamMemberArgscondition;
}
export class google_iap_web_type_app_engine_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapWebTypeAppEngineIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_iap_web_type_app_engine_iam_member");
  }
}