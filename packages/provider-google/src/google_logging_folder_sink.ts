import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleLoggingFolderSinkArgsBigqueryOptions {
  use_partitioned_tables: boolean;
}
export interface GoogleLoggingFolderSinkArgsexclusions {
  description?: string;
  disabled?: boolean;
  filter: string;
  name: string;
}
export interface GoogleLoggingFolderSinkArgs {
  description?: string;
  destination: string;
  disabled?: boolean;
  filter?: string;
  folder: string;
  include_children?: boolean;
  intercept_children?: boolean;
  name: string;
  bigquery_options: GoogleLoggingFolderSinkArgsBigqueryOptions;
  exclusions: GoogleLoggingFolderSinkArgsexclusions;
}
export class google_logging_folder_sink extends TerraformResource {
  readonly id?: string;
  readonly writer_identity!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingFolderSinkArgs) {
    super(config, "resource", args, resourceName, "google_logging_folder_sink");
  }
}