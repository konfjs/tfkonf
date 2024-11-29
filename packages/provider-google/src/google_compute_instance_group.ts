import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeInstanceGroupArgsNamedPort {
  name: string;
  port: number;
}
export interface GoogleComputeInstanceGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeInstanceGroupArgs {
  description?: string;
  name: string;
  named_port: GoogleComputeInstanceGroupArgsNamedPort;
  timeouts?: GoogleComputeInstanceGroupArgsTimeouts;
}
export class google_compute_instance_group extends TerraformResource {
  readonly id?: string;
  readonly instances?: string[];
  readonly network?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly size!: number;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeInstanceGroupArgs) {
    super(config, "resource", args, resourceName, "google_compute_instance_group");
  }
}