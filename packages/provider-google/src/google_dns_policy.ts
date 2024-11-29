import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDnsPolicyArgsAlternativeNameServerConfigTargetNameServers {
  forwarding_path?: string;
  ipv4_address: string;
}
export interface GoogleDnsPolicyArgsAlternativeNameServerConfig {
  target_name_servers: GoogleDnsPolicyArgsAlternativeNameServerConfigTargetNameServers;
}
export interface GoogleDnsPolicyArgsnetworks {
  network_url: string;
}
export interface GoogleDnsPolicyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDnsPolicyArgs {
  description?: string;
  enable_inbound_forwarding?: boolean;
  enable_logging?: boolean;
  name: string;
  alternative_name_server_config: GoogleDnsPolicyArgsAlternativeNameServerConfig;
  networks: GoogleDnsPolicyArgsnetworks;
  timeouts: GoogleDnsPolicyArgstimeouts;
}
export class google_dns_policy extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDnsPolicyArgs) {
    super(config, "resource", args, resourceName, "google_dns_policy");
  }
}