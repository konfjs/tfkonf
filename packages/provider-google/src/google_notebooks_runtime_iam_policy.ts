import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleNotebooksRuntimeIamPolicyArgs {
  policy_data: string;
  runtime_name: string;
}
export class google_notebooks_runtime_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNotebooksRuntimeIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_notebooks_runtime_iam_policy");
  }
}