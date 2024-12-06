import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapWebBackendServiceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapWebBackendServiceIamMemberArgs {
  member: string;
  role: string;
  web_backend_service: string;
  condition: GoogleIapWebBackendServiceIamMemberArgsCondition;
}

export class google_iap_web_backend_service_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapWebBackendServiceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_iap_web_backend_service_iam_member");
  }
}
