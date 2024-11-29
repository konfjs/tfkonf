import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeImageIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleComputeImageIamBindingArgs {
  image: string;
  members: string[];
  role: string;
  condition: GoogleComputeImageIamBindingArgsCondition;
}
export class google_compute_image_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeImageIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_compute_image_iam_binding");
  }
}