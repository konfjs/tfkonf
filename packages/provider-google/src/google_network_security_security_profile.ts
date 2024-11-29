import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNetworkSecuritySecurityProfileArgsThreatPreventionProfileSeverityOverrides {
  action: string;
  severity: string;
}
export interface GoogleNetworkSecuritySecurityProfileArgsThreatPreventionProfileThreatOverrides {
  action: string;
  threat_id: string;
}
export interface GoogleNetworkSecuritySecurityProfileArgsThreatPreventionProfile {
  severity_overrides: GoogleNetworkSecuritySecurityProfileArgsThreatPreventionProfileSeverityOverrides;
  threat_overrides: GoogleNetworkSecuritySecurityProfileArgsThreatPreventionProfileThreatOverrides;
}
export interface GoogleNetworkSecuritySecurityProfileArgsTimeouts {
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
  threat_prevention_profile: GoogleNetworkSecuritySecurityProfileArgsThreatPreventionProfile;
  timeouts: GoogleNetworkSecuritySecurityProfileArgsTimeouts;
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