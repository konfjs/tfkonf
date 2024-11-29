import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIapAppEngineServiceIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapAppEngineServiceIamMemberArgs {
  app_id: string;
  member: string;
  role: string;
  service: string;
  condition: GoogleIapAppEngineServiceIamMemberArgscondition;
}
export class google_iap_app_engine_service_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapAppEngineServiceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_iap_app_engine_service_iam_member");
  }
}