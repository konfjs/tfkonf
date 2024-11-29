import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleNotebooksRuntimeIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleNotebooksRuntimeIamBindingArgs {
  members: string[];
  role: string;
  runtime_name: string;
  condition: GoogleNotebooksRuntimeIamBindingArgsCondition;
}
export class google_notebooks_runtime_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNotebooksRuntimeIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_notebooks_runtime_iam_binding");
  }
}