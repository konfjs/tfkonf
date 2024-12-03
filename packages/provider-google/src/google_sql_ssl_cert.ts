import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleSqlSslCertArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleSqlSslCertArgs {
  common_name: string;
  instance: string;
  timeouts?: GoogleSqlSslCertArgsTimeouts;
}
export class google_sql_ssl_cert extends TerraformResource {
  readonly cert!: string;
  readonly cert_serial_number!: string;
  readonly create_time!: string;
  readonly expiration_time!: string;
  readonly id?: string;
  readonly private_key!: string;
  readonly project?: string;
  readonly server_ca_cert!: string;
  readonly sha1_fingerprint!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSqlSslCertArgs) {
    super(config, "resource", args, resourceName, "google_sql_ssl_cert");
  }
}