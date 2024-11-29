import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSqlSourceRepresentationInstanceArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleSqlSourceRepresentationInstanceArgs {
  ca_certificate?: string;
  client_certificate?: string;
  client_key?: string;
  database_version: string;
  dump_file_path?: string;
  host: string;
  name: string;
  password?: string;
  port?: number;
  username?: string;
  timeouts: GoogleSqlSourceRepresentationInstanceArgsTimeouts;
}
export class google_sql_source_representation_instance extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSqlSourceRepresentationInstanceArgs) {
    super(config, "resource", args, resourceName, "google_sql_source_representation_instance");
  }
}