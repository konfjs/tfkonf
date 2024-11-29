import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataCatalogPolicyTagIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataCatalogPolicyTagIamMemberArgs {
  member: string;
  policy_tag: string;
  role: string;
  condition: GoogleDataCatalogPolicyTagIamMemberArgscondition;
}
export class google_data_catalog_policy_tag_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogPolicyTagIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_policy_tag_iam_member");
  }
}