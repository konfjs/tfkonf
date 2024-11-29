import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeImageIamPolicyArgs {
  image: string;
  policy_data: string;
}
export class google_compute_image_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeImageIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_compute_image_iam_policy");
  }
}