import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleOrganizationIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleOrganizationIamBindingArgs {
  members: string[];
  org_id: string;
  role: string;
  condition: GoogleOrganizationIamBindingArgsCondition;
}
export class google_organization_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleOrganizationIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_organization_iam_binding");
  }
}