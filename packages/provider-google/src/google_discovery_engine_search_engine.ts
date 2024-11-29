import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDiscoveryEngineSearchEngineArgsCommonConfig {
  company_name?: string;
}
export interface GoogleDiscoveryEngineSearchEngineArgsSearchEngineConfig {
  search_add_ons?: string[];
  search_tier?: string;
}
export interface GoogleDiscoveryEngineSearchEngineArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDiscoveryEngineSearchEngineArgs {
  collection_id: string;
  data_store_ids: string[];
  display_name: string;
  engine_id: string;
  industry_vertical?: string;
  location: string;
  common_config: GoogleDiscoveryEngineSearchEngineArgsCommonConfig;
  search_engine_config: GoogleDiscoveryEngineSearchEngineArgsSearchEngineConfig;
  timeouts?: GoogleDiscoveryEngineSearchEngineArgsTimeouts;
}
export class google_discovery_engine_search_engine extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDiscoveryEngineSearchEngineArgs) {
    super(config, "resource", args, resourceName, "google_discovery_engine_search_engine");
  }
}