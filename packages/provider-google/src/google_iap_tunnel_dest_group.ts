import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIapTunnelDestGroupArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIapTunnelDestGroupArgs {
  cidrs?: string[];
  fqdns?: string[];
  group_name: string;
  timeouts: GoogleIapTunnelDestGroupArgstimeouts;
}
export class google_iap_tunnel_dest_group extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapTunnelDestGroupArgs) {
    super(config, "resource", args, resourceName, "google_iap_tunnel_dest_group");
  }
}