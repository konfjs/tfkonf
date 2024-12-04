import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeImageIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleComputeImageIamMemberArgs {
  image: string;
  member: string;
  role: string;
  condition: GoogleComputeImageIamMemberArgsCondition;
}

export class google_compute_image_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeImageIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_compute_image_iam_member");
  }
}
