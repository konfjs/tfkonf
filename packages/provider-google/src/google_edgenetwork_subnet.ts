import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleEdgenetworkSubnetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleEdgenetworkSubnetArgs {
  description?: string;
  ipv4_cidr?: string[];
  ipv6_cidr?: string[];
  labels?: {
    [key: string]: string;
  };
  location: string;
  network: string;
  subnet_id: string;
  zone: string;
  timeouts?: GoogleEdgenetworkSubnetArgsTimeouts;
}
export class google_edgenetwork_subnet extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  readonly vlan_id?: number;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleEdgenetworkSubnetArgs) {
    super(config, "resource", args, resourceName, "google_edgenetwork_subnet");
  }
}