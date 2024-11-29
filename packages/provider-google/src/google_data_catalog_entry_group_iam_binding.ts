import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataCatalogEntryGroupIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataCatalogEntryGroupIamBindingArgs {
  entry_group: string;
  members: string[];
  role: string;
  condition: GoogleDataCatalogEntryGroupIamBindingArgscondition;
}
export class google_data_catalog_entry_group_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogEntryGroupIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_entry_group_iam_binding");
  }
}