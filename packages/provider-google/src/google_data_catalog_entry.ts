import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataCatalogEntryArgsGcsFilesetSpec {
  file_patterns: string[];
}
export interface GoogleDataCatalogEntryArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataCatalogEntryArgs {
  description?: string;
  display_name?: string;
  entry_group: string;
  entry_id: string;
  schema?: string;
  type?: string;
  user_specified_system?: string;
  user_specified_type?: string;
  gcs_fileset_spec: GoogleDataCatalogEntryArgsGcsFilesetSpec;
  timeouts: GoogleDataCatalogEntryArgstimeouts;
}
export class google_data_catalog_entry extends TerraformResource {
  readonly bigquery_date_sharded_spec!: any[];
  readonly bigquery_table_spec!: any[];
  readonly id?: string;
  readonly integrated_system!: string;
  readonly linked_resource?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogEntryArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_entry");
  }
}