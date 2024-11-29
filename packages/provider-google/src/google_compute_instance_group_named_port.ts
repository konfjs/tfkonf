import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeInstanceGroupNamedPortArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeInstanceGroupNamedPortArgs {
  group: string;
  name: string;
  port: number;
  timeouts: GoogleComputeInstanceGroupNamedPortArgstimeouts;
}
export class google_compute_instance_group_named_port extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeInstanceGroupNamedPortArgs) {
    super(config, "resource", args, resourceName, "google_compute_instance_group_named_port");
  }
}