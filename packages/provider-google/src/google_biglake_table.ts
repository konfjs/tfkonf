import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleBiglakeTableArgsHiveOptionsStorageDescriptor {
  input_format?: string;
  location_uri?: string;
  output_format?: string;
}
export interface GoogleBiglakeTableArgsHiveOptions {
  parameters?: {
    [key: string]: string;
  };
  table_type?: string;
  storage_descriptor: GoogleBiglakeTableArgsHiveOptionsStorageDescriptor;
}
export interface GoogleBiglakeTableArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBiglakeTableArgs {
  database?: string;
  name: string;
  type?: string;
  hive_options: GoogleBiglakeTableArgsHiveOptions;
  timeouts: GoogleBiglakeTableArgsTimeouts;
}
export class google_biglake_table extends TerraformResource {
  readonly create_time!: string;
  readonly delete_time!: string;
  readonly etag!: string;
  readonly expire_time!: string;
  readonly id?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBiglakeTableArgs) {
    super(config, "resource", args, resourceName, "google_biglake_table");
  }
}