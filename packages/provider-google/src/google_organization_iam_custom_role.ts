import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleOrganizationIamCustomRoleArgs {
  description?: string;
  org_id: string;
  permissions: string[];
  role_id: string;
  stage?: string;
  title: string;
}
export class google_organization_iam_custom_role extends TerraformResource {
  readonly deleted!: boolean;
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleOrganizationIamCustomRoleArgs) {
    super(config, "resource", args, resourceName, "google_organization_iam_custom_role");
  }
}