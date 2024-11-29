import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleAppEngineServiceNetworkSettingsArgsNetworkSettings {
  ingress_traffic_allowed?: string;
}
export interface GoogleAppEngineServiceNetworkSettingsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAppEngineServiceNetworkSettingsArgs {
  service: string;
  network_settings: GoogleAppEngineServiceNetworkSettingsArgsNetworkSettings;
  timeouts?: GoogleAppEngineServiceNetworkSettingsArgsTimeouts;
}
export class google_app_engine_service_network_settings extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAppEngineServiceNetworkSettingsArgs) {
    super(config, "resource", args, resourceName, "google_app_engine_service_network_settings");
  }
}