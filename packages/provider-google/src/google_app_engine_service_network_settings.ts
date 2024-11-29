import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAppEngineServiceNetworkSettingsArgsNetworkSettings {
  ingress_traffic_allowed?: string;
}
export interface GoogleAppEngineServiceNetworkSettingsArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAppEngineServiceNetworkSettingsArgs {
  service: string;
  network_settings: GoogleAppEngineServiceNetworkSettingsArgsNetworkSettings;
  timeouts: GoogleAppEngineServiceNetworkSettingsArgstimeouts;
}
export class google_app_engine_service_network_settings extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAppEngineServiceNetworkSettingsArgs) {
    super(config, "resource", args, resourceName, "google_app_engine_service_network_settings");
  }
}