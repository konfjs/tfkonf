import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataCatalogEntryGroupArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataCatalogEntryGroupArgs {
  description?: string;
  display_name?: string;
  entry_group_id: string;
  timeouts: GoogleDataCatalogEntryGroupArgstimeouts;
}
export class google_data_catalog_entry_group extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogEntryGroupArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_entry_group");
  }
}