import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAppEngineApplicationArgsFeatureSettings {
  split_health_checks: boolean;
}
export interface GoogleAppEngineApplicationArgsiap {
  enabled?: boolean;
  oauth2_client_id: string;
  oauth2_client_secret: string;
}
export interface GoogleAppEngineApplicationArgstimeouts {
  create?: string;
  update?: string;
}
export interface GoogleAppEngineApplicationArgs {
  location_id: string;
  feature_settings: GoogleAppEngineApplicationArgsFeatureSettings;
  iap: GoogleAppEngineApplicationArgsiap;
  timeouts: GoogleAppEngineApplicationArgstimeouts;
}
export class google_app_engine_application extends TerraformResource {
  readonly app_id!: string;
  readonly auth_domain?: string;
  readonly code_bucket!: string;
  readonly database_type?: string;
  readonly default_bucket!: string;
  readonly default_hostname!: string;
  readonly gcr_domain!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly serving_status?: string;
  readonly url_dispatch_rule!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAppEngineApplicationArgs) {
    super(config, "resource", args, resourceName, "google_app_engine_application");
  }
}