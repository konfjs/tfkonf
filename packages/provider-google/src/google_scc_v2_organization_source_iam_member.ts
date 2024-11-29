import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSccV2OrganizationSourceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleSccV2OrganizationSourceIamMemberArgs {
  member: string;
  organization: string;
  role: string;
  source: string;
  condition: GoogleSccV2OrganizationSourceIamMemberArgsCondition;
}
export class google_scc_v2_organization_source_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccV2OrganizationSourceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_scc_v2_organization_source_iam_member");
  }
}