import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNotebooksRuntimeIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleNotebooksRuntimeIamMemberArgs {
  member: string;
  role: string;
  runtime_name: string;
  condition: GoogleNotebooksRuntimeIamMemberArgscondition;
}
export class google_notebooks_runtime_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNotebooksRuntimeIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_notebooks_runtime_iam_member");
  }
}