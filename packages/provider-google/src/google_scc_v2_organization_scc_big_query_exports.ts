import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccV2OrganizationSccBigQueryExportsArgs {
  big_query_export_id: string;
  dataset?: string;
  description?: string;
  filter?: string;
  location?: string;
  name?: string;
  organization: string;
  timeouts: Timeouts;
}
export class google_scc_v2_organization_scc_big_query_exports extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly most_recent_editor!: string;
  readonly principal!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccV2OrganizationSccBigQueryExportsArgs) {
    super(config, "resource", args, resourceName, "google_scc_v2_organization_scc_big_query_exports");
  }
}