import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSccManagementOrganizationEventThreatDetectionCustomModuleArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccManagementOrganizationEventThreatDetectionCustomModuleArgs {
  config?: string;
  display_name?: string;
  enablement_state?: string;
  location?: string;
  organization: string;
  type?: string;
  timeouts: GoogleSccManagementOrganizationEventThreatDetectionCustomModuleArgstimeouts;
}
export class google_scc_management_organization_event_threat_detection_custom_module extends TerraformResource {
  readonly id?: string;
  readonly last_editor!: string;
  readonly name!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccManagementOrganizationEventThreatDetectionCustomModuleArgs) {
    super(config, "resource", args, resourceName, "google_scc_management_organization_event_threat_detection_custom_module");
  }
}