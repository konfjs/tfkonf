import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleFolderIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleFolderIamMemberArgs {
  folder: string;
  member: string;
  role: string;
  condition: GoogleFolderIamMemberArgsCondition;
}
export class google_folder_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFolderIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_folder_iam_member");
  }
}