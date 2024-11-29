import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleNotebooksInstanceIamMemberArgs {
  instance_name: string;
  member: string;
  role: string;
  condition: Condition;
}
export class google_notebooks_instance_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNotebooksInstanceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_notebooks_instance_iam_member");
  }
}