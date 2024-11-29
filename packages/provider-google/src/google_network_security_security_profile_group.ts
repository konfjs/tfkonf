import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleNetworkSecuritySecurityProfileGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkSecuritySecurityProfileGroupArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location?: string;
  name: string;
  parent?: string;
  threat_prevention_profile?: string;
  timeouts: GoogleNetworkSecuritySecurityProfileGroupArgsTimeouts;
}
export class google_network_security_security_profile_group extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkSecuritySecurityProfileGroupArgs) {
    super(config, "resource", args, resourceName, "google_network_security_security_profile_group");
  }
}