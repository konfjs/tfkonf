import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleComputeSubnetworkIamBindingArgs {
  members: string[];
  role: string;
  subnetwork: string;
  condition: Condition;
}
export class google_compute_subnetwork_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeSubnetworkIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_compute_subnetwork_iam_binding");
  }
}