import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccV2ProjectSccBigQueryExportArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccV2ProjectSccBigQueryExportArgs {
  big_query_export_id: string;
  dataset?: string;
  description?: string;
  filter?: string;
  location?: string;
  timeouts?: GoogleSccV2ProjectSccBigQueryExportArgsTimeouts;
}

export class google_scc_v2_project_scc_big_query_export extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly most_recent_editor!: string;
  readonly name!: string;
  readonly principal!: string;
  readonly project?: string;
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccV2ProjectSccBigQueryExportArgs) {
    super(config, "resource", args, resourceName, "google_scc_v2_project_scc_big_query_export");
  }
}
