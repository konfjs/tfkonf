import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBiglakeDatabaseArgsHiveOptions {
  location_uri?: string;
  parameters?: { [key: string]: string };
}

export interface GoogleBiglakeDatabaseArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBiglakeDatabaseArgs {
  catalog: string;
  name: string;
  type: string;
  hive_options: GoogleBiglakeDatabaseArgsHiveOptions;
  timeouts?: GoogleBiglakeDatabaseArgsTimeouts;
}

export class google_biglake_database extends TerraformResource {
  readonly create_time!: string;
  readonly delete_time!: string;
  readonly expire_time!: string;
  readonly id?: string;
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleBiglakeDatabaseArgs) {
    super(config, "resource", args, resourceName, "google_biglake_database");
  }
}
