import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleProjectIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleProjectIamBindingArgs {
  members: string[];
  project: string;
  role: string;
  condition: GoogleProjectIamBindingArgscondition;
}
export class google_project_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleProjectIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_project_iam_binding");
  }
}