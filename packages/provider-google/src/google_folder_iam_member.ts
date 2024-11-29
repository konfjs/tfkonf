import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleFolderIamMemberArgs {
  folder: string;
  member: string;
  role: string;
  condition: Condition;
}
export class google_folder_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFolderIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_folder_iam_member");
  }
}