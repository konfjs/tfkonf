import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNotebooksRuntimeIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleNotebooksRuntimeIamMemberArgs {
  member: string;
  role: string;
  runtime_name: string;
  condition: GoogleNotebooksRuntimeIamMemberArgsCondition;
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