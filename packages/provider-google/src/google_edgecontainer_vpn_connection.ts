import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleEdgecontainerVpnConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleEdgecontainerVpnConnectionArgsVpcProject {
  project_id?: string;
}
export interface GoogleEdgecontainerVpnConnectionArgs {
  cluster: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  nat_gateway_ip?: string;
  router?: string;
  vpc?: string;
  timeouts?: GoogleEdgecontainerVpnConnectionArgsTimeouts;
  vpc_project: GoogleEdgecontainerVpnConnectionArgsVpcProject;
}
export class google_edgecontainer_vpn_connection extends TerraformResource {
  readonly create_time!: string;
  readonly details!: any[];
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly enable_high_availability?: boolean;
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleEdgecontainerVpnConnectionArgs) {
    super(config, "resource", args, resourceName, "google_edgecontainer_vpn_connection");
  }
}