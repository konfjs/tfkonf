import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataCatalogEntryGroupIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataCatalogEntryGroupIamMemberArgs {
  entry_group: string;
  member: string;
  role: string;
  condition: GoogleDataCatalogEntryGroupIamMemberArgsCondition;
}
export class google_data_catalog_entry_group_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogEntryGroupIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_entry_group_iam_member");
  }
}