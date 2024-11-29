import { TerraformConfig, TerraformResource } from "tfs";
export interface NamedPort {
  name: string;
  port: number;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeInstanceGroupArgs {
  description?: string;
  name: string;
  named_port: NamedPort;
  timeouts: Timeouts;
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