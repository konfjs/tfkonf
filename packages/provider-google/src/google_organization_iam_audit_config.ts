import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleOrganizationIamAuditConfigArgsAuditLogConfig {
  exempted_members?: string[];
  log_type: string;
}
export interface GoogleOrganizationIamAuditConfigArgs {
  org_id: string;
  service: string;
  audit_log_config: GoogleOrganizationIamAuditConfigArgsAuditLogConfig;
}
export class google_organization_iam_audit_config extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleOrganizationIamAuditConfigArgs) {
    super(config, "resource", args, resourceName, "google_organization_iam_audit_config");
  }
}