import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeInstanceIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleComputeInstanceIamMemberArgs {
  instance_name: string;
  member: string;
  role: string;
  condition: GoogleComputeInstanceIamMemberArgscondition;
}
export class google_compute_instance_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeInstanceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_compute_instance_iam_member");
  }
}