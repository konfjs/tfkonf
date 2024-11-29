import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDiscoveryEngineTargetSiteArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleDiscoveryEngineTargetSiteArgs {
  data_store_id: string;
  exact_match?: boolean;
  location: string;
  provided_uri_pattern: string;
  type?: string;
  timeouts: GoogleDiscoveryEngineTargetSiteArgsTimeouts;
}
export class google_discovery_engine_target_site extends TerraformResource {
  readonly failure_reason!: any[];
  readonly generated_uri_pattern!: string;
  readonly id?: string;
  readonly indexing_status!: string;
  readonly name!: string;
  readonly project?: string;
  readonly root_domain_uri!: string;
  readonly site_verification_info!: any[];
  readonly target_site_id!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDiscoveryEngineTargetSiteArgs) {
    super(config, "resource", args, resourceName, "google_discovery_engine_target_site");
  }
}