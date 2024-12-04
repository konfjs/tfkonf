import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccFolderSccBigQueryExportArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccFolderSccBigQueryExportArgs {
  big_query_export_id: string;
  dataset: string;
  description: string;
  filter: string;
  folder: string;
  timeouts?: GoogleSccFolderSccBigQueryExportArgsTimeouts;
}

export class google_scc_folder_scc_big_query_export extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly most_recent_editor!: string;
  readonly name!: string;
  readonly principal!: string;
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccFolderSccBigQueryExportArgs) {
    super(config, "resource", args, resourceName, "google_scc_folder_scc_big_query_export");
  }
}
