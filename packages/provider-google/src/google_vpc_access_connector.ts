import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleVpcAccessConnectorArgssubnet {
  name?: string;
}
export interface GoogleVpcAccessConnectorArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleVpcAccessConnectorArgs {
  ip_cidr_range?: string;
  machine_type?: string;
  name: string;
  subnet: GoogleVpcAccessConnectorArgssubnet;
  timeouts: GoogleVpcAccessConnectorArgstimeouts;
}
export class google_vpc_access_connector extends TerraformResource {
  readonly connected_projects!: string[];
  readonly id?: string;
  readonly max_instances?: number;
  readonly max_throughput?: number;
  readonly min_instances?: number;
  readonly min_throughput?: number;
  readonly network?: string;
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVpcAccessConnectorArgs) {
    super(config, "resource", args, resourceName, "google_vpc_access_connector");
  }
}