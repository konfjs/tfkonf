import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleDiscoveryEngineSchemaArgs {
  data_store_id: string;
  json_schema?: string;
  location: string;
  schema_id: string;
  timeouts: Timeouts;
}
export class google_discovery_engine_schema extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDiscoveryEngineSchemaArgs) {
    super(config, "resource", args, resourceName, "google_discovery_engine_schema");
  }
}