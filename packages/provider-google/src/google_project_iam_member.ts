import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleProjectIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleProjectIamMemberArgs {
  member: string;
  project: string;
  role: string;
  condition: GoogleProjectIamMemberArgscondition;
}
export class google_project_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleProjectIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_project_iam_member");
  }
}