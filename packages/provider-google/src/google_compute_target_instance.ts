import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeTargetInstanceArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeTargetInstanceArgs {
  description?: string;
  instance: string;
  name: string;
  nat_policy?: string;
  timeouts: GoogleComputeTargetInstanceArgstimeouts;
}
export class google_compute_target_instance extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeTargetInstanceArgs) {
    super(config, "resource", args, resourceName, "google_compute_target_instance");
  }
}