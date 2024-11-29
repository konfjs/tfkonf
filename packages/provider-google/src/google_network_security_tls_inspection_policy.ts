import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleNetworkSecurityTlsInspectionPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkSecurityTlsInspectionPolicyArgs {
  ca_pool: string;
  custom_tls_features?: string[];
  description?: string;
  exclude_public_ca_set?: boolean;
  location?: string;
  min_tls_version?: string;
  name: string;
  tls_feature_profile?: string;
  trust_config?: string;
  timeouts?: GoogleNetworkSecurityTlsInspectionPolicyArgsTimeouts;
}
export class google_network_security_tls_inspection_policy extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly project?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkSecurityTlsInspectionPolicyArgs) {
    super(config, "resource", args, resourceName, "google_network_security_tls_inspection_policy");
  }
}