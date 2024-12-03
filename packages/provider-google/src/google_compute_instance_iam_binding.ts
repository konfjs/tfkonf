import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeInstanceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleComputeInstanceIamBindingArgs {
  instance_name: string;
  members: string[];
  role: string;
  condition: GoogleComputeInstanceIamBindingArgsCondition;
}
export class google_compute_instance_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeInstanceIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_compute_instance_iam_binding");
  }
}