import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleOrganizationIamMemberArgs {
  member: string;
  org_id: string;
  role: string;
  condition: Condition;
}
export class google_organization_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleOrganizationIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_organization_iam_member");
  }
}