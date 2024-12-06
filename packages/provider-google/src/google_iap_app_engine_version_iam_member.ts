import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapAppEngineVersionIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapAppEngineVersionIamMemberArgs {
  app_id: string;
  member: string;
  role: string;
  service: string;
  version_id: string;
  condition: GoogleIapAppEngineVersionIamMemberArgsCondition;
}

export class google_iap_app_engine_version_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapAppEngineVersionIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_iap_app_engine_version_iam_member");
  }
}
