import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleEdgenetworkNetworkArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleEdgenetworkNetworkArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  mtu?: number;
  network_id: string;
  zone: string;
  timeouts: GoogleEdgenetworkNetworkArgsTimeouts;
}
export class google_edgenetwork_network extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleEdgenetworkNetworkArgs) {
    super(config, "resource", args, resourceName, "google_edgenetwork_network");
  }
}