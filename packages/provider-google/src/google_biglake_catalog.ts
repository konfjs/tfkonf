import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleBiglakeCatalogArgs {
  location: string;
  name: string;
  timeouts: Timeouts;
}
export class google_biglake_catalog extends TerraformResource {
  readonly create_time!: string;
  readonly delete_time!: string;
  readonly expire_time!: string;
  readonly id?: string;
  readonly project?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBiglakeCatalogArgs) {
    super(config, "resource", args, resourceName, "google_biglake_catalog");
  }
}