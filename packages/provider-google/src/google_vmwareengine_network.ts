import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVmwareengineNetworkArgs {
  description?: string;
  location: string;
  name: string;
  type: string;
  timeouts: Timeouts;
}
export class google_vmwareengine_network extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly state!: string;
  readonly uid!: string;
  readonly vpc_networks!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVmwareengineNetworkArgs) {
    super(config, "resource", args, resourceName, "google_vmwareengine_network");
  }
}