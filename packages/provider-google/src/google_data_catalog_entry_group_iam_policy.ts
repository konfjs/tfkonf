import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDataCatalogEntryGroupIamPolicyArgs {
  entry_group: string;
  policy_data: string;
}
export class google_data_catalog_entry_group_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogEntryGroupIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_entry_group_iam_policy");
  }
}