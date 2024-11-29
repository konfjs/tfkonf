import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleProjectIamAuditConfigArgsAuditLogConfig {
  exempted_members?: string[];
  log_type: string;
}
export interface GoogleProjectIamAuditConfigArgs {
  project: string;
  service: string;
  audit_log_config: GoogleProjectIamAuditConfigArgsAuditLogConfig;
}
export class google_project_iam_audit_config extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleProjectIamAuditConfigArgs) {
    super(config, "resource", args, resourceName, "google_project_iam_audit_config");
  }
}