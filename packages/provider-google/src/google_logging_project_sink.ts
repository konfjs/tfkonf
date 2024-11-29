import { TerraformConfig, TerraformResource } from "tfs";
export interface BigqueryOptions {
  use_partitioned_tables: boolean;
}
export interface Exclusions {
  description?: string;
  disabled?: boolean;
  filter: string;
  name: string;
}
export interface GoogleLoggingProjectSinkArgs {
  custom_writer_identity?: string;
  description?: string;
  destination: string;
  disabled?: boolean;
  filter?: string;
  name: string;
  unique_writer_identity?: boolean;
  bigquery_options: BigqueryOptions;
  exclusions: Exclusions;
}
export class google_logging_project_sink extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly writer_identity!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingProjectSinkArgs) {
    super(config, "resource", args, resourceName, "google_logging_project_sink");
  }
}