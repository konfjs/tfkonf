import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeSubnetworkIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleComputeSubnetworkIamMemberArgs {
  member: string;
  role: string;
  subnetwork: string;
  condition: GoogleComputeSubnetworkIamMemberArgsCondition;
}

export class google_compute_subnetwork_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeSubnetworkIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_compute_subnetwork_iam_member");
  }
}
