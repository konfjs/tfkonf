import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeInstanceGroupMembershipArgs {
  instance: string;
  instance_group: string;
  zone?: string;
  timeouts: Timeouts;
}
export class google_compute_instance_group_membership extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeInstanceGroupMembershipArgs) {
    super(config, "resource", args, resourceName, "google_compute_instance_group_membership");
  }
}