import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleNotebooksInstanceIamPolicyArgs {
  instance_name: string;
  policy_data: string;
}
export class google_notebooks_instance_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNotebooksInstanceIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_notebooks_instance_iam_policy");
  }
}