import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleSccProjectSccBigQueryExportArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccProjectSccBigQueryExportArgs {
  big_query_export_id: string;
  dataset?: string;
  description?: string;
  filter?: string;
  timeouts?: GoogleSccProjectSccBigQueryExportArgsTimeouts;
}
export class google_scc_project_scc_big_query_export extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly most_recent_editor!: string;
  readonly name!: string;
  readonly principal!: string;
  readonly project?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccProjectSccBigQueryExportArgs) {
    super(config, "resource", args, resourceName, "google_scc_project_scc_big_query_export");
  }
}