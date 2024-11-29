import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeInstanceGroupNamedPortArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeInstanceGroupNamedPortArgs {
  group: string;
  name: string;
  port: number;
  timeouts?: GoogleComputeInstanceGroupNamedPortArgsTimeouts;
}
export class google_compute_instance_group_named_port extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeInstanceGroupNamedPortArgs) {
    super(config, "resource", args, resourceName, "google_compute_instance_group_named_port");
  }
}