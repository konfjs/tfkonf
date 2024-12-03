import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleSccOrganizationSccBigQueryExportArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccOrganizationSccBigQueryExportArgs {
  big_query_export_id: string;
  dataset?: string;
  description?: string;
  filter?: string;
  organization: string;
  timeouts?: GoogleSccOrganizationSccBigQueryExportArgsTimeouts;
}
export class google_scc_organization_scc_big_query_export extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly most_recent_editor!: string;
  readonly name!: string;
  readonly principal!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccOrganizationSccBigQueryExportArgs) {
    super(config, "resource", args, resourceName, "google_scc_organization_scc_big_query_export");
  }
}