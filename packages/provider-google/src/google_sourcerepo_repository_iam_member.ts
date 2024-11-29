import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleSourcerepoRepositoryIamMemberArgs {
  member: string;
  repository: string;
  role: string;
  condition: Condition;
}
export class google_sourcerepo_repository_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSourcerepoRepositoryIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_sourcerepo_repository_iam_member");
  }
}