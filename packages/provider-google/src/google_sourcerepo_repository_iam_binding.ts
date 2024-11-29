import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleSourcerepoRepositoryIamBindingArgs {
  members: string[];
  repository: string;
  role: string;
  condition: Condition;
}
export class google_sourcerepo_repository_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSourcerepoRepositoryIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_sourcerepo_repository_iam_binding");
  }
}