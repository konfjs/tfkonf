import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleFolderIamBindingArgs {
  folder: string;
  members: string[];
  role: string;
  condition: Condition;
}
export class google_folder_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFolderIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_folder_iam_binding");
  }
}