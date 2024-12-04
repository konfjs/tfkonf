import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccV2FolderSccBigQueryExportArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccV2FolderSccBigQueryExportArgs {
  big_query_export_id: string;
  dataset?: string;
  description?: string;
  filter?: string;
  folder: string;
  location?: string;
  timeouts?: GoogleSccV2FolderSccBigQueryExportArgsTimeouts;
}

export class google_scc_v2_folder_scc_big_query_export extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly most_recent_editor!: string;
  readonly name!: string;
  readonly principal!: string;
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccV2FolderSccBigQueryExportArgs) {
    super(config, "resource", args, resourceName, "google_scc_v2_folder_scc_big_query_export");
  }
}
