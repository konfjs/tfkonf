import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirestoreDatabaseArgsCmekConfig {
  kms_key_name: string;
}

export interface GoogleFirestoreDatabaseArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFirestoreDatabaseArgs {
  deletion_policy?: string;
  location_id: string;
  name: string;
  point_in_time_recovery_enablement?: string;
  type: string;
  cmek_config: GoogleFirestoreDatabaseArgsCmekConfig;
  timeouts?: GoogleFirestoreDatabaseArgsTimeouts;
}

export class google_firestore_database extends TerraformResource {
  readonly app_engine_integration_mode?: string;
  readonly concurrency_mode?: string;
  readonly create_time!: string;
  readonly delete_protection_state?: string;
  readonly earliest_version_time!: string;
  readonly etag!: string;
  readonly id?: string;
  readonly key_prefix!: string;
  readonly project?: string;
  readonly uid!: string;
  readonly update_time!: string;
  readonly version_retention_period!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirestoreDatabaseArgs) {
    super(config, "resource", args, resourceName, "google_firestore_database");
  }
}
