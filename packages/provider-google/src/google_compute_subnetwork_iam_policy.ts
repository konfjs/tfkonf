import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeSubnetworkIamPolicyArgs {
  policy_data: string;
  subnetwork: string;
}
export class google_compute_subnetwork_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeSubnetworkIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_compute_subnetwork_iam_policy");
  }
}