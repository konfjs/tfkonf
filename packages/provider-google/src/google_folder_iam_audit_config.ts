import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleFolderIamAuditConfigArgsAuditLogConfig {
  exempted_members?: string[];
  log_type: string;
}
export interface GoogleFolderIamAuditConfigArgs {
  folder: string;
  service: string;
  audit_log_config: GoogleFolderIamAuditConfigArgsAuditLogConfig;
}
export class google_folder_iam_audit_config extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFolderIamAuditConfigArgs) {
    super(config, "resource", args, resourceName, "google_folder_iam_audit_config");
  }
}