import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeSubnetworkIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleComputeSubnetworkIamBindingArgs {
  members: string[];
  role: string;
  subnetwork: string;
  condition: GoogleComputeSubnetworkIamBindingArgsCondition;
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