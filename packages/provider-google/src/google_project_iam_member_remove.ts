import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleProjectIamMemberRemoveArgs {
  member: string;
  project: string;
  role: string;
}
export class google_project_iam_member_remove extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleProjectIamMemberRemoveArgs) {
    super(config, "resource", args, resourceName, "google_project_iam_member_remove");
  }
}