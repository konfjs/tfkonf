import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeDiskIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleComputeDiskIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: GoogleComputeDiskIamBindingArgscondition;
}
export class google_compute_disk_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeDiskIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_compute_disk_iam_binding");
  }
}