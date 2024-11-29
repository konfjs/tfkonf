import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleSqlDatabaseArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSqlDatabaseArgs {
  deletion_policy?: string;
  instance: string;
  name: string;
  timeouts: GoogleSqlDatabaseArgsTimeouts;
}
export class google_sql_database extends TerraformResource {
  readonly charset?: string;
  readonly collation?: string;
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSqlDatabaseArgs) {
    super(config, "resource", args, resourceName, "google_sql_database");
  }
}