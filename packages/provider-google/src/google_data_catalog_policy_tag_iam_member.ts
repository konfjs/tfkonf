import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDataCatalogPolicyTagIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataCatalogPolicyTagIamMemberArgs {
  member: string;
  policy_tag: string;
  role: string;
  condition: GoogleDataCatalogPolicyTagIamMemberArgsCondition;
}
export class google_data_catalog_policy_tag_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogPolicyTagIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_policy_tag_iam_member");
  }
}