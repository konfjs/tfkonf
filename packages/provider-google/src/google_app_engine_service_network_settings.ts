import { TerraformConfig, TerraformResource } from "tfs";
export interface NetworkSettings {
  ingress_traffic_allowed?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAppEngineServiceNetworkSettingsArgs {
  service: string;
  network_settings: NetworkSettings;
  timeouts: Timeouts;
}
export class google_app_engine_service_network_settings extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAppEngineServiceNetworkSettingsArgs) {
    super(config, "resource", args, resourceName, "google_app_engine_service_network_settings");
  }
}