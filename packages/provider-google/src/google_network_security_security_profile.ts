import { TerraformConfig, TerraformResource } from "tfs";
export interface SeverityOverrides {
  action: string;
  severity: string;
}
export interface ThreatOverrides {
  action: string;
  threat_id: string;
}
export interface ThreatPreventionProfile {
  severity_overrides: SeverityOverrides;
  threat_overrides: ThreatOverrides;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkSecuritySecurityProfileArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location?: string;
  name: string;
  parent?: string;
  type: string;
  threat_prevention_profile: ThreatPreventionProfile;
  timeouts: Timeouts;
}
export class google_network_security_security_profile extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly self_link!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkSecuritySecurityProfileArgs) {
    super(config, "resource", args, resourceName, "google_network_security_security_profile");
  }
}