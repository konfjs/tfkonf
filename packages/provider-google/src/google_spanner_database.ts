import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSpannerDatabaseArgsEncryptionConfig {
  kms_key_name?: string;
  kms_key_names?: string[];
}

export interface GoogleSpannerDatabaseArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSpannerDatabaseArgs {
  ddl?: string[];
  deletion_protection?: boolean;
  enable_drop_protection?: boolean;
  instance: string;
  name: string;
  encryption_config: GoogleSpannerDatabaseArgsEncryptionConfig;
  timeouts?: GoogleSpannerDatabaseArgsTimeouts;
}

export class google_spanner_database extends TerraformResource {
  readonly database_dialect?: string;
  readonly id?: string;
  readonly project?: string;
  readonly state!: string;
  readonly version_retention_period?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleSpannerDatabaseArgs) {
    super(config, "resource", args, resourceName, "google_spanner_database");
  }
}
