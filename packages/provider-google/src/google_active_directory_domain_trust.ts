import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleActiveDirectoryDomainTrustArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleActiveDirectoryDomainTrustArgs {
  domain: string;
  selective_authentication?: boolean;
  target_dns_ip_addresses: string[];
  target_domain_name: string;
  trust_direction: string;
  trust_handshake_secret: string;
  trust_type: string;
  timeouts: GoogleActiveDirectoryDomainTrustArgsTimeouts;
}
export class google_active_directory_domain_trust extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleActiveDirectoryDomainTrustArgs) {
    super(config, "resource", args, resourceName, "google_active_directory_domain_trust");
  }
}