import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleNetworkSecurityUrlListsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkSecurityUrlListsArgs {
  description?: string;
  location: string;
  name: string;
  values: string[];
  timeouts?: GoogleNetworkSecurityUrlListsArgsTimeouts;
}
export class google_network_security_url_lists extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly project?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkSecurityUrlListsArgs) {
    super(config, "resource", args, resourceName, "google_network_security_url_lists");
  }
}