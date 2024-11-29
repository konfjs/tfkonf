import { TerraformConfig, TerraformResource } from "tfs";
export interface HiveOptions {
  location_uri?: string;
  parameters?: {
    [key: string]: string;
  };
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBiglakeDatabaseArgs {
  catalog: string;
  name: string;
  type: string;
  hive_options: HiveOptions;
  timeouts: Timeouts;
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