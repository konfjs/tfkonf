import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeSharedVpcServiceProjectArgs {
  deletion_policy?: string;
  host_project: string;
  service_project: string;
  timeouts: Timeouts;
}
export class google_compute_shared_vpc_service_project extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeSharedVpcServiceProjectArgs) {
    super(config, "resource", args, resourceName, "google_compute_shared_vpc_service_project");
  }
}