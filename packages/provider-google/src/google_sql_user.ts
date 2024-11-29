import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSqlUserArgsPasswordPolicy {
  allowed_failed_attempts?: number;
  enable_failed_attempts_check?: boolean;
  enable_password_verification?: boolean;
  password_expiration_duration?: string;
}
export interface GoogleSqlUserArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSqlUserArgs {
  deletion_policy?: string;
  instance: string;
  name: string;
  password?: string;
  type?: string;
  password_policy: GoogleSqlUserArgsPasswordPolicy;
  timeouts: GoogleSqlUserArgstimeouts;
}
export class google_sql_user extends TerraformResource {
  readonly host?: string;
  readonly id?: string;
  readonly project?: string;
  readonly sql_server_user_details!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSqlUserArgs) {
    super(config, "resource", args, resourceName, "google_sql_user");
  }
}