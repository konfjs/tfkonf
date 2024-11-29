import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSccV2OrganizationSourceIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleSccV2OrganizationSourceIamBindingArgs {
  members: string[];
  organization: string;
  role: string;
  source: string;
  condition: GoogleSccV2OrganizationSourceIamBindingArgscondition;
}
export class google_scc_v2_organization_source_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccV2OrganizationSourceIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_scc_v2_organization_source_iam_binding");
  }
}