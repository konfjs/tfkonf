import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleNotebooksInstanceIamBindingArgs {
  instance_name: string;
  members: string[];
  role: string;
  condition: Condition;
}
export class google_notebooks_instance_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNotebooksInstanceIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_notebooks_instance_iam_binding");
  }
}