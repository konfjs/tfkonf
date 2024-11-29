import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeSharedVpcHostProjectArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeSharedVpcHostProjectArgs {
  project: string;
  timeouts: GoogleComputeSharedVpcHostProjectArgstimeouts;
}
export class google_compute_shared_vpc_host_project extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeSharedVpcHostProjectArgs) {
    super(config, "resource", args, resourceName, "google_compute_shared_vpc_host_project");
  }
}