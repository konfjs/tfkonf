import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleSccEventThreatDetectionCustomModuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccEventThreatDetectionCustomModuleArgs {
  config: string;
  display_name?: string;
  enablement_state: string;
  organization: string;
  type: string;
  timeouts?: GoogleSccEventThreatDetectionCustomModuleArgsTimeouts;
}
export class google_scc_event_threat_detection_custom_module extends TerraformResource {
  readonly id?: string;
  readonly last_editor!: string;
  readonly name!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccEventThreatDetectionCustomModuleArgs) {
    super(config, "resource", args, resourceName, "google_scc_event_threat_detection_custom_module");
  }
}