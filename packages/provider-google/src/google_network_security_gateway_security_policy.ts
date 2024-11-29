import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkSecurityGatewaySecurityPolicyArgs {
  description?: string;
  location?: string;
  name: string;
  tls_inspection_policy?: string;
  timeouts: Timeouts;
}
export class google_network_security_gateway_security_policy extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkSecurityGatewaySecurityPolicyArgs) {
    super(config, "resource", args, resourceName, "google_network_security_gateway_security_policy");
  }
}